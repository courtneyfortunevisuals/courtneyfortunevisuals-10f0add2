-- Create password attempt tracking table for rate limiting
CREATE TABLE IF NOT EXISTS public.password_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id INTEGER NOT NULL,
  attempt_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  ip_address TEXT,
  session_id TEXT,
  success BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable RLS on password attempts
ALTER TABLE public.password_attempts ENABLE ROW LEVEL SECURITY;

-- Policy: Only allow inserts (for logging), no reads
CREATE POLICY "Allow logging password attempts"
ON public.password_attempts
FOR INSERT
WITH CHECK (true);

-- Create index for performance
CREATE INDEX idx_password_attempts_project_time 
ON public.password_attempts(project_id, attempt_time DESC);

-- Create rate limiting function
CREATE OR REPLACE FUNCTION public.check_rate_limit(p_project_id INTEGER, p_session_id TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  attempt_count INTEGER;
  last_attempt_time TIMESTAMP WITH TIME ZONE;
BEGIN
  -- Count failed attempts in last 15 minutes
  SELECT COUNT(*), MAX(attempt_time)
  INTO attempt_count, last_attempt_time
  FROM public.password_attempts
  WHERE project_id = p_project_id
    AND session_id = p_session_id
    AND success = FALSE
    AND attempt_time > NOW() - INTERVAL '15 minutes';
  
  -- Allow if less than 5 failed attempts
  IF attempt_count < 5 THEN
    RETURN TRUE;
  END IF;
  
  -- Check if cooldown period has passed (exponential backoff)
  IF last_attempt_time IS NOT NULL THEN
    -- After 5 failures, require 15 minute cooldown
    IF NOW() < last_attempt_time + INTERVAL '15 minutes' THEN
      RETURN FALSE;
    END IF;
  END IF;
  
  RETURN TRUE;
END;
$$;

-- Log password attempt function
CREATE OR REPLACE FUNCTION public.log_password_attempt(
  p_project_id INTEGER,
  p_session_id TEXT,
  p_success BOOLEAN
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.password_attempts (project_id, session_id, success, attempt_time)
  VALUES (p_project_id, p_session_id, p_success, NOW());
END;
$$;

-- Update get_protected_project_content with rate limiting
CREATE OR REPLACE FUNCTION public.get_protected_project_content(
  p_project_id INTEGER,
  p_password TEXT,
  p_session_id TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'extensions'
AS $$
DECLARE
  v_session_id TEXT;
BEGIN
  -- Generate session ID if not provided
  v_session_id := COALESCE(p_session_id, gen_random_uuid()::TEXT);
  
  -- Check rate limit
  IF NOT check_rate_limit(p_project_id, v_session_id) THEN
    PERFORM log_password_attempt(p_project_id, v_session_id, FALSE);
    RAISE EXCEPTION 'Too many failed attempts. Please try again later.';
  END IF;
  
  -- Verify password
  IF NOT EXISTS (
    SELECT 1
    FROM public.project_passwords
    WHERE project_id = p_project_id
    AND password_hash = crypt(p_password, password_hash)
  ) THEN
    -- Log failed attempt
    PERFORM log_password_attempt(p_project_id, v_session_id, FALSE);
    RETURN NULL;
  END IF;
  
  -- Log successful attempt
  PERFORM log_password_attempt(p_project_id, v_session_id, TRUE);
  
  -- Return content
  RETURN (
    SELECT content
    FROM public.protected_projects
    WHERE project_id = p_project_id
  );
END;
$$;
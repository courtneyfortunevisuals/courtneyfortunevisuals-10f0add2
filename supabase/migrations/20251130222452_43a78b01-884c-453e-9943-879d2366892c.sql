-- Create table to store protected project content
CREATE TABLE public.protected_projects (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id integer NOT NULL UNIQUE,
  content jsonb NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.protected_projects ENABLE ROW LEVEL SECURITY;

-- Restrictive policy - no direct access
CREATE POLICY "No direct access to protected content" 
ON public.protected_projects 
FOR ALL 
USING (false);

-- Function to get protected project content after password verification
CREATE OR REPLACE FUNCTION public.get_protected_project_content(
  p_project_id integer,
  p_password text
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public', 'extensions'
AS $$
BEGIN
  -- First verify the password
  IF NOT EXISTS (
    SELECT 1
    FROM public.project_passwords
    WHERE project_id = p_project_id
    AND password_hash = crypt(p_password, password_hash)
  ) THEN
    RETURN NULL;
  END IF;
  
  -- If password is correct, return the content
  RETURN (
    SELECT content
    FROM public.protected_projects
    WHERE project_id = p_project_id
  );
END;
$$;

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_protected_projects_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_protected_projects_updated_at
BEFORE UPDATE ON public.protected_projects
FOR EACH ROW
EXECUTE FUNCTION public.update_protected_projects_updated_at();
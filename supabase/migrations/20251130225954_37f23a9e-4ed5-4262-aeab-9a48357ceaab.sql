-- Fix RLS policies for password_attempts table
-- Block all SELECT access to password attempts
CREATE POLICY "Block all read access to password attempts"
ON public.password_attempts
FOR SELECT
USING (false);

-- Add explicit policies for protected_projects
CREATE POLICY "Block SELECT on protected content"
ON public.protected_projects
FOR SELECT
USING (false);

CREATE POLICY "Block UPDATE on protected content"
ON public.protected_projects
FOR UPDATE
USING (false);

CREATE POLICY "Block DELETE on protected content"
ON public.protected_projects
FOR DELETE
USING (false);

-- Add explicit policies for project_passwords
CREATE POLICY "Block SELECT on password hashes"
ON public.project_passwords
FOR SELECT
USING (false);

CREATE POLICY "Block UPDATE on password hashes"
ON public.project_passwords
FOR UPDATE
USING (false)
WITH CHECK (false);

CREATE POLICY "Block DELETE on password hashes"
ON public.project_passwords
FOR DELETE
USING (false);
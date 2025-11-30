-- Add explicit deny policy to document security intention and resolve linter warning
-- This prevents any direct access to password hashes while allowing the
-- verify_project_password SECURITY DEFINER function to bypass RLS for verification
CREATE POLICY "No direct access to password hashes" 
ON public.project_passwords
FOR ALL
USING (false)
WITH CHECK (false);
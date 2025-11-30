-- Remove overly permissive RLS policy that exposes password hashes
-- Password verification should only occur through the verify_project_password function
DROP POLICY IF EXISTS "Anyone can check if project has password" ON public.project_passwords;

-- The table remains protected with RLS enabled but no public SELECT access
-- Only the SECURITY DEFINER function verify_project_password can check passwords
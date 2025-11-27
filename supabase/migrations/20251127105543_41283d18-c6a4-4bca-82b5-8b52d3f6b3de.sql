-- Create table for project passwords
CREATE TABLE IF NOT EXISTS public.project_passwords (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id INTEGER NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.project_passwords ENABLE ROW LEVEL SECURITY;

-- Allow public read access to check if a project is password protected
CREATE POLICY "Anyone can check if project has password"
ON public.project_passwords
FOR SELECT
USING (true);

-- Insert passwords for projects 3-7 (using a simple hash for demo)
INSERT INTO public.project_passwords (project_id, password_hash) VALUES
  (3, crypt('project3', gen_salt('bf'))),
  (4, crypt('project4', gen_salt('bf'))),
  (5, crypt('project5', gen_salt('bf'))),
  (6, crypt('project6', gen_salt('bf'))),
  (7, crypt('project7', gen_salt('bf')))
ON CONFLICT (project_id) DO NOTHING;

-- Create function to verify project password
CREATE OR REPLACE FUNCTION public.verify_project_password(
  p_project_id INTEGER,
  p_password TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.project_passwords
    WHERE project_id = p_project_id
    AND password_hash = crypt(p_password, password_hash)
  );
END;
$$;
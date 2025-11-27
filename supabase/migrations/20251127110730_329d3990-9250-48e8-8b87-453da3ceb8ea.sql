-- Update verify_project_password function to include extensions schema
CREATE OR REPLACE FUNCTION public.verify_project_password(p_project_id integer, p_password text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'extensions'
AS $function$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.project_passwords
    WHERE project_id = p_project_id
    AND password_hash = crypt(p_password, password_hash)
  );
END;
$function$;

-- Re-hash existing passwords with proper bcrypt hashing
UPDATE public.project_passwords 
SET password_hash = extensions.crypt('portfolio', extensions.gen_salt('bf'))
WHERE project_id IN (3, 4, 5, 6, 7);
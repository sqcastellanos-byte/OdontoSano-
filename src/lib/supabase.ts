import { createClient } from "@supabase/supabase-js";

// Cliente público (navegador). Usa la "anon key" con seguridad por RLS.
// Si Supabase aún no está configurado, `supabase` es null y el sitio sigue
// funcionando con los datos de prueba.

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseConfigurado = Boolean(url && anonKey);

export const supabase = supabaseConfigurado
  ? createClient(url as string, anonKey as string)
  : null;

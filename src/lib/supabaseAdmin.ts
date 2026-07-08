import "server-only";
import { createClient } from "@supabase/supabase-js";

// Cliente de SERVIDOR con la llave secreta (service_role / sb_secret).
// Salta las reglas RLS: úsalo SOLO en código de servidor (server actions,
// route handlers). Nunca lo importes en un componente cliente.

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const secret = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdminConfigurado = Boolean(url && secret);

export function getSupabaseAdmin() {
  if (!url || !secret) {
    throw new Error("Supabase no está configurado (faltan variables de entorno).");
  }
  return createClient(url, secret, { auth: { persistSession: false } });
}

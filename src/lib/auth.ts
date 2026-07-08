import "server-only";
import { cookies } from "next/headers";
import { createHash } from "crypto";

// Autenticación simple del panel por contraseña (ADMIN_PASSWORD).
// La cookie guarda un token derivado de la contraseña, no la contraseña.

const COOKIE = "os_admin";

function token(): string {
  const pass = process.env.ADMIN_PASSWORD ?? "";
  return createHash("sha256").update(`odontosano:${pass}`).digest("hex");
}

export function passwordCorrecta(intento: string): boolean {
  const pass = process.env.ADMIN_PASSWORD ?? "";
  return pass.length > 0 && intento === pass;
}

export async function crearSesion() {
  const store = await cookies();
  store.set(COOKIE, token(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 horas
  });
}

export async function cerrarSesion() {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function estaAutenticado(): Promise<boolean> {
  const store = await cookies();
  const c = store.get(COOKIE)?.value;
  return Boolean(c && c === token());
}

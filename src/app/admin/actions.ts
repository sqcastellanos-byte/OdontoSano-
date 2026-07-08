"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import sharp from "sharp";
import {
  passwordCorrecta,
  crearSesion,
  cerrarSesion,
  estaAutenticado,
} from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { TRATAMIENTOS } from "@/data/site";

export type EstadoForm = { ok?: boolean; error?: string };

// ---- Sesión ----
export async function login(
  _prev: EstadoForm,
  formData: FormData
): Promise<EstadoForm> {
  const intento = String(formData.get("password") ?? "");
  if (!passwordCorrecta(intento)) {
    return { error: "Contraseña incorrecta." };
  }
  await crearSesion();
  redirect("/admin");
}

export async function logout() {
  await cerrarSesion();
  redirect("/admin");
}

// ---- Subir un caso clínico ----
async function comprimirYSubir(file: File, prefijo: string): Promise<string> {
  const sb = getSupabaseAdmin();
  const entrada = Buffer.from(await file.arrayBuffer());
  // Compresión automática: máx 1400px de ancho, JPEG calidad 78.
  const salida = await sharp(entrada)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .jpeg({ quality: 78 })
    .toBuffer();

  const nombre = `${prefijo}-${Date.now()}-${Math.round(salida.length)}.jpg`;
  const { error } = await sb.storage
    .from("casos-fotos")
    .upload(nombre, salida, { contentType: "image/jpeg", upsert: false });
  if (error) throw new Error(`No se pudo subir la imagen: ${error.message}`);

  return sb.storage.from("casos-fotos").getPublicUrl(nombre).data.publicUrl;
}

export async function crearCaso(
  _prev: EstadoForm,
  formData: FormData
): Promise<EstadoForm> {
  if (!(await estaAutenticado())) return { error: "Sesión expirada." };

  const consentimiento = formData.get("consentimiento") === "on";
  if (!consentimiento) {
    return {
      error:
        "Debes marcar la casilla de consentimiento del paciente verificado antes de publicar.",
    };
  }

  const tratamiento = String(formData.get("tratamiento") ?? "");
  const titulo = String(formData.get("titulo") ?? "").trim();
  const descripcion = String(formData.get("descripcion") ?? "").trim();
  const duracion = String(formData.get("duracion") ?? "").trim();
  const antes = formData.get("antes") as File | null;
  const despues = formData.get("despues") as File | null;

  if (!tratamiento || !titulo) {
    return { error: "Elige el tratamiento y escribe un título." };
  }
  if (!antes || antes.size === 0 || !despues || despues.size === 0) {
    return { error: "Sube la foto de antes y la de después." };
  }

  try {
    const [antesUrl, despuesUrl] = await Promise.all([
      comprimirYSubir(antes, "antes"),
      comprimirYSubir(despues, "despues"),
    ]);

    const sb = getSupabaseAdmin();
    const { error } = await sb.from("casos").insert({
      tratamiento,
      titulo,
      descripcion,
      duracion,
      antes_url: antesUrl,
      despues_url: despuesUrl,
      consentimiento_verificado: true,
      publicado: true,
    });
    if (error) throw new Error(error.message);
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Error al guardar el caso." };
  }

  revalidatePath("/casos");
  revalidatePath("/admin");
  return { ok: true };
}

export async function eliminarCaso(id: string) {
  if (!(await estaAutenticado())) return;
  const sb = getSupabaseAdmin();
  await sb.from("casos").delete().eq("id", id);
  revalidatePath("/casos");
  revalidatePath("/admin");
}

// ---- Tratamientos (editar contenido) ----

// Carga los 9 tratamientos del código a la base.
export async function seedTratamientos(
  _prev: EstadoForm,
  _formData: FormData
): Promise<EstadoForm> {
  if (!(await estaAutenticado())) return { error: "Sesión expirada." };
  const sb = getSupabaseAdmin();
  const filas = TRATAMIENTOS.map((t, i) => ({
    slug: t.slug,
    nombre: t.nombre,
    resumen: t.resumen,
    detalle: t.detalle,
    duracion: t.duracion,
    para_quien: t.paraQuien,
    orden: i,
    activo: true,
  }));
  const { error } = await sb
    .from("tratamientos")
    .upsert(filas, { onConflict: "slug" });
  if (error) return { error: error.message };
  revalidateAll();
  return { ok: true };
}

export async function guardarTratamiento(formData: FormData) {
  if (!(await estaAutenticado())) return;
  const sb = getSupabaseAdmin();
  const slug = String(formData.get("slug") ?? "");
  if (!slug) return;

  await sb
    .from("tratamientos")
    .update({
      nombre: String(formData.get("nombre") ?? "").trim(),
      resumen: String(formData.get("resumen") ?? "").trim(),
      detalle: String(formData.get("detalle") ?? "").trim(),
      duracion: String(formData.get("duracion") ?? "").trim(),
      para_quien: String(formData.get("para_quien") ?? "").trim(),
      orden: Number(formData.get("orden") ?? 0),
      activo: formData.get("activo") === "on",
      updated_at: new Date().toISOString(),
    })
    .eq("slug", slug);

  revalidateAll();
}

function revalidateAll() {
  revalidatePath("/");
  revalidatePath("/tratamientos");
  revalidatePath("/admin/tratamientos");
}

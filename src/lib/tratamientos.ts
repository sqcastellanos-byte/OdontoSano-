import { supabase } from "./supabase";
import { TRATAMIENTOS, type Tratamiento } from "@/data/site";

// Lee los tratamientos desde la base (editables desde el panel).
// Si la base no está configurada, la tabla no existe todavía, o está vacía,
// usa la lista estática del código como respaldo (el sitio nunca se rompe).
export async function getTratamientos(): Promise<Tratamiento[]> {
  if (!supabase) return TRATAMIENTOS;

  const { data, error } = await supabase
    .from("tratamientos")
    .select("*")
    .eq("activo", true)
    .order("orden", { ascending: true });

  if (error || !data || data.length === 0) return TRATAMIENTOS;

  return data.map((r) => ({
    slug: r.slug,
    nombre: r.nombre,
    resumen: r.resumen ?? "",
    detalle: r.detalle ?? "",
    duracion: r.duracion ?? "",
    paraQuien: r.para_quien ?? "",
  }));
}

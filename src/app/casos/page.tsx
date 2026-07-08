import type { Metadata } from "next";
import { CASOS_PRUEBA, type Caso } from "@/data/casos";
import { supabase } from "@/lib/supabase";
import { PageHeader } from "@/components/site/PageHeader";
import { CasosGallery } from "@/components/casos/CasosGallery";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Casos clínicos antes y después",
  description:
    "Resultados reales antes y después en ortodoncia, diseño de sonrisa, blanqueamiento y más. Publicados solo con consentimiento del paciente verificado.",
};

// Siempre datos frescos (se actualiza al publicar desde el panel).
export const dynamic = "force-dynamic";

async function getCasos(): Promise<Caso[]> {
  if (!supabase) return CASOS_PRUEBA.filter((c) => c.consentimientoVerificado);

  const { data, error } = await supabase
    .from("casos")
    .select("*")
    .eq("publicado", true)
    .eq("consentimiento_verificado", true)
    .order("created_at", { ascending: false });

  if (error || !data || data.length === 0) {
    // Sin conexión o sin casos aún: muestra los de prueba como demostración.
    return CASOS_PRUEBA.filter((c) => c.consentimientoVerificado);
  }

  return data.map((r) => ({
    id: r.id,
    tratamiento: r.tratamiento,
    titulo: r.titulo,
    descripcion: r.descripcion ?? "",
    duracion: r.duracion ?? "",
    antesUrl: r.antes_url ?? undefined,
    despuesUrl: r.despues_url ?? undefined,
    consentimientoVerificado: r.consentimiento_verificado,
  }));
}

export default async function CasosPage() {
  const casos = await getCasos();

  return (
    <>
      <PageHeader
        kicker="Casos clínicos"
        titulo="Los resultados hablan. Arrastra y compara."
        descripcion="Explora casos reales antes y después. Cada uno muestra el tratamiento realizado y su duración, en lenguaje sencillo."
      />

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">
        <CasosGallery casos={casos} />

        <p className="mt-12 rounded-xl border border-linea bg-crema-hueso px-5 py-4 text-sm text-tinta-suave">
          🔒 Todos los casos se publican únicamente con el{" "}
          <b className="text-tinta">consentimiento del paciente verificado</b> y
          siempre sin nombres. Arrastra el control de cada imagen para comparar el
          antes y el después.
        </p>
      </div>

      <div className="pb-6">
        <CtaBand />
      </div>
    </>
  );
}

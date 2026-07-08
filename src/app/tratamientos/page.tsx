import type { Metadata } from "next";
import Link from "next/link";
import { getTratamientos } from "@/lib/tratamientos";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";
import { TreatmentIcon } from "@/components/site/TreatmentIcons";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Tratamientos",
  description:
    "Ortodoncia, diseño de sonrisa, carillas, blanqueamiento, implantes, rehabilitación oral, odontopediatría, endodoncia y periodoncia en Quito, Cayambe, Atuntaqui y Otavalo.",
};

export const dynamic = "force-dynamic";

function DuracionIcon() {
  return (
    <svg className="h-4 w-4 text-turquesa-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default async function TratamientosPage() {
  const TRATAMIENTOS = await getTratamientos();
  return (
    <>
      <PageHeader
        kicker="Tratamientos"
        titulo="Todo lo que tu sonrisa necesita, con un mismo estándar."
        descripcion="Cada tratamiento, explicado en lenguaje sencillo. Elige el que te interesa y agenda una valoración para conocer tu plan personalizado."
      />

      {/* Índice rápido */}
      <nav className="border-b border-linea bg-crema-hueso">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-4 sm:px-8">
          {TRATAMIENTOS.map((t) => (
            <Link
              key={t.slug}
              href={`#${t.slug}`}
              className="rounded-full border border-linea bg-white px-3.5 py-1.5 text-sm font-medium text-tinta/80 transition-colors hover:border-turquesa-100 hover:text-turquesa-700"
            >
              {t.nombre}
            </Link>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-16 lg:gap-24">
          {TRATAMIENTOS.map((t, i) => (
            <section
              key={t.slug}
              id={t.slug}
              className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              {/* Texto */}
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-turquesa-50 text-turquesa-700">
                    <TreatmentIcon slug={t.slug} className="h-8 w-8" />
                  </span>
                  <h2 className="font-display mt-5 text-3xl font-medium text-tinta sm:text-4xl">
                    {t.nombre}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-tinta-suave">
                    {t.detalle}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 border-t border-linea pt-5 text-sm">
                    <p className="flex items-center gap-2 text-tinta">
                      <DuracionIcon />
                      <span>
                        <b className="font-semibold">Duración aproximada:</b>{" "}
                        {t.duracion}
                      </span>
                    </p>
                    <p className="text-tinta-suave">{t.paraQuien}</p>
                  </div>
                  <Link
                    href="/contacto"
                    className="mt-7 inline-flex h-11 items-center rounded-full bg-turquesa px-6 text-sm font-semibold text-white shadow-[0_14px_26px_-12px_rgba(0,120,105,.7)] transition-transform hover:-translate-y-0.5"
                  >
                    Agendar valoración
                  </Link>
                </div>
              </Reveal>

              {/* Foto */}
              <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <PhotoPlaceholder
                  className="aspect-[4/3] w-full rounded-[var(--radius-marca)] border border-linea"
                  etiqueta={`Foto de ${t.nombre.toLowerCase()} (caso real o clínica)`}
                />
              </Reveal>
            </section>
          ))}
        </div>
      </div>

      <div className="pb-6">
        <CtaBand />
      </div>
    </>
  );
}

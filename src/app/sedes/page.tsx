import type { Metadata } from "next";
import Link from "next/link";
import { SEDES, CONTACTO_NACIONAL } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Sedes",
  description:
    "OdontoSano en Quito, Cayambe, Atuntaqui y Otavalo. Direcciones, mapas, teléfonos y WhatsApp de cada sede.",
};

function PinIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-turquesa-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export default function SedesPage() {
  return (
    <>
      <PageHeader
        kicker="Nuestras sedes"
        titulo="Cerca de ti, en toda la sierra norte."
        descripcion="Cuatro sedes con un mismo estándar de calidad. Elige la más cercana para ver su dirección, mapa y horario, o escríbenos directo por WhatsApp."
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {SEDES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius-marca)] border border-linea bg-white transition-colors duration-300 hover:border-turquesa-100">
                <PhotoPlaceholder
                  className="aspect-[16/9] w-full"
                  etiqueta={`Foto de la sede ${s.ciudad}`}
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <PinIcon />
                    <h2 className="font-display text-2xl font-semibold text-tinta">
                      {s.ciudad}
                    </h2>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-tinta-suave">
                    {s.direccion}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/sedes/${s.slug}`}
                      className="inline-flex h-10 items-center rounded-full bg-turquesa px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Ver sede
                    </Link>
                    <a
                      href={`https://wa.me/${s.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-turquesa-700 hover:underline"
                    >
                      {s.telefono}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-tinta-suave">
            {CONTACTO_NACIONAL.etiqueta}:{" "}
            <a
              href={`https://wa.me/${CONTACTO_NACIONAL.whatsapp}`}
              className="font-semibold text-turquesa-700 hover:underline"
            >
              {CONTACTO_NACIONAL.telefono}
            </a>
          </p>
        </Reveal>
      </div>
    </>
  );
}

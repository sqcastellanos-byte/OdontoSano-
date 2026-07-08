import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEDES, CONTACTO_NACIONAL } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export function generateStaticParams() {
  return SEDES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sede = SEDES.find((s) => s.slug === slug);
  if (!sede) return { title: "Sede no encontrada" };
  return {
    title: `Dentista en ${sede.ciudad}`,
    description: `OdontoSano en ${sede.ciudad}: ${sede.direccion}. Agenda tu valoración y escríbenos por WhatsApp.`,
  };
}

const WA_MSG = encodeURIComponent(
  "Hola, quiero agendar una valoración en OdontoSano."
);

export default async function SedePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sede = SEDES.find((s) => s.slug === slug);
  if (!sede) notFound();

  const otras = SEDES.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-linea">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-turquesa-50 opacity-60 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">
          <Reveal>
            <Link
              href="/sedes"
              className="text-sm font-medium text-turquesa-700 hover:underline"
            >
              ← Todas las sedes
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.14em] text-turquesa-700">
              Sede OdontoSano
            </span>
            <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-tinta sm:text-5xl">
              Dentista en {sede.ciudad}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-lg text-tinta-suave">
              {sede.direccion}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${sede.whatsapp}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-turquesa px-6 text-[15px] font-semibold text-white shadow-[0_16px_30px_-12px_rgba(0,120,105,.7)] transition-transform hover:-translate-y-0.5"
              >
                WhatsApp {sede.telefono}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sede.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-linea px-6 text-[15px] font-semibold text-tinta transition-colors hover:bg-turquesa-50"
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Columna izquierda: foto, mapa, horario */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <PhotoPlaceholder
                className="aspect-[16/10] w-full rounded-[var(--radius-marca)] border border-linea"
                etiqueta={`Foto de la sede ${sede.ciudad} (fachada o consultorio)`}
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="overflow-hidden rounded-[var(--radius-marca)] border border-linea">
                <iframe
                  title={`Mapa de OdontoSano ${sede.ciudad}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(sede.mapsQuery)}&output=embed`}
                  loading="lazy"
                  className="h-72 w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[var(--radius-marca)] border border-linea bg-white p-6">
                <h2 className="font-display text-xl font-semibold text-tinta">
                  Horario de atención
                </h2>
                <p className="mt-2 text-sm text-tinta-suave">
                  🕒 Espacio para el horario real de esta sede (ej. Lun–Vie 9:00–18:00,
                  Sáb 9:00–13:00).
                </p>
              </div>
            </Reveal>
          </div>

          {/* Columna derecha: formulario */}
          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-marca)] border border-linea bg-white p-6 shadow-tarjeta sm:p-7">
              <h2 className="font-display text-2xl font-semibold text-tinta">
                Agenda en {sede.ciudad}
              </h2>
              <p className="mb-4 mt-1 text-sm text-tinta-suave">
                Déjanos tus datos y te contactamos por esta sede.
              </p>
              <AppointmentForm />
            </div>
          </Reveal>
        </div>

        {/* Otras sedes */}
        <div className="mt-16 border-t border-linea pt-10">
          <h2 className="font-display text-2xl font-semibold text-tinta">
            Otras sedes
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otras.map((s) => (
              <Link
                key={s.slug}
                href={`/sedes/${s.slug}`}
                className="group rounded-2xl border border-linea bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-tarjeta"
              >
                <p className="font-semibold text-tinta group-hover:text-turquesa-700">
                  {s.ciudad}
                </p>
                <p className="mt-1 text-sm text-tinta-suave">{s.direccion}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-tinta-suave">
            {CONTACTO_NACIONAL.etiqueta}:{" "}
            <a
              href={`https://wa.me/${CONTACTO_NACIONAL.whatsapp}`}
              className="font-semibold text-turquesa-700 hover:underline"
            >
              {CONTACTO_NACIONAL.telefono}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

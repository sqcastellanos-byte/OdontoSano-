import Link from "next/link";
import { SEDES } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

function PinIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-turquesa-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Locations() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-tinta sm:text-4xl">
            Cerca de ti, en toda la sierra norte.
          </h2>
          <p className="mt-4 text-lg text-tinta-suave">
            Cuatro sedes, un mismo estándar de calidad. Elige la más cercana y
            escríbenos directo por WhatsApp.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SEDES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 0.06}>
            <div className="flex h-full flex-col rounded-[var(--radius-marca)] border border-linea bg-white p-6 transition-colors duration-300 hover:border-turquesa-100 hover:bg-turquesa-50/50">
              <div className="flex items-center gap-2">
                <PinIcon />
                <h3 className="font-display text-xl font-semibold text-tinta">
                  {s.ciudad}
                </h3>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-tinta-suave">
                {s.direccion}
              </p>
              <div className="mt-5 flex flex-col gap-2 text-sm">
                <a
                  href={`https://wa.me/${s.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-turquesa-700 hover:underline"
                >
                  {s.telefono}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tinta-suave hover:text-tinta"
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8">
          <Link
            href="/sedes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-turquesa-700"
          >
            Ver detalle de cada sede →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

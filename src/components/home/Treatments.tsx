import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TreatmentIcon } from "@/components/site/TreatmentIcons";
import { getTratamientos } from "@/lib/tratamientos";

export async function Treatments() {
  const TRATAMIENTOS = await getTratamientos();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-turquesa-700">
              Tratamientos
            </span>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-medium leading-tight text-tinta sm:text-4xl">
              Todo lo que tu sonrisa necesita, en un solo lugar.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/tratamientos"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-turquesa-700"
          >
            Ver todos los tratamientos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TRATAMIENTOS.map((t, i) => (
          <Reveal as="li" key={t.slug} delay={(i % 3) * 0.06}>
            <Link
              href={`/tratamientos#${t.slug}`}
              className="group flex h-full flex-col gap-4 rounded-[var(--radius-marca)] border border-linea bg-white p-6 shadow-suave transition-all duration-300 hover:-translate-y-1 hover:border-turquesa-100 hover:shadow-tarjeta"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-turquesa-50 text-turquesa-700 transition-colors group-hover:bg-turquesa-100">
                <TreatmentIcon slug={t.slug} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-tinta">{t.nombre}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-tinta-suave">
                  {t.resumen}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-turquesa-700 opacity-0 transition-opacity group-hover:opacity-100">
                Conocer más →
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

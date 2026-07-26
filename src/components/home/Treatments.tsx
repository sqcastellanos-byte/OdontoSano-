import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TreatmentIcon } from "@/components/site/TreatmentIcons";
import { getTratamientos } from "@/lib/tratamientos";

export async function Treatments() {
  const TRATAMIENTOS = await getTratamientos();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-xl text-3xl font-semibold leading-tight text-tinta sm:text-4xl">
            Todo lo que tu sonrisa necesita, con un mismo estándar.
          </h2>
          <Link
            href="/tratamientos"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-turquesa-700"
          >
            Ver todos los tratamientos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Reveal>

      {/* Retícula editorial: separadores de línea fina, sin tarjetas ni sombras */}
      <Reveal delay={0.05}>
        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-marca)] border border-linea bg-linea md:grid-cols-3">
          {TRATAMIENTOS.map((t) => (
            <li key={t.slug} className="bg-crema">
              <Link
                href={`/tratamientos#${t.slug}`}
                className="group flex h-full items-start gap-4 p-6 transition-colors hover:bg-white"
              >
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-turquesa-50 text-turquesa-700">
                  <TreatmentIcon slug={t.slug} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-tinta transition-colors group-hover:text-turquesa-700">
                    {t.nombre}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-tinta-suave">
                    {t.resumen}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

import Link from "next/link";
import { STATS } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decoración de fondo muy sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-turquesa-50 blur-3xl opacity-60"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Columna editorial */}
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] text-tinta sm:text-4xl">
              Tu valoración, en{" "}
              <span className="text-turquesa-700">manos expertas</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-tinta-suave">
              Atención en Quito, Cayambe, Atuntaqui y Otavalo. Un diagnóstico claro
              y un plan pensado para ti.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7">
              <Link
                href="/casos"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-tinta transition-colors hover:text-turquesa-700"
              >
                Ver casos reales
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 flex gap-8 border-t border-linea pt-6">
              {STATS.map((s) => (
                <div key={s.etiqueta}>
                  <dt className="sr-only">{s.etiqueta}</dt>
                  <dd>
                    <span className="font-display block text-2xl font-semibold text-tinta">
                      {s.valor}
                    </span>
                    <span className="text-xs leading-tight text-tinta-suave">
                      {s.etiqueta}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Columna de reserva: foto + formulario */}
        <Reveal delay={0.15} className="relative" id="agendar">
          <div className="relative overflow-hidden rounded-[var(--radius-marca)] border border-linea bg-white shadow-suave">
            <PhotoPlaceholder
              className="aspect-[16/10] w-full"
              etiqueta="Foto real: paciente sonriendo con luz natural"
            />
            <div className="p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold text-tinta">
                Agenda en 30 segundos
              </h2>
              <p className="mb-4 mt-1 text-sm text-tinta-suave">
                Cuéntanos y te contactamos por tu sede más cercana.
              </p>
              <AppointmentForm compact />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

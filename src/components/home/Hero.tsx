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
            <span className="inline-flex items-center gap-2 rounded-full border border-linea bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-turquesa-700">
              <span className="h-1.5 w-1.5 rounded-full bg-turquesa" />
              Red dental · Sierra norte del Ecuador
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.06] text-tinta sm:text-5xl lg:text-[3.4rem]">
              Tu mejor sonrisa, en{" "}
              <span className="text-turquesa-700">manos expertas</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
              Valoración personalizada en Quito, Cayambe, Atuntaqui y Otavalo.
              Un diagnóstico claro y un plan pensado para ti.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#agendar"
                className="inline-flex h-12 items-center rounded-full bg-turquesa px-7 text-[15px] font-semibold text-white shadow-[0_16px_30px_-12px_rgba(0,120,105,.7)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Agendar valoración
              </Link>
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

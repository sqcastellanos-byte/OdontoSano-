/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

// Hero tipo banner estilo Sonría: texto a la izquierda, foto a la derecha
// enmarcada por arcos turquesa (la firma visual), y accesos a servicios.

function ChipIcon({ name }: { name: string }) {
  const c = "h-6 w-6";
  if (name === "prevencion")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3.5c-1.6.5-2.6 1.9-2.7 3.9-.1 2.4.5 4.8 1.4 7 .4 1 .8 2.6 1.7 2.6.9 0 .9-1.6 1.2-2.7.3-1 .6-2 1-2s.7 1 1 2c.3 1.1.3 2.7 1.2 2.7.9 0 1.3-1.6 1.7-2.6.9-2.2 1.5-4.6 1.4-7-.1-2-1.1-3.4-2.7-3.9-1.1-.3-1.8.4-2.6.4s-1.5-.7-2.6-.4Z" />
        <path d="M15.5 3.4l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5Z" />
      </svg>
    );
  if (name === "ortodoncia")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="4" y="9.5" width="4" height="7.5" rx="1.4" />
        <rect x="10" y="9.5" width="4" height="7.5" rx="1.4" />
        <rect x="16" y="9.5" width="4" height="7.5" rx="1.4" />
        <path d="M3 12.6h18M6 11.6v2M12 11.6v2M18 11.6v2" />
      </svg>
    );
  if (name === "especialidades")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  return (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7.4 4.2c-1.6.5-2.6 1.9-2.7 3.9-.1 2.4.5 4.8 1.4 7 .4 1 .8 2.7 1.7 2.7.9 0 .9-1.7 1.2-2.8.3-1 .6-2 1-2s.7 1 1 2c.3 1.1.3 2.8 1.2 2.8.9 0 1.3-1.7 1.7-2.7.9-2.2 1.5-4.6 1.4-7-.1-2-1.1-3.4-2.7-3.9-1.1-.3-1.8.4-2.6.4s-1.5-.7-2.6-.4Z" />
      <circle cx="9.6" cy="10.4" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="10.4" r="0.5" fill="currentColor" stroke="none" />
      <path d="M9.8 12.6c.7.9 3.7.9 4.4 0" />
    </svg>
  );
}

const CHIPS = [
  { name: "prevencion", label: "Prevención" },
  { name: "ortodoncia", label: "Ortodoncia" },
  { name: "especialidades", label: "Especialidades" },
  { name: "odontopediatria", label: "Odontopediatría" },
];

export function BannerHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Veladura turquesa muy tenue de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-turquesa-50 opacity-60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        {/* Texto */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-turquesa-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-turquesa-700">
              <span className="h-1.5 w-1.5 rounded-full bg-turquesa" />
              Sierra norte del Ecuador
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.04] text-tinta sm:text-5xl lg:text-6xl">
              Sonrisas sanas,
              <br />
              <span className="text-azul">vidas más felices</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-tinta-suave">
              Odontología integral para toda tu familia, con especialistas y
              tecnología en Quito, Cayambe, Atuntaqui y Otavalo.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="#agendar"
                className="inline-flex h-12 items-center rounded-full bg-turquesa px-7 text-[15px] font-semibold text-white shadow-[0_14px_28px_-14px_rgba(0,120,105,.65)] transition-transform hover:-translate-y-0.5"
              >
                Agendar valoración
              </Link>
              <Link
                href="/casos"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-tinta transition-colors hover:text-turquesa-700"
              >
                Ver casos reales
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-4 border-t border-linea pt-6">
              {CHIPS.map((chip) => (
                <li key={chip.name}>
                  <Link
                    href="/tratamientos"
                    className="group flex items-center gap-2.5 text-sm font-semibold text-tinta transition-colors hover:text-turquesa-700"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-turquesa-50 text-turquesa-700 transition-colors group-hover:bg-turquesa-100">
                      <ChipIcon name={chip.name} />
                    </span>
                    {chip.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Foto enmarcada por arcos turquesa */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Arco turquesa detrás (firma Sonría) */}
            <svg
              aria-hidden
              className="pointer-events-none absolute -right-5 -top-6 -z-0 h-[112%] w-[112%]"
              viewBox="0 0 400 400"
              fill="none"
            >
              <circle cx="200" cy="200" r="185" stroke="var(--color-turquesa)" strokeWidth="26" />
              <circle cx="200" cy="200" r="150" stroke="var(--color-azul)" strokeWidth="16" opacity="0.85" />
            </svg>
            <div className="relative overflow-hidden rounded-[2rem] shadow-tarjeta">
              <img
                src="/hero.jpg"
                alt="Familia sonriendo en la clínica dental OdontoSano"
                className="aspect-[5/4] w-full object-cover object-[70%_center]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

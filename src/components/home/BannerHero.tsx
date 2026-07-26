import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

// Hero tipo banner (estilo Sonría): imagen principal a pantalla completa con
// los arcos turquesa integrados, y el slogan sobre un velo a la izquierda.

function ChipIcon({ name }: { name: string }) {
  const c = "h-5 w-5";
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
    <section className="relative min-h-[80svh] w-full overflow-hidden bg-tinta">
      {/* Imagen principal */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      {/* Velo oscuro a la izquierda para legibilidad del texto */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,22,34,.92) 0%, rgba(3,22,34,.84) 30%, rgba(3,22,34,.5) 50%, rgba(3,22,34,.12) 66%, rgba(3,22,34,0) 80%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[80svh] max-w-6xl items-center px-5 py-16 sm:px-8">
        <div className="max-w-xl text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-turquesa-50" />
              Sierra norte del Ecuador
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,.4)] sm:text-6xl lg:text-7xl">
              Cuidamos tu salud
              <br />
              <span className="text-turquesa-50">por ti</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90 drop-shadow-[0_1px_12px_rgba(0,0,0,.4)]">
              Odontología integral para toda tu familia, con especialistas y
              tecnología en Quito, Cayambe, Atuntaqui y Otavalo.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#agendar"
                className="inline-flex h-12 items-center rounded-full bg-turquesa px-7 text-[15px] font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Agendar valoración
              </Link>
              <Link
                href="/casos"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white/95 transition-colors hover:text-turquesa-50"
              >
                Ver casos reales
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/20 pt-6">
              {CHIPS.map((chip) => (
                <li key={chip.name}>
                  <Link
                    href="/tratamientos"
                    className="group flex items-center gap-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-turquesa-50 backdrop-blur-sm">
                      <ChipIcon name={chip.name} />
                    </span>
                    {chip.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

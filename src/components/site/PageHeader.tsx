import { Reveal } from "@/components/motion/Reveal";

// Encabezado editorial para páginas interiores.
export function PageHeader({
  kicker,
  titulo,
  descripcion,
}: {
  kicker: string;
  titulo: string;
  descripcion?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-linea">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-turquesa-50 opacity-60 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-turquesa-700">
            {kicker}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-tinta sm:text-5xl">
            {titulo}
          </h1>
        </Reveal>
        {descripcion && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-tinta-suave">
              {descripcion}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

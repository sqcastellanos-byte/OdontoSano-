import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ToothWatermark } from "@/components/motion/ToothWatermark";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius-marca)] bg-gradient-to-br from-turquesa via-turquesa-600 to-turquesa-700 px-7 py-14 text-center sm:px-12 sm:py-16">
          <ToothWatermark
            className="pointer-events-none absolute -right-6 -top-10 h-44 w-auto"
            white
            opacity={0.16}
          />
          <ToothWatermark
            className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-auto"
            white
            opacity={0.1}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              Tu nueva sonrisa empieza con una valoración.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/90">
              Tu primera valoración es sin costo. Recibe un plan claro para tu
              caso en cualquiera de nuestras cuatro sedes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#agendar"
                className="inline-flex h-12 items-center rounded-full bg-white px-7 text-[15px] font-semibold text-turquesa-700 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Agendar valoración
              </Link>
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

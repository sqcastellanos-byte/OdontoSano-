import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { getTratamientos } from "@/lib/tratamientos";
import { TreatmentsShowcase } from "./TreatmentsShowcase";

export async function Treatments() {
  const tratamientos = await getTratamientos();
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

      <TreatmentsShowcase tratamientos={tratamientos} />
    </section>
  );
}

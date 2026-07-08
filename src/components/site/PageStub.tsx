import Link from "next/link";
import { ToothWatermark } from "@/components/motion/ToothWatermark";

// Página temporal ("próximamente") para secciones que se construyen en etapas siguientes.
export function PageStub({
  kicker,
  titulo,
  descripcion,
  etapa,
}: {
  kicker: string;
  titulo: string;
  descripcion: string;
  etapa?: string;
}) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-32">
      <ToothWatermark className="h-20 w-auto" opacity={0.85} />
      <span className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-turquesa-700">
        {kicker}
      </span>
      <h1 className="font-display mt-4 text-4xl font-medium leading-tight text-tinta sm:text-5xl">
        {titulo}
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-tinta-suave">
        {descripcion}
      </p>
      {etapa && (
        <span className="mt-6 rounded-full border border-linea bg-white px-4 py-1.5 text-xs font-medium text-tinta-suave">
          {etapa}
        </span>
      )}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/#agendar"
          className="inline-flex h-12 items-center rounded-full bg-turquesa px-7 text-[15px] font-semibold text-white shadow-[0_16px_30px_-12px_rgba(0,120,105,.7)] transition-transform hover:-translate-y-0.5"
        >
          Agendar valoración
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full border border-linea px-7 text-[15px] font-semibold text-tinta transition-colors hover:bg-turquesa-50"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { EQUIPO } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Equipo y doctores",
  description:
    "Conoce al equipo de especialistas de OdontoSano en Quito, Cayambe, Atuntaqui y Otavalo.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHeader
        kicker="Nuestro equipo"
        titulo="Sonrisas en manos que puedes conocer."
        descripcion="Un equipo de especialistas que combina experiencia, tecnología y un trato cercano en cada una de nuestras sedes."
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        {/* Aviso interno para el equipo (reemplazar contenido) */}
        <Reveal>
          <p className="mb-8 rounded-xl border border-dashed border-turquesa-100 bg-turquesa-50 px-4 py-3 text-sm text-turquesa-700">
            Nota para el equipo: reemplaza cada tarjeta con la foto, el nombre y la
            especialidad reales de cada profesional.
          </p>
        </Reveal>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {EQUIPO.map((doc, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <figure className="group flex flex-col">
                <PhotoPlaceholder
                  className="aspect-[4/5] w-full rounded-[var(--radius-marca)] border border-linea"
                  etiqueta="Foto del profesional"
                />
                <figcaption className="mt-4">
                  <h2 className="font-display text-lg font-semibold leading-snug text-tinta">
                    {doc.nombre}
                  </h2>
                  <p className="mt-0.5 text-sm text-tinta-suave">
                    {doc.especialidad}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-turquesa-700">
                    <span className="h-1 w-1 rounded-full bg-turquesa" />
                    {doc.sede}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="pb-6">
        <CtaBand />
      </div>
    </>
  );
}

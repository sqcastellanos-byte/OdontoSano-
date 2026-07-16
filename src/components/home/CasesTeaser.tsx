import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { BeforeAfter } from "@/components/casos/BeforeAfter";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";

export function CasesTeaser() {
  return (
    <section className="border-y border-linea bg-crema-hueso">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-tinta sm:text-4xl">
              Los resultados hablan.{" "}
              <span className="text-turquesa-700">Arrastra y compara.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-tinta-suave">
              Cada sonrisa cuenta una historia. Explora nuestra galería de casos
              antes y después, con el tratamiento realizado y su duración,
              explicado en lenguaje sencillo.
            </p>
            <p className="mt-4 max-w-md text-sm text-tinta-suave">
              Publicamos únicamente casos con el consentimiento del paciente
              verificado, y siempre sin nombres.
            </p>
            <Link
              href="/casos"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-turquesa px-7 text-[15px] font-semibold text-white shadow-[0_16px_30px_-12px_rgba(0,120,105,.7)] transition-transform hover:-translate-y-0.5"
            >
              Ver galería de casos
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div>
            <BeforeAfter
              className="aspect-[4/3] w-full"
              antes={
                <PhotoPlaceholder
                  className="h-full w-full"
                  etiqueta="Foto ANTES del tratamiento"
                />
              }
              despues={
                <PhotoPlaceholder
                  className="h-full w-full"
                  etiqueta="Foto DESPUÉS del tratamiento"
                />
              }
            />
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-tinta-suave">
              <span>
                <b className="font-semibold text-tinta">Tratamiento:</b> Diseño de sonrisa
              </span>
              <span>
                <b className="font-semibold text-tinta">Duración:</b> 3 meses
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

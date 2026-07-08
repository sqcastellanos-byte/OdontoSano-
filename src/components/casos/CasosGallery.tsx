"use client";

import { useMemo, useState } from "react";
import type { Caso } from "@/data/casos";
import { TRATAMIENTOS } from "@/data/site";
import { BeforeAfter } from "./BeforeAfter";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";

const nombreTratamiento = (slug: string) =>
  TRATAMIENTOS.find((t) => t.slug === slug)?.nombre ?? slug;

export function CasosGallery({ casos }: { casos: Caso[] }) {
  const [filtro, setFiltro] = useState<string>("todos");

  // Solo tratamientos que tienen al menos un caso (y siempre "Todos")
  const filtros = useMemo(() => {
    const conCasos = new Set(casos.map((c) => c.tratamiento));
    return [
      { slug: "todos", nombre: "Todos" },
      ...TRATAMIENTOS.filter((t) => conCasos.has(t.slug)).map((t) => ({
        slug: t.slug,
        nombre: t.nombre,
      })),
    ];
  }, [casos]);

  const visibles = useMemo(
    () =>
      filtro === "todos"
        ? casos
        : casos.filter((c) => c.tratamiento === filtro),
    [casos, filtro]
  );

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {filtros.map((f) => {
          const activo = filtro === f.slug;
          return (
            <button
              key={f.slug}
              type="button"
              onClick={() => setFiltro(f.slug)}
              aria-pressed={activo}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activo
                  ? "border-turquesa bg-turquesa text-white"
                  : "border-linea bg-white text-tinta/80 hover:border-turquesa-100 hover:text-turquesa-700"
              }`}
            >
              {f.nombre}
            </button>
          );
        })}
      </div>

      {/* Grilla de casos */}
      {visibles.length === 0 ? (
        <p className="mt-10 text-tinta-suave">
          Aún no hay casos para este tratamiento. Muy pronto.
        </p>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {visibles.map((caso) => (
            <article
              key={caso.id}
              className="flex flex-col overflow-hidden rounded-[var(--radius-marca)] border border-linea bg-white shadow-suave"
            >
              <BeforeAfter
                className="aspect-[4/3] w-full rounded-b-none border-0"
                antes={
                  caso.antesUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={caso.antesUrl}
                      alt="Antes del tratamiento"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <PhotoPlaceholder className="h-full w-full" etiqueta="Foto ANTES" />
                  )
                }
                despues={
                  caso.despuesUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={caso.despuesUrl}
                      alt="Después del tratamiento"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <PhotoPlaceholder className="h-full w-full" etiqueta="Foto DESPUÉS" />
                  )
                }
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="self-start rounded-full bg-turquesa-50 px-3 py-1 text-xs font-semibold text-turquesa-700">
                  {nombreTratamiento(caso.tratamiento)}
                </span>
                <h2 className="font-display mt-3 text-xl font-semibold text-tinta">
                  {caso.titulo}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tinta-suave">
                  {caso.descripcion}
                </p>
                <p className="mt-4 border-t border-linea pt-4 text-sm text-tinta">
                  <b className="font-semibold">Duración:</b> {caso.duracion}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tratamiento } from "@/data/site";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";

// Vitrina de servicios estilo Sonría: lista vertical de segmentos de colores
// (tonalidades del logo: turquesa y azul) y, al lado, la imagen + descripción
// del tratamiento seleccionado.

const COLORS = [
  "#009786", // turquesa
  "#0052a1", // azul
  "#00a892", // turquesa vibrante
  "#1273c7", // azul medio
  "#007d6f", // turquesa oscuro
  "#00417f", // azul oscuro
];

export function TreatmentsShowcase({ tratamientos }: { tratamientos: Tratamiento[] }) {
  const [sel, setSel] = useState(0);
  const activo = tratamientos[sel];
  const color = COLORS[sel % COLORS.length];

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(260px,340px)_1fr] lg:gap-8">
      {/* Lista de segmentos */}
      <ul className="flex flex-col gap-2.5">
        {tratamientos.map((t, i) => {
          const on = i === sel;
          return (
            <li key={t.slug}>
              <button
                type="button"
                onClick={() => setSel(i)}
                aria-pressed={on}
                className={`flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 ${
                  on ? "scale-[1.015] shadow-lg" : "opacity-85 hover:opacity-100"
                }`}
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              >
                {t.nombre}
                <span
                  className={`transition-transform ${on ? "translate-x-0" : "-translate-x-1 opacity-0"}`}
                  aria-hidden
                >
                  ›
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Panel del tratamiento seleccionado */}
      <div className="overflow-hidden rounded-[var(--radius-marca)] border border-linea bg-white shadow-suave">
        <PhotoPlaceholder
          className="aspect-[16/8] w-full"
          etiqueta={`Foto de ${activo.nombre.toLowerCase()}`}
        />
        <div className="p-6 sm:p-8">
          <h3
            className="font-display text-2xl font-semibold sm:text-3xl"
            style={{ color }}
          >
            {activo.nombre}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-tinta-suave">
            {activo.detalle}
          </p>
          <p className="mt-4 text-sm text-tinta">
            <b className="font-semibold">Duración aproximada:</b> {activo.duracion}
          </p>
          <Link
            href={`/tratamientos#${activo.slug}`}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: color }}
          >
            Conoce más
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

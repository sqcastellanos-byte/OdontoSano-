"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { crearCaso, type EstadoForm } from "./actions";
import { TRATAMIENTOS } from "@/data/site";

const inicial: EstadoForm = {};

export function CasoForm() {
  const [estado, formAction, pending] = useActionState(crearCaso, inicial);
  const [consent, setConsent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Al guardar con éxito, limpiar el formulario.
  useEffect(() => {
    if (estado.ok) {
      formRef.current?.reset();
      setConsent(false);
    }
  }, [estado.ok]);

  const field =
    "h-11 w-full rounded-xl border border-linea bg-white px-4 text-[15px] text-tinta outline-none transition focus:border-turquesa focus:ring-2 focus:ring-turquesa-100";

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-4 rounded-[var(--radius-marca)] border border-linea bg-white p-6 shadow-suave"
    >
      <h2 className="font-display text-xl font-semibold text-tinta">
        Subir un caso clínico
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="antes" className="text-xs font-semibold text-tinta-suave">
            Foto ANTES
          </label>
          <input id="antes" name="antes" type="file" accept="image/*" required
            className="text-sm text-tinta file:mr-3 file:rounded-full file:border-0 file:bg-turquesa-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-turquesa-700" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="despues" className="text-xs font-semibold text-tinta-suave">
            Foto DESPUÉS
          </label>
          <input id="despues" name="despues" type="file" accept="image/*" required
            className="text-sm text-tinta file:mr-3 file:rounded-full file:border-0 file:bg-turquesa-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-turquesa-700" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="tratamiento" className="text-xs font-semibold text-tinta-suave">
            Tratamiento
          </label>
          <select id="tratamiento" name="tratamiento" required defaultValue="" className={field}>
            <option value="" disabled>Elige un tratamiento</option>
            {TRATAMIENTOS.map((t) => (
              <option key={t.slug} value={t.slug}>{t.nombre}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="duracion" className="text-xs font-semibold text-tinta-suave">
            Duración
          </label>
          <input id="duracion" name="duracion" type="text" placeholder="Ej. 14 meses" className={field} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="titulo" className="text-xs font-semibold text-tinta-suave">
          Título (sin nombre del paciente)
        </label>
        <input id="titulo" name="titulo" type="text" required placeholder="Ej. Sonrisa alineada con ortodoncia" className={field} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="descripcion" className="text-xs font-semibold text-tinta-suave">
          Descripción (en lenguaje sencillo)
        </label>
        <textarea id="descripcion" name="descripcion" rows={3}
          placeholder="Explica brevemente el caso, sin tecnicismos y sin nombres."
          className="w-full rounded-xl border border-linea bg-white px-4 py-3 text-[15px] text-tinta outline-none transition focus:border-turquesa focus:ring-2 focus:ring-turquesa-100" />
      </div>

      {/* Consentimiento OBLIGATORIO */}
      <label className="flex items-start gap-3 rounded-xl border border-turquesa-100 bg-turquesa-50 p-4">
        <input
          type="checkbox"
          name="consentimiento"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-5 w-5 accent-[color:var(--color-turquesa)]"
        />
        <span className="text-sm text-tinta">
          <b>Consentimiento del paciente verificado.</b> Confirmo que el paciente
          firmó su consentimiento para publicar estas fotos, sin su nombre.
          <span className="block text-tinta-suave">
            Ningún caso puede publicarse sin esta confirmación.
          </span>
        </span>
      </label>

      {estado.error && (
        <p role="alert" className="text-sm text-red-600">{estado.error}</p>
      )}
      {estado.ok && (
        <p className="text-sm font-medium text-turquesa-700">
          ✓ Caso publicado correctamente.
        </p>
      )}

      <button
        type="submit"
        disabled={!consent || pending}
        className="inline-flex h-12 items-center justify-center rounded-full bg-turquesa px-6 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Publicando…" : "Publicar caso"}
      </button>
      {!consent && (
        <p className="text-center text-xs text-tinta-suave">
          Marca la casilla de consentimiento para habilitar el botón.
        </p>
      )}
    </form>
  );
}

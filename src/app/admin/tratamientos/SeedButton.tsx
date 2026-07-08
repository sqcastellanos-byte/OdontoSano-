"use client";

import { useActionState } from "react";
import { seedTratamientos, type EstadoForm } from "../actions";

const inicial: EstadoForm = {};

export function SeedButton() {
  const [estado, action, pending] = useActionState(seedTratamientos, inicial);
  return (
    <form action={action}>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-11 items-center rounded-full bg-turquesa px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending ? "Cargando…" : "Cargar los 9 tratamientos"}
      </button>
      {estado.error && (
        <p role="alert" className="mt-2 text-sm text-red-600">{estado.error}</p>
      )}
    </form>
  );
}

"use client";

import { useActionState } from "react";
import { login, type EstadoForm } from "./actions";

const inicial: EstadoForm = {};

export function LoginForm() {
  const [estado, formAction, pending] = useActionState(login, inicial);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-16">
      <div className="rounded-[var(--radius-marca)] border border-linea bg-white p-8 shadow-tarjeta">
        <h1 className="font-display text-2xl font-semibold text-tinta">
          Panel de administración
        </h1>
        <p className="mt-1 text-sm text-tinta-suave">
          Ingresa tu contraseña para continuar.
        </p>
        <form action={formAction} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-semibold text-tinta-suave">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="h-11 rounded-xl border border-linea bg-white px-4 text-[15px] text-tinta outline-none transition focus:border-turquesa focus:ring-2 focus:ring-turquesa-100"
            />
          </div>
          {estado.error && (
            <p role="alert" className="text-sm text-red-600">
              {estado.error}
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-12 items-center justify-center rounded-full bg-turquesa px-6 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {pending ? "Entrando…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

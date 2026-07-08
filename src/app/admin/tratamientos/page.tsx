import type { Metadata } from "next";
import Link from "next/link";
import { estaAutenticado } from "@/lib/auth";
import { getSupabaseAdmin, supabaseAdminConfigurado } from "@/lib/supabaseAdmin";
import { LoginForm } from "../LoginForm";
import { SeedButton } from "./SeedButton";
import { guardarTratamiento } from "../actions";

export const metadata: Metadata = {
  title: "Editar tratamientos",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const campo =
  "w-full rounded-xl border border-linea bg-white px-4 py-2.5 text-[15px] text-tinta outline-none transition focus:border-turquesa focus:ring-2 focus:ring-turquesa-100";

export default async function AdminTratamientosPage() {
  if (!supabaseAdminConfigurado) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center text-tinta-suave">
        El panel aún no está conectado a la base de datos.
      </div>
    );
  }
  if (!(await estaAutenticado())) return <LoginForm />;

  const sb = getSupabaseAdmin();
  const { data: tratamientos, error } = await sb
    .from("tratamientos")
    .select("*")
    .order("orden", { ascending: true });

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Link href="/admin" className="text-sm font-medium text-turquesa-700 hover:underline">
            ← Volver al panel
          </Link>
          <h1 className="font-display mt-2 text-3xl font-semibold text-tinta">
            Editar tratamientos
          </h1>
          <p className="text-sm text-tinta-suave">
            Los cambios se reflejan en el inicio y en la página de Tratamientos.
          </p>
        </div>
      </div>

      {error ? (
        <div className="mt-10 rounded-2xl border border-amber-300 bg-amber-50 p-6 text-sm text-amber-800">
          <b>Falta crear la tabla de tratamientos.</b>
          <p className="mt-2">
            Ve a Supabase → SQL Editor → New query, pega el contenido del archivo{" "}
            <code>supabase/tratamientos.sql</code>, dale <b>Run</b>, y recarga esta
            página.
          </p>
        </div>
      ) : !tratamientos || tratamientos.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-linea bg-white p-6">
          <p className="text-sm text-tinta-suave">
            La tabla está vacía. Carga los 9 tratamientos actuales del sitio para
            empezar a editarlos.
          </p>
          <div className="mt-4">
            <SeedButton />
          </div>
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-5">
          {tratamientos.map((t) => (
            <form
              key={t.slug}
              action={guardarTratamiento}
              className="rounded-[var(--radius-marca)] border border-linea bg-white p-6 shadow-suave"
            >
              <input type="hidden" name="slug" value={t.slug} />
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-turquesa-700">
                  {t.slug}
                </span>
                <label className="flex items-center gap-2 text-sm text-tinta">
                  <input
                    type="checkbox"
                    name="activo"
                    defaultChecked={t.activo}
                    className="h-4 w-4 accent-[color:var(--color-turquesa)]"
                  />
                  Visible en el sitio
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-tinta-suave">Nombre</span>
                  <input name="nombre" defaultValue={t.nombre ?? ""} className={campo} />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-tinta-suave">Duración</span>
                  <input name="duracion" defaultValue={t.duracion ?? ""} className={campo} />
                </label>
              </div>

              <label className="mt-4 flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-tinta-suave">
                  Resumen (frase corta, aparece en las tarjetas)
                </span>
                <input name="resumen" defaultValue={t.resumen ?? ""} className={campo} />
              </label>

              <label className="mt-4 flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-tinta-suave">
                  Detalle (párrafo de la página de Tratamientos)
                </span>
                <textarea name="detalle" rows={3} defaultValue={t.detalle ?? ""}
                  className={campo} />
              </label>

              <div className="mt-4 grid gap-4 sm:grid-cols-[2fr_1fr]">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-tinta-suave">“Ideal si…”</span>
                  <input name="para_quien" defaultValue={t.para_quien ?? ""} className={campo} />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-tinta-suave">Orden</span>
                  <input name="orden" type="number" defaultValue={t.orden ?? 0} className={campo} />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex h-11 items-center rounded-full bg-turquesa px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Guardar “{t.nombre}”
              </button>
            </form>
          ))}
        </div>
      )}
    </div>
  );
}

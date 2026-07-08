/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { estaAutenticado } from "@/lib/auth";
import { getSupabaseAdmin, supabaseAdminConfigurado } from "@/lib/supabaseAdmin";
import { TRATAMIENTOS } from "@/data/site";
import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { CasoForm } from "./CasoForm";
import { logout, eliminarCaso } from "./actions";

export const metadata: Metadata = {
  title: "Administración",
  robots: { index: false, follow: false },
};

// Siempre datos frescos en el panel.
export const dynamic = "force-dynamic";

const nombreTrat = (slug: string) =>
  TRATAMIENTOS.find((t) => t.slug === slug)?.nombre ?? slug;

const fecha = (iso: string) =>
  new Date(iso).toLocaleString("es-EC", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export default async function AdminPage() {
  if (!supabaseAdminConfigurado) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center">
        <p className="text-tinta-suave">
          El panel aún no está conectado a la base de datos.
        </p>
      </div>
    );
  }

  if (!(await estaAutenticado())) {
    return <LoginForm />;
  }

  const sb = getSupabaseAdmin();
  const [{ data: casos }, { data: citas }] = await Promise.all([
    sb.from("casos").select("*").order("created_at", { ascending: false }),
    sb.from("citas").select("*").order("created_at", { ascending: false }),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold text-tinta">
            Administración
          </h1>
          <p className="text-sm text-tinta-suave">OdontoSano</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/admin/tratamientos"
            className="rounded-full border border-linea px-5 py-2.5 text-sm font-semibold text-turquesa-700 transition-colors hover:bg-turquesa-50"
          >
            Editar tratamientos
          </Link>
          <form action={logout}>
            <button className="rounded-full border border-linea px-5 py-2.5 text-sm font-semibold text-tinta transition-colors hover:bg-turquesa-50">
              Salir
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
        {/* Subir caso */}
        <section>
          <CasoForm />
        </section>

        {/* Citas agendadas */}
        <section>
          <div className="rounded-[var(--radius-marca)] border border-linea bg-white p-6 shadow-suave">
            <h2 className="font-display text-xl font-semibold text-tinta">
              Citas agendadas{" "}
              <span className="text-base font-normal text-tinta-suave">
                ({citas?.length ?? 0})
              </span>
            </h2>
            {!citas || citas.length === 0 ? (
              <p className="mt-4 text-sm text-tinta-suave">
                Aún no hay citas. Las que se envíen desde el formulario del sitio
                aparecerán aquí.
              </p>
            ) : (
              <div className="mt-4 max-h-[520px] overflow-y-auto">
                <ul className="flex flex-col gap-3">
                  {citas.map((c) => (
                    <li key={c.id} className="rounded-xl border border-linea p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-tinta">{c.nombre}</span>
                        <span className="text-xs text-tinta-suave">{fecha(c.created_at)}</span>
                      </div>
                      <p className="mt-1 text-sm text-tinta-suave">
                        📍 {c.sede} · 📞 {c.telefono}
                        {c.tratamiento ? ` · ${nombreTrat(c.tratamiento)}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Casos publicados */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-tinta">
          Casos publicados{" "}
          <span className="text-base font-normal text-tinta-suave">
            ({casos?.length ?? 0})
          </span>
        </h2>
        {!casos || casos.length === 0 ? (
          <p className="mt-4 text-sm text-tinta-suave">
            Todavía no hay casos publicados.
          </p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {casos.map((caso) => (
              <div key={caso.id} className="overflow-hidden rounded-2xl border border-linea bg-white">
                <div className="grid grid-cols-2">
                  {caso.antes_url ? (
                    <img src={caso.antes_url} alt="Antes" className="aspect-square w-full object-cover" />
                  ) : (
                    <div className="aspect-square bg-turquesa-50" />
                  )}
                  {caso.despues_url ? (
                    <img src={caso.despues_url} alt="Después" className="aspect-square w-full object-cover" />
                  ) : (
                    <div className="aspect-square bg-turquesa-100" />
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-turquesa-700">
                    {nombreTrat(caso.tratamiento)}
                  </span>
                  <p className="text-sm font-semibold text-tinta">{caso.titulo}</p>
                  <form action={eliminarCaso.bind(null, caso.id)} className="mt-3">
                    <button className="text-xs font-semibold text-red-600 hover:underline">
                      Eliminar
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

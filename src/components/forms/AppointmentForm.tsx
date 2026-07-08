"use client";

import { useState } from "react";
import { SEDES, TRATAMIENTOS, CONTACTO_NACIONAL } from "@/data/site";
import { supabase } from "@/lib/supabase";

// Formulario de valoración.
// Guarda la cita en Supabase (si está configurado) y abre WhatsApp con la sede.
export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [nombre, setNombre] = useState("");
  const [sede, setSede] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre.trim() || !sede || !telefono.trim()) {
      setError("Completa tu nombre, sede y teléfono para continuar.");
      return;
    }
    setError("");

    const sedeSel = SEDES.find((s) => s.slug === sede);
    const destino = sedeSel?.whatsapp ?? CONTACTO_NACIONAL.whatsapp;
    const trat =
      TRATAMIENTOS.find((t) => t.slug === tratamiento)?.nombre ??
      "Valoración general";

    // Guardar la cita en la base de datos (en segundo plano, no bloquea WhatsApp).
    if (supabase) {
      supabase
        .from("citas")
        .insert({
          nombre: nombre.trim(),
          sede: sedeSel?.ciudad ?? "-",
          telefono: telefono.trim(),
          tratamiento: tratamiento || null,
        })
        .then(({ error }) => {
          if (error) console.error("No se pudo guardar la cita:", error.message);
        });
    }

    const texto = encodeURIComponent(
      `Hola OdontoSano, quiero agendar una valoración.\n` +
        `• Nombre: ${nombre}\n` +
        `• Sede: ${sedeSel?.ciudad ?? "-"}\n` +
        `• Teléfono: ${telefono}\n` +
        `• Tratamiento de interés: ${trat}`
    );

    window.open(`https://wa.me/${destino}?text=${texto}`, "_blank");
  }

  const field =
    "w-full rounded-xl border border-linea bg-white px-4 text-[15px] text-tinta shadow-sm outline-none transition focus:border-turquesa focus:ring-2 focus:ring-turquesa-100";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`flex flex-col gap-3.5 ${compact ? "" : ""}`}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nombre" className="text-xs font-semibold text-tinta-suave">
          Nombre completo
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className={`${field} h-11`}
          autoComplete="name"
        />
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sede" className="text-xs font-semibold text-tinta-suave">
            Sede
          </label>
          <select
            id="sede"
            value={sede}
            onChange={(e) => setSede(e.target.value)}
            className={`${field} h-11`}
          >
            <option value="">Elige tu ciudad</option>
            {SEDES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.ciudad}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="telefono" className="text-xs font-semibold text-tinta-suave">
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="09 9999 9999"
            className={`${field} h-11`}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="tratamiento" className="text-xs font-semibold text-tinta-suave">
          Tratamiento de interés
        </label>
        <select
          id="tratamiento"
          value={tratamiento}
          onChange={(e) => setTratamiento(e.target.value)}
          className={`${field} h-11`}
        >
          <option value="">¿Qué te gustaría mejorar?</option>
          {TRATAMIENTOS.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.nombre}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-azul px-6 text-[15px] font-semibold text-white shadow-[0_16px_30px_-14px_rgba(0,82,161,.6)] transition-transform hover:-translate-y-0.5 hover:bg-azul-600 active:translate-y-0"
      >
        Quiero mi valoración
      </button>
      <p className="text-center text-xs text-tinta-suave">
        Sin costo · Te contactamos por tu sede más cercana
      </p>
    </form>
  );
}

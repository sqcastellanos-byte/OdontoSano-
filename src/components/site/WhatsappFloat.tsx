"use client";

import { useState } from "react";
import { SEDES, CONTACTO_NACIONAL } from "@/data/site";

const MENSAJE = encodeURIComponent(
  "Hola, quiero agendar una valoración en OdontoSano."
);

function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.8s-3.9-3.5-4-3.7c-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.2 1.3 1.1 2 1.2 2.3 1 .2-.1.4-.5.6-.8.2-.3.4-.2.6-.1l1.9 1c.2.1.4.2.4.3.1.2.1.6 0 .8Z" />
    </svg>
  );
}

export function WhatsappFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl border border-linea bg-white shadow-tarjeta">
          <div className="bg-turquesa px-4 py-3 text-white">
            <p className="text-sm font-semibold">Chatea por WhatsApp</p>
            <p className="text-xs text-white/85">Elige tu sede más cercana</p>
          </div>
          <ul className="max-h-72 overflow-y-auto p-1.5">
            {SEDES.map((s) => (
              <li key={s.slug}>
                <a
                  href={`https://wa.me/${s.whatsapp}?text=${MENSAJE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm text-tinta hover:bg-turquesa-50"
                >
                  <span className="font-medium">{s.ciudad}</span>
                  <WaIcon className="h-4 w-4 text-turquesa-600" />
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-linea pt-1">
              <a
                href={`https://wa.me/${CONTACTO_NACIONAL.whatsapp}?text=${MENSAJE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm text-tinta hover:bg-turquesa-50"
              >
                <span className="font-medium">Atención nacional</span>
                <WaIcon className="h-4 w-4 text-turquesa-600" />
              </a>
            </li>
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Abrir chat de WhatsApp"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_32px_-10px_rgba(37,211,102,.6)] transition-transform hover:scale-105 active:scale-95"
      >
        <WaIcon className="h-7 w-7" />
      </button>
    </div>
  );
}

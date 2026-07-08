import type { Metadata } from "next";
import { SEDES, CONTACTO_NACIONAL } from "@/data/site";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contacto y citas",
  description:
    "Agenda tu valoración en OdontoSano. Escríbenos por WhatsApp a tu sede más cercana en Quito, Cayambe, Atuntaqui u Otavalo.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-turquesa-700">
            Contacto y citas
          </span>
          <h1 className="font-display mt-3 text-4xl font-medium leading-tight text-tinta sm:text-5xl">
            Agenda tu valoración.
          </h1>
          <p className="mt-5 text-lg text-tinta-suave">
            Déjanos tus datos y te contactamos por tu sede más cercana. Tu
            primera valoración es sin costo.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div className="rounded-[var(--radius-marca)] border border-linea bg-white p-6 shadow-tarjeta sm:p-8">
            <AppointmentForm />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-tinta">
              Escríbenos directo por WhatsApp
            </h2>
            {SEDES.map((s) => (
              <div
                key={s.slug}
                className="rounded-2xl border border-linea bg-white p-5"
              >
                <p className="font-semibold text-tinta">{s.ciudad}</p>
                <p className="mt-1 text-sm text-tinta-suave">{s.direccion}</p>
                <a
                  href={`https://wa.me/${s.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-sm font-semibold text-turquesa-700 hover:underline"
                >
                  {s.telefono}
                </a>
              </div>
            ))}
            <p className="mt-2 text-sm text-tinta-suave">
              {CONTACTO_NACIONAL.etiqueta}:{" "}
              <a
                href={`https://wa.me/${CONTACTO_NACIONAL.whatsapp}`}
                className="font-semibold text-turquesa-700 hover:underline"
              >
                {CONTACTO_NACIONAL.telefono}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

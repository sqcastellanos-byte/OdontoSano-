"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Hero de scroll-expansión: una fotografía enmarcada que crece hasta llenar la
// pantalla a medida que haces scroll, con el mensaje sobre ella.
// La imagen se toma de /hero.jpg; si aún no existe, se muestra un fondo de marca.
// Respeta "menos movimiento": si está activo, se ve estática y a pantalla completa.

export function ScrollExpandHero({
  imagen = "/hero.jpg",
  titulo = "Sonrisas sanas,",
  acento = "vidas más felices",
  subtitulo = "Odontología integral para toda tu familia",
}: {
  imagen?: string;
  titulo?: string;
  acento?: string;
  subtitulo?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.55], [0.6, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.55], [30, 0]);
  const overlay = useTransform(scrollYProgress, [0, 0.55], [0.3, 0.52]);

  const mediaStyle: React.CSSProperties = {
    backgroundColor: "var(--color-turquesa-700)",
    backgroundImage: `linear-gradient(160deg, rgba(0,120,105,.35), rgba(0,65,127,.35)), url('${imagen}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Versión sin movimiento: foto a pantalla completa, contenido visible.
  if (reduce) {
    return (
      <section className="relative h-[92svh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0" style={mediaStyle} />
        <div className="absolute inset-0 bg-black/40" />
        <HeroCopy titulo={titulo} acento={acento} subtitulo={subtitulo} />
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden bg-crema-hueso">
        {/* Foto que se expande */}
        <motion.div
          className="relative h-[100svh] w-screen overflow-hidden shadow-tarjeta"
          style={{ scale, borderRadius: radius }}
        >
          <div className="absolute inset-0" style={mediaStyle} />
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlay }}
          />
        </motion.div>

        {/* Mensaje sobre la foto */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto px-6 text-center text-white">
            <h1 className="font-display text-3xl font-semibold leading-[1.06] drop-shadow-[0_2px_18px_rgba(0,0,0,.4)] sm:text-5xl lg:text-6xl">
              {titulo}
              <br />
              <span className="text-turquesa-50">{acento}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,.35)] sm:text-lg">
              {subtitulo}
            </p>
            <Link
              href="#agendar"
              className="mt-7 inline-flex h-12 items-center rounded-full bg-white px-7 text-[15px] font-semibold text-turquesa-700 shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Agendar valoración
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCopy({
  titulo,
  acento,
  subtitulo,
}: {
  titulo: string;
  acento: string;
  subtitulo: string;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5 text-center text-white">
      <div>
        <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-6xl">
          {titulo}
          <br />
          <span className="text-turquesa-50">{acento}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/90 sm:text-lg">
          {subtitulo}
        </p>
        <Link
          href="#agendar"
          className="mt-7 inline-flex h-12 items-center rounded-full bg-white px-7 text-[15px] font-semibold text-turquesa-700 shadow-lg"
        >
          Agendar valoración
        </Link>
      </div>
    </div>
  );
}

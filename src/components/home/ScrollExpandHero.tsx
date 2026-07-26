"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Hero de scroll-expansión: la fotografía llena la pantalla al abrir y se
// expande hasta el borde a medida que haces scroll. El mensaje va a la
// izquierda, sobre el área despejada de la foto. Respeta "menos movimiento".

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

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  const mediaStyle: React.CSSProperties = {
    backgroundColor: "var(--color-turquesa-700)",
    backgroundImage: `url('${imagen}')`,
    backgroundSize: "cover",
    backgroundPosition: "center right",
  };

  // Velo oscuro a la izquierda para que el texto blanco sea legible,
  // dejando la parte derecha (las caras) natural y luminosa.
  const scrim =
    "linear-gradient(90deg, rgba(6,18,16,.74) 0%, rgba(6,18,16,.5) 32%, rgba(6,18,16,.12) 58%, rgba(6,18,16,0) 78%)";

  const Copy = (
    <div className="mx-auto flex h-full w-full max-w-6xl items-center px-6 sm:px-10">
      <div className="max-w-xl text-left text-white">
        <h1 className="font-display text-4xl font-semibold leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,.4)] sm:text-6xl lg:text-7xl">
          {titulo}
          <br />
          <span className="text-turquesa-50">{acento}</span>
        </h1>
        <p className="mt-5 max-w-md text-base text-white/90 drop-shadow-[0_1px_12px_rgba(0,0,0,.4)] sm:text-lg">
          {subtitulo}
        </p>
        <Link
          href="#agendar"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-7 text-[15px] font-semibold text-turquesa-700 shadow-lg transition-transform hover:-translate-y-0.5"
        >
          Agendar valoración
        </Link>
      </div>
    </div>
  );

  // Versión sin movimiento: foto a pantalla completa, contenido visible.
  if (reduce) {
    return (
      <section className="relative h-[92svh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0" style={mediaStyle} />
        <div className="absolute inset-0" style={{ background: scrim }} />
        <div className="absolute inset-0">{Copy}</div>
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
          <div className="absolute inset-0" style={{ background: scrim }} />
        </motion.div>

        {/* Mensaje sobre la foto */}
        <div className="pointer-events-none absolute inset-0">
          <div className="pointer-events-auto h-full">{Copy}</div>
        </div>
      </div>
    </section>
  );
}

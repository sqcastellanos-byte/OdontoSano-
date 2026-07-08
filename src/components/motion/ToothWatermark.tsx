"use client";

/* eslint-disable @next/next/no-img-element */
import { motion, useReducedMotion } from "framer-motion";

// Marca de agua decorativa con el símbolo oficial.
// Aparece con un fundido y leve acercamiento al entrar en pantalla.
// `white` la vuelve blanca (para fondos turquesa).
export function ToothWatermark({
  className = "",
  white = false,
  opacity = 0.5,
}: {
  className?: string;
  white?: boolean;
  opacity?: number;
}) {
  const reduce = useReducedMotion();
  const style: React.CSSProperties = {
    opacity,
    filter: white ? "brightness(0) invert(1)" : undefined,
  };

  if (reduce) {
    return (
      <img
        src="/logo-mark.svg"
        alt=""
        aria-hidden
        className={className}
        style={style}
      />
    );
  }

  return (
    <motion.img
      src="/logo-mark.svg"
      alt=""
      aria-hidden
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      whileInView={{ opacity, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

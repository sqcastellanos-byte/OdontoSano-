"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Aparición suave (fade + desplazamiento) cuando el bloque entra en pantalla.
// Si el usuario prefiere menos movimiento, se muestra directo, sin animar.
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
  as = "div",
  id,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
  id?: string;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

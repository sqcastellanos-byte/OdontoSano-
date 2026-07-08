"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";

// Deslizador antes/después: arrastra (o usa flechas del teclado) para comparar.
export function BeforeAfter({
  antes,
  despues,
  className = "",
}: {
  antes: ReactNode;
  despues: ReactNode;
  className?: string;
}) {
  const [pos, setPos] = useState(50); // porcentaje visible del "antes"
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={ref}
      className={`relative select-none overflow-hidden rounded-[var(--radius-marca)] border border-linea ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Capa "después" (fondo completo) */}
      <div className="absolute inset-0">{despues}</div>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-xs font-semibold text-turquesa-700 backdrop-blur">
        Después
      </span>

      {/* Capa "antes" (recortada por la posición) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {antes}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-xs font-semibold text-tinta backdrop-blur">
          Antes
        </span>
      </div>

      {/* Manija */}
      <div
        className="absolute inset-y-0 z-10 flex items-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,.06)]" />
        <button
          type="button"
          role="slider"
          aria-label="Comparar antes y después"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-linea bg-white text-turquesa-700 shadow-tarjeta"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 6 3 12l6 6" />
            <path d="m15 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

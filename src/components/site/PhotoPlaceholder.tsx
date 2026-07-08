// Espacio marcado para fotografía real.
// El equipo lo reemplaza luego con fotos de clínica, doctores o casos.

export function PhotoPlaceholder({
  className = "",
  etiqueta = "Foto real aquí",
  rounded = "",
}: {
  className?: string;
  etiqueta?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-turquesa-50 ${rounded} ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 70% 15%, rgba(0,151,134,.16), transparent 60%)",
      }}
    >
      {/* Trama de líneas diagonales muy tenue */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #007d6f 0 1px, transparent 1px 12px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <svg
          className="h-9 w-9 text-turquesa-700/70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          aria-hidden
        >
          <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
          <circle cx="8.5" cy="10" r="2" />
          <path d="M4 18l5-5 4 3 3-3 4 4" />
        </svg>
        <span className="max-w-[16rem] text-xs font-medium text-turquesa-700/80">
          📷 {etiqueta}
        </span>
      </div>
    </div>
  );
}

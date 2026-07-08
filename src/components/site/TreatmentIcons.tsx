// Íconos de línea, uno distinto por cada subespecialidad.
// Trazo turquesa (currentColor), coherente con el logo de una sola línea.

type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Diente base reutilizable (para variantes que parten de un diente)
const TOOTH =
  "M7.4 4.2c-1.6.5-2.6 1.9-2.7 3.9-.1 2.4.5 4.8 1.4 7 .4 1 .8 2.7 1.7 2.7.9 0 .9-1.7 1.2-2.8.3-1 .6-2 1-2s.7 1 1 2c.3 1.1.3 2.8 1.2 2.8.9 0 1.3-1.7 1.7-2.7.9-2.2 1.5-4.6 1.4-7-.1-2-1.1-3.4-2.7-3.9-1.1-.3-1.8.4-2.6.4s-1.5-.7-2.6-.4Z";

export function Ortodoncia({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      {/* dientes */}
      <rect x="4" y="9.5" width="4" height="7.5" rx="1.4" />
      <rect x="10" y="9.5" width="4" height="7.5" rx="1.4" />
      <rect x="16" y="9.5" width="4" height="7.5" rx="1.4" />
      {/* alambre y brackets */}
      <path d="M3 12.6h18" />
      <path d="M6 11.6v2M12 11.6v2M18 11.6v2" />
    </svg>
  );
}

export function DisenoSonrisa({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      {/* sonrisa */}
      <path d="M4.5 11.5c1.9 3.4 4.5 5.1 7.5 5.1s5.6-1.7 7.5-5.1" />
      <path d="M7.5 12.7v2.1M11 13.4v2.4M15 12.7v2.1" />
      {/* destello */}
      <path d="M18.5 3.2l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8Z" />
    </svg>
  );
}

export function Carillas({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d={TOOTH} />
      {/* lámina / brillo frontal */}
      <path d="M10 6.6c-.7 2.2-.7 5 .1 7.7" />
      <path d="M15.3 4.9l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5Z" />
    </svg>
  );
}

export function Blanqueamiento({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d={TOOTH} />
      {/* destellos de brillo */}
      <path d="M17.5 5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5Z" />
      <path d="M18.7 10.4l.3.9.9.3-.9.3-.3.9-.3-.9-.9-.3.9-.3Z" />
    </svg>
  );
}

export function Implantes({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      {/* corona */}
      <path d="M8.6 4.4c.9-1.1 2.4-1.1 3.3 0 .9 1.1.6 2.8-.3 4h-2.7c-.9-1.2-1.2-2.9-.3-4Z" />
      {/* poste con roscas */}
      <path d="M12 9v10.5" />
      <path d="M9.6 10.6h4.8M9.8 12.7h4.4M10.2 14.8h3.6M10.8 16.9h2.4" />
    </svg>
  );
}

export function RehabilitacionOral({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      {/* arcada / prótesis: cúpula en U con dientes */}
      <path d="M5 5.5v5.5c0 3.9 3.1 7 7 7s7-3.1 7-7V5.5" />
      <path d="M5 9.5h14" />
      <path d="M9 9.5v7.6M12 9.7v8.3M15 9.5v7.6" />
    </svg>
  );
}

export function Odontopediatria({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d={TOOTH} />
      {/* carita feliz */}
      <circle cx="9.6" cy="10.4" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="10.4" r="0.5" fill="currentColor" stroke="none" />
      <path d="M9.8 12.6c.7.9 3.7.9 4.4 0" />
    </svg>
  );
}

export function Endodoncia({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      {/* corona ancha con dos raíces largas */}
      <path d="M5.5 5.2c1.4-1 4-1.4 6.5-1.4s5.1.4 6.5 1.4c.8.6.4 1.8-.4 2.2-1 .5-2 .8-2.6 2.4-.5 1.4-.9 6-1.2 8.2-.1 1.1-1.7 1.1-1.9 0L11 12" />
      {/* conducto */}
      <path d="M10 8.4c-.5 1.6-.8 4.4-1.1 8.2-.1 1.1-1.6 1.1-1.8 0-.3-2-.7-5.4-1-6.8" strokeDasharray="0.1 2.4" />
    </svg>
  );
}

export function Periodoncia({ className = "" }: P) {
  return (
    <svg {...base} className={className} aria-hidden>
      {/* diente pequeño */}
      <path d="M8.2 5c-1.1.4-1.8 1.4-1.9 2.9-.1 1.7.4 3.4 1 5 .3.7.6 1.9 1.2 1.9s.6-1.2.9-2c.2-.7.4-1.4.7-1.4s.5.7.7 1.4c.3.8.3 2 .9 2s.9-1.2 1.2-1.9c.6-1.6 1.1-3.3 1-5-.1-1.5-.8-2.5-1.9-2.9-.8-.2-1.3.3-1.9.3s-1.1-.5-1.9-.3Z" />
      {/* encía ondulada */}
      <path d="M3 17.5c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0" />
    </svg>
  );
}

const MAP: Record<string, (p: P) => React.ReactElement> = {
  ortodoncia: Ortodoncia,
  "diseno-de-sonrisa": DisenoSonrisa,
  carillas: Carillas,
  blanqueamiento: Blanqueamiento,
  implantes: Implantes,
  "rehabilitacion-oral": RehabilitacionOral,
  odontopediatria: Odontopediatria,
  endodoncia: Endodoncia,
  periodoncia: Periodoncia,
};

export function TreatmentIcon({ slug, className = "" }: { slug: string; className?: string }) {
  const Cmp = MAP[slug] ?? Carillas;
  return <Cmp className={className} />;
}

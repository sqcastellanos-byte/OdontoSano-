// Casos clínicos antes/después.
// Estos 3 son de PRUEBA (con fotos marcadas). En la Etapa 4b se cargarán desde
// Supabase mediante el panel de administración, con consentimiento verificado.

export type Caso = {
  id: string;
  tratamiento: string; // slug de TRATAMIENTOS
  titulo: string; // sin nombres de paciente
  descripcion: string; // lenguaje de paciente
  duracion: string;
  antesUrl?: string; // vacío = usar espacio marcado
  despuesUrl?: string;
  consentimientoVerificado: boolean; // obligatorio true para publicar
};

export const CASOS_PRUEBA: Caso[] = [
  {
    id: "demo-1",
    tratamiento: "ortodoncia",
    titulo: "Sonrisa alineada con ortodoncia",
    descripcion:
      "El paciente tenía los dientes apiñados y una mordida despareja. Con ortodoncia logramos una sonrisa alineada y una mordida cómoda.",
    duracion: "14 meses",
    consentimientoVerificado: true,
  },
  {
    id: "demo-2",
    tratamiento: "diseno-de-sonrisa",
    titulo: "Sonrisa renovada con diseño de sonrisa",
    descripcion:
      "Combinamos carillas y blanqueamiento para armonizar la forma y el color de los dientes frontales, respetando un aspecto natural.",
    duracion: "3 meses",
    consentimientoVerificado: true,
  },
  {
    id: "demo-3",
    tratamiento: "blanqueamiento",
    titulo: "Dientes más blancos y naturales",
    descripcion:
      "Tras un blanqueamiento profesional supervisado, el paciente recuperó un tono más claro y luminoso, sin dañar el esmalte.",
    duracion: "2 sesiones",
    consentimientoVerificado: true,
  },
];

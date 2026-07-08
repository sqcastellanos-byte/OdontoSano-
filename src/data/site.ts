// Datos centrales del sitio OdontoSano.
// Editar aquí las sedes, teléfonos y tratamientos: todo el sitio se actualiza solo.

export const CONTACTO_NACIONAL = {
  etiqueta: "Atención al cliente nacional",
  telefono: "+593 99 814 8077",
  whatsapp: "593998148077",
};

export type Sede = {
  slug: string;
  ciudad: string;
  titulo: string;
  direccion: string;
  telefono: string;
  whatsapp: string; // solo dígitos, formato internacional para wa.me
  mapsQuery: string;
};

export const SEDES: Sede[] = [
  {
    slug: "quito",
    ciudad: "Quito",
    titulo: "OdontoSano Quito",
    direccion: "Hospital Axxis, Torre Mezzanine, Consultorio C22",
    telefono: "+593 98 043 8902",
    whatsapp: "593980438902",
    mapsQuery: "Hospital Axxis Quito",
  },
  {
    slug: "cayambe",
    ciudad: "Cayambe",
    titulo: "OdontoSano Cayambe",
    direccion: "Panamericana Norte, C.C. Nápoles, Local 3",
    telefono: "+593 97 881 5476",
    whatsapp: "593978815476",
    mapsQuery: "C.C. Nápoles Cayambe",
  },
  {
    slug: "atuntaqui",
    ciudad: "Atuntaqui",
    titulo: "OdontoSano Atuntaqui",
    direccion: "Av. General Enríquez y Juan de Velasco 15-54",
    telefono: "+593 96 360 7086",
    whatsapp: "593963607086",
    mapsQuery: "Av. General Enríquez y Juan de Velasco Atuntaqui",
  },
  {
    slug: "otavalo",
    ciudad: "Otavalo",
    titulo: "OdontoSano Otavalo",
    direccion: "Abdón Calderón 2-08",
    telefono: "+593 96 397 0740",
    whatsapp: "593963970740",
    mapsQuery: "Abdón Calderón 2-08 Otavalo",
  },
];

export type Tratamiento = {
  slug: string;
  nombre: string;
  resumen: string; // lenguaje de paciente, sin tecnicismos
  detalle: string; // párrafo más largo, también en lenguaje de paciente
  duracion: string; // duración aproximada del tratamiento
  paraQuien: string; // "Ideal si..."
};

export const TRATAMIENTOS: Tratamiento[] = [
  {
    slug: "ortodoncia",
    nombre: "Ortodoncia",
    resumen: "Alinea tus dientes con brackets o alineadores casi invisibles.",
    detalle:
      "Corregimos la posición de tus dientes y tu mordida para lograr una sonrisa alineada y más fácil de cuidar. Elegimos juntos la opción que mejor se adapta a tu estilo de vida: brackets estéticos o alineadores transparentes.",
    duracion: "6 a 24 meses, según el caso",
    paraQuien: "Ideal si tienes dientes torcidos, apiñados o separados.",
  },
  {
    slug: "diseno-de-sonrisa",
    nombre: "Diseño de sonrisa",
    resumen: "Diseñamos tu sonrisa ideal y la hacemos realidad, diente por diente.",
    detalle:
      "Planificamos tu nueva sonrisa pensando en tu rostro y tus rasgos, y te mostramos una vista previa antes de empezar. Combinamos distintos tratamientos para lograr un resultado natural y armónico.",
    duracion: "2 semanas a 3 meses",
    paraQuien: "Ideal si quieres una transformación estética integral.",
  },
  {
    slug: "carillas",
    nombre: "Carillas",
    resumen: "Láminas finas que corrigen forma, color y pequeños espacios.",
    detalle:
      "Colocamos láminas muy delgadas sobre la cara visible de tus dientes para mejorar su forma, color y proporción. Una solución estética discreta y duradera para lograr una sonrisa pareja.",
    duracion: "2 a 4 semanas",
    paraQuien: "Ideal si buscas mejorar la estética de los dientes frontales.",
  },
  {
    slug: "blanqueamiento",
    nombre: "Blanqueamiento",
    resumen: "Recupera un tono más blanco y natural, sin dañar el esmalte.",
    detalle:
      "Aclaramos el color de tus dientes con productos seguros y supervisión profesional, cuidando siempre tu esmalte. Puede hacerse en consultorio o con férulas para casa, según tu preferencia.",
    duracion: "1 a 3 sesiones",
    paraQuien: "Ideal si tus dientes se ven amarillentos o apagados.",
  },
  {
    slug: "implantes",
    nombre: "Implantes",
    resumen: "Reemplaza piezas perdidas con dientes fijos que se ven y sienten reales.",
    detalle:
      "Reponemos los dientes que faltan con una base firme que funciona como una raíz, sobre la que se coloca un diente fijo. Recuperas la capacidad de comer y sonreír con total confianza.",
    duracion: "3 a 6 meses (incluye cicatrización)",
    paraQuien: "Ideal si perdiste una o varias piezas dentales.",
  },
  {
    slug: "rehabilitacion-oral",
    nombre: "Rehabilitación oral",
    resumen: "Devolvemos función y estética cuando hay varios dientes afectados.",
    detalle:
      "Cuando hay varios dientes dañados o ausentes, diseñamos un plan integral para devolver la función, la comodidad y la estética de toda tu boca, paso a paso y a tu ritmo.",
    duracion: "Según el plan, de semanas a meses",
    paraQuien: "Ideal si necesitas recuperar buena parte de tu dentadura.",
  },
  {
    slug: "odontopediatria",
    nombre: "Odontopediatría",
    resumen: "Cuidado dental amable y sin miedo para los más pequeños.",
    detalle:
      "Acompañamos la salud dental de niñas y niños en un ambiente cercano y amable, creando una relación positiva con el odontólogo desde temprano. Prevención, controles y tratamientos pensados para ellos.",
    duracion: "Controles periódicos",
    paraQuien: "Ideal para el cuidado dental de los más pequeños de casa.",
  },
  {
    slug: "endodoncia",
    nombre: "Endodoncia",
    resumen: "Salvamos el diente y eliminamos el dolor con tratamiento de conducto.",
    detalle:
      "Cuando el interior de un diente está afectado, lo tratamos para eliminar el dolor y conservar la pieza en lugar de extraerla. Un procedimiento preciso para que tu diente siga contigo muchos años.",
    duracion: "1 a 2 sesiones",
    paraQuien: "Ideal si tienes dolor o una infección en un diente.",
  },
  {
    slug: "periodoncia",
    nombre: "Periodoncia",
    resumen: "Tratamos encías sanas: la base firme de toda sonrisa duradera.",
    detalle:
      "Cuidamos y tratamos tus encías y los tejidos que sostienen tus dientes. Unas encías sanas son la base de una sonrisa firme y de todo tratamiento estético que quieras hacerte después.",
    duracion: "1 a varias sesiones, según el caso",
    paraQuien: "Ideal si tus encías sangran, se inflaman o se retraen.",
  },
];

// Equipo / doctores. PLACEHOLDERS — reemplazar con el equipo real (nombres y fotos).
export type Doctor = {
  nombre: string; // marcado para reemplazar
  especialidad: string;
  sede: string;
};

export const EQUIPO: Doctor[] = [
  { nombre: "Dr(a). Nombre Apellido", especialidad: "Ortodoncia", sede: "Quito" },
  { nombre: "Dr(a). Nombre Apellido", especialidad: "Diseño de sonrisa y carillas", sede: "Quito" },
  { nombre: "Dr(a). Nombre Apellido", especialidad: "Implantes y rehabilitación oral", sede: "Cayambe" },
  { nombre: "Dr(a). Nombre Apellido", especialidad: "Endodoncia", sede: "Atuntaqui" },
  { nombre: "Dr(a). Nombre Apellido", especialidad: "Periodoncia", sede: "Otavalo" },
  { nombre: "Dr(a). Nombre Apellido", especialidad: "Odontopediatría", sede: "Otavalo" },
];

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/casos", label: "Casos clínicos" },
  { href: "/sedes", label: "Sedes" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
];

// Estadísticas de confianza (ajustables por el equipo)
export const STATS = [
  { valor: "4", etiqueta: "sedes en la sierra norte" },
  { valor: "+2.000", etiqueta: "sonrisas tratadas" },
  { valor: "9", etiqueta: "especialidades" },
];

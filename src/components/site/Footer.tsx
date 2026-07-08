import Link from "next/link";
import { NAV, SEDES, CONTACTO_NACIONAL } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = 2026;
  return (
    <footer className="mt-24 border-t border-linea bg-crema-hueso">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1.4fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-tinta-suave">
            La red dental de referencia de la sierra norte del Ecuador. Sonrisas
            sanas con un mismo estándar de calidad en cada sede.
          </p>
          <p className="mt-5 text-sm font-medium text-tinta">
            {CONTACTO_NACIONAL.etiqueta}
            <br />
            <a
              href={`https://wa.me/${CONTACTO_NACIONAL.whatsapp}`}
              className="text-turquesa-600 hover:underline"
            >
              {CONTACTO_NACIONAL.telefono}
            </a>
          </p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-tinta-suave">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-tinta/80 hover:text-turquesa-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-tinta-suave">
            Nuestras sedes
          </h3>
          <ul className="mt-4 space-y-3">
            {SEDES.map((s) => (
              <li key={s.slug} className="text-sm">
                <span className="font-semibold text-tinta">{s.ciudad}</span>
                <span className="block text-tinta-suave">{s.direccion}</span>
                <a
                  href={`https://wa.me/${s.whatsapp}`}
                  className="text-turquesa-600 hover:underline"
                >
                  {s.telefono}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-linea">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-tinta-suave sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} OdontoSano. Todos los derechos reservados.</p>
          <p>Sierra norte del Ecuador · Quito · Cayambe · Atuntaqui · Otavalo</p>
        </div>
      </div>
    </footer>
  );
}

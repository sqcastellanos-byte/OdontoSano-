"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al cambiar de página
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-crema/85 backdrop-blur-md border-b border-linea shadow-suave"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="Inicio OdontoSano">
          <Logo />
        </Link>

        {/* Navegación de escritorio (más grande, con flecha al hover) */}
        <nav className="hidden items-center gap-5 xl:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className="nav-underline group relative pl-5 text-base font-medium text-tinta/80 transition-colors hover:text-turquesa-700"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 text-turquesa-700 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contacto"
            className="hidden rounded-full bg-turquesa px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(0,120,105,.7)] transition-transform hover:-translate-y-0.5 hover:bg-turquesa-600 active:translate-y-0 sm:inline-flex"
          >
            Agendar valoración
          </Link>

          {/* Botón de menú móvil */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-linea bg-crema/70 text-tinta xl:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-tinta transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-tinta transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-tinta transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`overflow-hidden border-linea bg-crema/95 backdrop-blur-md xl:hidden ${
          open ? "max-h-96 border-b" : "max-h-0"
        } transition-all duration-300`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-tinta hover:bg-turquesa-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-2 rounded-full bg-turquesa px-5 py-3 text-center text-base font-semibold text-white"
          >
            Agendar valoración
          </Link>
        </nav>
      </div>
    </header>
  );
}

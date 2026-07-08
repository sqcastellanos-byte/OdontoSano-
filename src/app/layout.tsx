import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";

// Sans humanista para el cuerpo de texto
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Serif editorial de alto contraste para titulares
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://odontosano.ec"),
  title: {
    default: "OdontoSano — Red dental de la sierra norte del Ecuador",
    template: "%s · OdontoSano",
  },
  description:
    "Clínica dental con sedes en Quito, Cayambe, Atuntaqui y Otavalo. Agenda tu valoración: ortodoncia, diseño de sonrisa, implantes y más, con un mismo estándar de calidad.",
  keywords: [
    "dentista Quito",
    "dentista Cayambe",
    "dentista Otavalo",
    "dentista Atuntaqui",
    "ortodoncia sierra norte",
    "diseño de sonrisa Quito",
    "clínica dental Ecuador",
  ],
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: "OdontoSano",
    title: "OdontoSano — Red dental de la sierra norte del Ecuador",
    description:
      "Agenda tu valoración en Quito, Cayambe, Atuntaqui u Otavalo. Sonrisas sanas con un mismo estándar de calidad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-suave">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}

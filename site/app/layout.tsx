import type { Metadata } from "next";
import "./globals.css";
import HtmlLangSetter from "./components/HtmlLangSetter";
import { buildMetadata } from "./lib/metadata";
import { homeAlternates, siteUrl } from "./lib/seo-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "JetsMunt | Sistemas de Propulsión Turbojet Compactos",
    description:
      "Motores turbojet compactos diseñados y fabricados en España, ECU, telemetría y soporte de integración para UAV, target drones y plataformas aeroespaciales avanzadas.",
    keywords: [
      "motores turbojet compactos",
      "sistemas de propulsión UAV",
      "propulsión target drone",
      "ECU turbojet",
      "fabricante europeo de turbojets",
    ],
    locale: "es_ES",
    languages: homeAlternates(),
  }),
  applicationName: "JetsMunt",
  category: "Aerospace propulsion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <HtmlLangSetter />
        {children}
      </body>
    </html>
  );
}

 
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import HtmlLangSetter from "./components/HtmlLangSetter";
import CookieBanner from "./components/CookieBanner";
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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WZXV52DB');
        `}
      </Script>

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZXV52DB" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <HtmlLangSetter />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

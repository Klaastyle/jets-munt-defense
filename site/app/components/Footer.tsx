"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerGroups = [
  {
    title: "Catálogo",
    links: [
      ["Motores", "/motores"],
      ["Accesorios", "/accesorios"],
      ["Serie PRO", "/pro-series"],
      ["Turbojets compactos", "/motores-turbojet-compactos"],
    ],
  },
  {
    title: "Soporte",
    links: [
      ["Servicio tecnico", "/servicio-tecnico"],
      ["Distribuidores", "/distribuidores"],
      ["Descargas", "/support/downloads"],
      ["FAQ", "/support/faq"],
    ],
  },
  {
    title: "Ingeniería",
    links: [
      ["Propulsión UAV", "/propulsion-uav"],
      ["ECU y telemetría", "/electronica-telemetria"],
      ["Ensayo y validación", "/ensayos-validacion"],
      ["Fabricación en España", "/fabricacion-espana"],
    ],
  },
  {
    title: "Empresa",
    links: [
      ["Contacto", "/contacto"],
      ["Arquitectura", "/arquitectura-propulsion"],
      ["Desarrollo a medida", "/desarrollo-medida"],
      ["Mantenimiento", "/support/maintenance"],
    ],
  },
];

const socialLinks = [
  ["f", "https://www.facebook.com/jetsmuntturbines", "Facebook"],
  ["ig", "https://www.instagram.com/jetsmunt/", "Instagram"],
  ["yt", "https://www.youtube.com/channel/UCLc2k8XVTVEyeGOHhtSUokg", "YouTube"],
  ["wa", "https://wa.me/+34722819250", "WhatsApp"],
];

const footerByLocale = {
  es: {
    statement: "Sistemas turbojet compactos europeos.",
    sub: "Motores, accesorios, distribuidores y servicio técnico para programas de propulsion JetsMunt.",
    rights: "Todos los derechos reservados.",
    legal: [["Contacto", "/contacto"], ["Soporte", "/support"], ["Distribuidores", "/distribuidores"]],
    groups: footerGroups,
  },
  en: {
    statement: "European compact turbojet systems.",
    sub: "Engines, accessories, distributors and technical service for JetsMunt propulsion programs.",
    rights: "All rights reserved.",
    legal: [["Contact", "/en/contact"], ["Support", "/support"], ["Distributors", "/en/distributors"]],
    groups: [
      { title: "Catalogue", links: [["Engines", "/en/engines"], ["Accessories", "/en/accessories"], ["PRO series", "/pro-series"], ["Compact turbojets", "/en/compact-turbojet-engines"]] },
      { title: "Support", links: [["Technical service", "/en/technical-service"], ["Distributors", "/en/distributors"], ["Downloads", "/support/downloads"], ["FAQ", "/support/faq"]] },
      { title: "Engineering", links: [["UAV propulsion", "/en/uav-propulsion"], ["ECU telemetry", "/en/electronics-telemetry"], ["Testing validation", "/en/testing-validation"], ["Manufacturing Spain", "/en/manufacturing-in-spain"]] },
      { title: "Company", links: [["Contact", "/en/contact"], ["Architecture", "/en/propulsion-architecture"], ["Custom development", "/en/engineering-custom-development"], ["Maintenance", "/support/maintenance"]] },
    ],
  },
  fr: {
    statement: "Systemes turbojet compacts europeens.",
    sub: "Moteurs, accessoires, distributeurs et service technique pour programmes de propulsion JetsMunt.",
    rights: "Tous droits reserves.",
    legal: [["Contact", "/fr/contact"], ["Support", "/support"], ["Distributeurs", "/fr/distributeurs"]],
    groups: [
      { title: "Catalogue", links: [["Moteurs", "/fr/moteurs"], ["Accessoires", "/fr/accessoires"], ["Serie PRO", "/pro-series"], ["Turbojets compacts", "/fr/moteurs-turbojet-compacts"]] },
      { title: "Support", links: [["Service technique", "/fr/service-technique"], ["Distributeurs", "/fr/distributeurs"], ["Telechargements", "/support/downloads"], ["FAQ", "/support/faq"]] },
      { title: "Ingenierie", links: [["Propulsión UAV", "/fr/propulsion-uav"], ["ECU telemetrie", "/fr/electronique-telemetrie"], ["Tests validation", "/fr/essais-validation"], ["Fabrication Espagne", "/fr/fabrication-espagne"]] },
      { title: "Entreprise", links: [["Contact", "/fr/contact"], ["Architecture", "/fr/architecture-propulsion"], ["Developpement sur mesure", "/fr/developpement-sur-mesure"], ["Maintenance", "/support/maintenance"]] },
    ],
  },
};

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/fr") ? "fr" : "es";
  const footer = footerByLocale[locale];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-panel">
          <div className="footer-topline">
            <Link href="/" className="footer-brand nav-logo">
              Jets<span>Munt</span>
            </Link>
            <div className="footer-social" aria-label="JetsMunt social links">
              {socialLinks.map(([label, href, name]) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-main">
            <div className="footer-statement">
              <p>{footer.statement}</p>
              <span>{footer.sub}</span>
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              {footer.groups.map((group) => (
                <div className="footer-column" key={group.title}>
                  <h2>{group.title}</h2>
                  {group.links.map(([label, href]) => (
                    <Link key={href} href={href}>
                      {label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              &copy; {new Date().getFullYear()} JetsMunt. {footer.rights}
            </div>
            <div className="footer-legal">
              {footer.legal.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


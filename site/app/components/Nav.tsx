"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navByLocale = {
  es: {
    links: [
      { label: "Motores", href: "/motores" },
      { label: "Accesorios", href: "/accesorios" },
      { label: "Distribuidores", href: "/distribuidores" },
      { label: "Servicio tÃ©cnico", href: "/servicio-tecnico" },
    ],
    contact: "Contacto",
    languageLabel: "Seleccionar idioma",
  },
  en: {
    links: [
      { label: "Engines", href: "/en/engines" },
      { label: "Accessories", href: "/en/accessories" },
      { label: "Distributors", href: "/en/distributors" },
      { label: "Technical service", href: "/en/technical-service" },
    ],
    contact: "Contact",
    languageLabel: "Select language",
  },
  fr: {
    links: [
      { label: "Moteurs", href: "/fr/moteurs" },
      { label: "Accessoires", href: "/fr/accessoires" },
      { label: "Distributeurs", href: "/fr/distributeurs" },
      { label: "Service technique", href: "/fr/service-technique" },
    ],
    contact: "Contact",
    languageLabel: "Choisir la langue",
  },
};

const languageHome = {
  es: "/",
  en: "/en",
  fr: "/fr",
};

type Locale = keyof typeof navByLocale;

function getLocale(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  return "es";
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const nav = navByLocale[locale];

  return (
    <nav className="nav" id="main-nav">
      <div className="nav-inner">
        <Link href={languageHome[locale]} className="nav-logo">
          Jets<span>Munt</span>
        </Link>

        <div className="nav-menu" style={open ? mobileOpen : undefined}>
          <div className="nav-links">
            {nav.links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <select
              className="language-select"
              value={locale}
              aria-label={nav.languageLabel}
              onChange={(event) => {
                window.location.href = languageHome[event.target.value as Locale];
              }}
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
            <Link href={locale === "en" ? "/en/contact" : locale === "fr" ? "/fr/contact" : "/contacto"} className="nav-cta" onClick={() => setOpen(false)}>
              {nav.contact}
            </Link>
          </div>
        </div>

        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menÃº de navegaciÃ³n"
          id="nav-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

const mobileOpen: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  inset: 0,
  top: "var(--nav-height)",
  background: "rgba(10,10,15,0.97)",
  backdropFilter: "blur(20px)",
  padding: "2rem",
  gap: "1.5rem",
  zIndex: 99,
};


 
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const navByLocale = {
  es: {
    links: [
      { label: "Sobre Jets-Munt", href: "/sobre-jetsmunt" },
      {
        label: "Motores",
        href: "/motores",
        children: [
          { label: "Ver todos", href: "/motores" },
          { label: "XM215 PRO", href: "/motores/xm215-pro" },
          { label: "XM255 PRO", href: "/motores/xm255-pro" },
          { label: "Otros motores", href: "/motores/otros" },
        ],
      },
      {
        label: "Servicios",
        href: "/servicios",
        children: [
          { label: "Ver todos", href: "/servicios" },
          { label: "Electrónica y Telemetría", href: "/servicios/electronica-telemetria" },
          { label: "Integración en UAV", href: "/servicios/integracion-uav" },
          { label: "Ingeniería y Desarrollo", href: "/servicios/ingenieria-desarrollo" },
        ],
      },
      { label: "Servicio técnico", href: "/servicio-tecnico" },
    ],
    contact: "Contacto",
    languageLabel: "Seleccionar idioma",
  },
  en: {
    links: [
      { label: "About JetsMunt", href: "/en/about-jetsmunt" },
      {
        label: "Engines",
        href: "/en/engines",
        children: [
          { label: "All engines", href: "/en/engines" },
          { label: "XM215 PRO", href: "/en/engines/xm215-pro" },
          { label: "XM255 PRO", href: "/en/engines/xm255-pro" },
          { label: "Other engines", href: "/motores/otros" },
        ],
      },
      {
        label: "Services",
        href: "/en/services",
        children: [
          { label: "All services", href: "/en/services" },
          { label: "Electronics & Telemetry", href: "/en/services/electronics-telemetry" },
          { label: "UAV Integration", href: "/en/services/uav-integration" },
          { label: "Engineering & Development", href: "/en/services/engineering-development" },
        ],
      },
      { label: "Technical service", href: "/en/technical-service" },
    ],
    contact: "Contact",
    languageLabel: "Select language",
  },
  fr: {
    links: [
      { label: "À propos", href: "/fr/a-propos-jetsmunt" },
      {
        label: "Moteurs",
        href: "/fr/moteurs",
        children: [
          { label: "Tous les moteurs", href: "/fr/moteurs" },
          { label: "XM215 PRO", href: "/fr/moteurs/xm215-pro" },
          { label: "XM255 PRO", href: "/fr/moteurs/xm255-pro" },
          { label: "Autres moteurs", href: "/motores/otros" },
        ],
      },
      {
        label: "Services",
        href: "/fr/services",
        children: [
          { label: "Tous les services", href: "/fr/services" },
          { label: "Électronique et Télémétrie", href: "/fr/services/electronique-telemetrie" },
          { label: "Intégration UAV", href: "/fr/services/integration-uav" },
          { label: "Ingénierie et Développement", href: "/fr/services/ingenierie-developpement" },
        ],
      },
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const nav = navByLocale[locale];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="nav" id="main-nav">
      <div className="nav-inner">
        <Link href={languageHome[locale]} className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
          <Logo />
        </Link>

        <div className={`nav-menu ${open ? "open" : ""}`}>
          <div className="nav-links">
            {nav.links.map((l) => {
              if (l.children) {
                return (
                  <div key={l.label} className={`nav-item-dropdown ${mobileDropdownOpen ? "open" : ""}`}>
                    <button
                      className="nav-dropdown-toggle"
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    >
                      {l.label}
                    </button>
                    <div className={`nav-dropdown-menu ${mobileDropdownOpen ? "open" : ""}`}>
                      {l.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              );
            })}
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
          className={`nav-burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú de navegación"
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


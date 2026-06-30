import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import Nav from "./Nav";
import Footer from "./Footer";
import { Spotlight } from "./Spotlight";

export function SeoPageShell({
  kicker,
  title,
  description,
  image,
  video,
  showSpotlight = false,
  children,
  compact = false,
  secondaryHref,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  breadcrumbPath,
  locale = "es",
}: {
  kicker: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  showSpotlight?: boolean;
  children: React.ReactNode;
  compact?: boolean;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  breadcrumbPath?: string;
  locale?: "es" | "en" | "fr";
}) {
  const defaultPrimaryHref = { es: "/contacto", en: "/en/contact", fr: "/fr/contact" }[locale];
  const defaultSecondaryHref = { es: "/motores", en: "/en/engines", fr: "/fr/moteurs" }[locale];
  const defaultPrimaryLabel = { es: "Iniciar consulta técnica", en: "Start technical enquiry", fr: "Lancer la consultation technique" }[locale];
  const defaultSecondaryLabel = { es: "Ver motores", en: "View engines", fr: "Voir les moteurs" }[locale];

  const actualPrimaryHref = primaryHref || defaultPrimaryHref;
  const actualSecondaryHref = secondaryHref || defaultSecondaryHref;
  const actualPrimaryLabel = primaryLabel || defaultPrimaryLabel;
  const actualSecondaryLabel = secondaryLabel || defaultSecondaryLabel;
  return (
    <>
      <Nav />
      <main className="seo-page" style={{ position: "relative", overflow: "hidden" }}>
        {breadcrumbPath ? <Breadcrumbs pathname={breadcrumbPath} /> : null}
        <section className={compact ? "seo-hero seo-hero-compact" : "seo-hero"} style={{ position: "relative", overflow: "hidden" }}>
          {showSpotlight && (
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          )}
          <div className="container seo-hero-grid" style={{ position: "relative", zIndex: 10 }}>
            <div>
              <p className="section-label">{kicker}</p>
              <h1 className="heading-lg">{title}</h1>
              <p className="body-lg">{description}</p>
              <div className="seo-actions">
                <Link href={actualPrimaryHref} className="btn btn-primary">
                  {actualPrimaryLabel}
                </Link>
                <Link href={actualSecondaryHref} className="btn btn-ghost">
                  {actualSecondaryLabel}
                </Link>
              </div>
            </div>
            {video ? (
              <div className="seo-hero-media" style={{ position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "16/9" }}>
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ) : image ? (
              <div className="seo-hero-media">
                <Image src={image} alt={title} fill sizes="(max-width: 980px) 100vw, 44vw" priority />
              </div>
            ) : null}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}

export function SeoInternalLinks({ locale = "es" }: { locale?: "es" | "en" | "fr" }) {
  const linkSets = {
    es: [
      ["Propulsión UAV", "/propulsion-uav"],
      ["Propulsión para target drones", "/propulsion-target-drone"],
      ["Arquitectura de propulsión", "/arquitectura-propulsion"],
      ["Electrónica y telemetría", "/electronica-telemetria"],
      ["Ensayos y validación", "/ensayos-validacion"],
      ["Soporte", "/support"],
    ],
    en: [
      ["UAV propulsion", "/en/uav-propulsion"],
      ["Target drone propulsion", "/en/target-drone-propulsion"],
      ["Propulsion architecture", "/en/propulsion-architecture"],
      ["Electronics and telemetry", "/en/electronics-telemetry"],
      ["Testing and validation", "/en/testing-validation"],
      ["Support", "/support"],
    ],
    fr: [
      ["Propulsion UAV", "/fr/propulsion-uav"],
      ["Propulsion drone cible", "/fr/propulsion-drone-cible"],
      ["Architecture propulsion", "/fr/architecture-propulsion"],
      ["Électronique et télémétrie", "/fr/electronique-telemetrie"],
      ["Essais et validation", "/fr/essais-validation"],
      ["Support", "/support"],
    ],
  };
  const labels = {
    es: "Explora el sistema de propulsión",
    en: "Explore the propulsion stack",
    fr: "Explorer le système de propulsion",
  };
  const links = linkSets[locale];

  return (
    <section className="section container seo-link-section">
      <p className="section-label">{labels[locale]}</p>
      <div className="seo-link-grid">
        {links.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
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
  bentoGallery,
  children,
  compact = false,
  imageFit = "cover",
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
  bentoGallery?: { video?: string; images: string[] };
  children: React.ReactNode;
  compact?: boolean;
  imageFit?: "cover" | "contain";
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  breadcrumbPath?: string;
  locale?: "es" | "en" | "fr";
}) {
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null);
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
        <section
          className={compact ? "seo-hero seo-hero-compact" : "seo-hero"}
          style={{
            position: "relative",
            overflow: "hidden",
            paddingTop: bentoGallery ? "2.5rem" : undefined,
            paddingBottom: bentoGallery ? "2.5rem" : undefined
          }}
        >
          {showSpotlight && (
            <Spotlight fill="white" />
          )}
          {bentoGallery ? (
            <div className="container" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.2rem" }}>
              <div style={{ maxWidth: "800px" }}>
                <p className="section-label" style={{ marginBottom: "0.2rem" }}>{kicker}</p>
                <h1 className="heading-lg" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", margin: "0.8rem auto 1rem", lineHeight: 1.1 }}>{title}</h1>
                <p className="body-lg" style={{ color: "var(--text-soft)", fontSize: "0.95rem", margin: 0 }}>{description}</p>
              </div>
              <div className="premium-bento-gallery hero-bento-gallery">
                <div className="bento-item bento-large" style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#000", aspectRatio: (!bentoGallery.video && bentoGallery.images.length === 1) ? "2.5/1" : undefined }}>
                  {bentoGallery.video ? (
                    <video
                      src={bentoGallery.video}
                      controls
                      muted
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : bentoGallery.images.length > 0 ? (
                    <Image
                      src={bentoGallery.images[0]}
                      alt="Hero Media"
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 1100px) 100vw, 1100px"
                      priority
                    />
                  ) : null}
                </div>
                {bentoGallery.images.slice(bentoGallery.video ? 0 : 1).map((src, idx) => (
                  <div
                    key={idx}
                    className="bento-item zoomable-bento-item"
                    style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}
                    onClick={() => setActiveZoomImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`${title} detail ${idx + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
              <div className="seo-actions" style={{ justifyContent: "center", marginTop: "0.2rem" }}>
                <Link href={actualPrimaryHref} className="btn btn-primary">
                  {actualPrimaryLabel}
                </Link>
                <Link href={actualSecondaryHref} className="btn btn-ghost">
                  {actualSecondaryLabel}
                </Link>
              </div>
            </div>
          ) : (
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
                <div className="seo-hero-media" style={imageFit === 'contain' ? { background: 'transparent', border: 'none' } : undefined}>
                  <Image src={image} alt={title} fill sizes="(max-width: 980px) 100vw, 44vw" priority style={{ objectFit: imageFit }} />
                </div>
              ) : null}
            </div>
          )}
        </section>
        {children}
      </main>
      <Footer />
      {activeZoomImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(12px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            animation: "fadeIn 0.25s ease-out forwards",
          }}
          onClick={() => setActiveZoomImage(null)}
        >
          <div
            style={{
              position: "relative",
              width: "90vw",
              height: "80vh",
              maxWidth: "1000px",
              maxHeight: "800px",
              animation: "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
          >
            <Image
              src={activeZoomImage}
              alt="Zoomed Detail"
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
              priority
            />
          </div>
          <button
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.2rem",
              transition: "background 0.2s",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveZoomImage(null);
            }}
          >
            ✕
          </button>
        </div>
      )}
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

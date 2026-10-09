 
﻿import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { engines, solutionAlternates, localizedSolutionPages } from "../lib/seo-data";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...localizedSolutionPages.map((page) => ({ slug: page.es.slug })),
  ];
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;

  const basePage = localizedSolutionPages.find((item) => item.es.slug === slug);
  
  if (!basePage) {
    return {};
  }
  
  const page = basePage.es;

  return buildMetadata({
    title: `${page.title} | JetsMunt Defense Propulsion`,
    description: page.description,
    path: `/${page.slug}`,
    image: page.image,
    keywords: page.keywords,
    locale: "es_ES",
    languages: solutionAlternates(basePage.baseSlug),
  });
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;

  const basePage = localizedSolutionPages.find((item) => item.es.slug === slug);

  if (!basePage) {
    notFound();
  }
  
  const page = basePage.es;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": page.title,
        "description": page.description,
        "provider": {
          "@type": "Organization",
          "name": "JetsMunt",
          "url": "https://www.jetsmuntdefense.com"
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sistemas de Propulsión Microturbojet",
          "itemListElement": engines.map((e) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": e.name,
              "description": `${e.thrust} motor turbojet compacto`
            }
          }))
        }
      }
    ]
  };

  return (
    <SeoPageShell
      kicker={page.label}
      title={`${page.title} para plataformas aeroespaciales compactas.`}
      description={page.description}
      image={page.image}
      primaryHref="/contacto"
      primaryLabel="Comentar requisitos técnicos"
      secondaryHref="/motores"
      secondaryLabel="Ver catálogo de motores"
      breadcrumbPath={`/${page.slug}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section container seo-detail-grid">
        <div className="seo-copy-block">
          <h2>Arquitectura de Ingeniería y Requisitos de Misión</h2>
          <p>
            JetsMunt aborda la propulsión microturbojet compacta como un ecosistema de ingeniería integral: hardware del motor,
            ECU digital integrada, telemetría de alta frecuencia, gestión térmica, restricciones de envolvente
            y soporte de ciclo de vida completo. Nuestro objetivo es reducir el riesgo de integración desde las primeras fases de desarrollo.
          </p>
          <ul>
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn btn-primary">
              Consultar con Ingeniería de Propulsión
            </Link>
            <Link href="/motores" className="btn btn-ghost">
              Explorar Motores
            </Link>
          </div>
        </div>
        <div className="seo-spec-panel">
          <p className="section-label">Clases de Propulsión Compatibles</p>
          <dl>
            {engines.map((engine) => (
              <div key={engine.slug}>
                <dt><Link href={`/products/${engine.slug}`}>{engine.name}</Link></dt>
                <dd>{engine.thrust}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="seo-inline-media">
          <Image src={page.image} alt={page.title} fill sizes="(max-width: 980px) 100vw, 45vw" />
        </div>
      </section>

      {/* Pilares estratégicos B2B para integración aeroespacial y defensa */}
      <section className="section container" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "3rem" }}>
        <p className="section-label" style={{ textAlign: "center", marginBottom: "0.5rem" }}>Ventajas Estratégicas B2B</p>
        <h2 className="heading-md" style={{ textAlign: "center", marginBottom: "2.5rem" }}>Por qué los Integradores Aeroespaciales Eligen JetsMunt</h2>
        <div className="seo-card-grid three">
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>Soberanía 100% Libre de ITAR</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Diseñado y fabricado íntegramente en España dentro de la Unión Europea. Evite las restricciones burocráticas y los retrasos de exportación ITAR de EE.UU. con sistemas europeos soberanos.
            </p>
          </div>
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>Integración Directa en CAD y Aviónica</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Acceso directo a modelos 3D (.STEP), envolventes mecánicas y documentación técnica de protocolos. Telemetría estándar por CAN Bus y serie para integración inmediata con autopilotos.
            </p>
          </div>
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>Personalización para Programas OEM</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Colaboramos directamente con los equipos de ingeniería para adaptar anclajes, secuencias de arranque, generadores eléctricos y perfiles multicombustible a los requisitos exactos de la misión.
            </p>
          </div>
        </div>
      </section>

      <SeoInternalLinks />
    </SeoPageShell>
  );
}

 
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { engines, localizedSolutionPages, solutionAlternates } from "../../lib/seo-data";

type LocalizedSolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return localizedSolutionPages.map((page) => ({ slug: page.en.slug }));
}

export async function generateMetadata({ params }: LocalizedSolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = localizedSolutionPages.find((page) => page.en.slug === slug);

  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: `${entry.en.title} | JetsMunt Defense Propulsion`,
    description: entry.en.description,
    path: `/en/${entry.en.slug}`,
    image: entry.en.image,
    keywords: entry.en.keywords,
    locale: "en_US",
    languages: solutionAlternates(entry.baseSlug),
  });
}

export default async function EnSolutionPage({ params }: LocalizedSolutionPageProps) {
  const { slug } = await params;
  const entry = localizedSolutionPages.find((page) => page.en.slug === slug);

  if (!entry) {
    notFound();
  }

  const page = entry.en;

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
          "name": "Microturbojet Propulsion Systems",
          "itemListElement": engines.map((e) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": e.name,
              "description": `${e.thrust} compact turbojet engine`
            }
          }))
        }
      }
    ]
  };

  return (
    <SeoPageShell locale="en"
      kicker={page.label}
      title={`${page.title} for compact aerospace platforms.`}
      description={page.description}
      image={page.image}
      primaryHref="/en/contact"
      primaryLabel="Discuss requirements"
      secondaryHref="/en/engines"
      secondaryLabel="View engines"
      breadcrumbPath={`/en/${page.slug}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section container seo-detail-grid">
        <div className="seo-copy-block">
          <h2>Engineering Architecture & Mission Requirements</h2>
          <p>
            JetsMunt approaches microturbojet propulsion as a complete engineering ecosystem: engine hardware,
            integrated digital ECU, high-rate telemetry, thermal management, installation envelope constraints,
            and complete lifecycle support. Our mission is to de-risk propulsion integration early in the development cycle.
          </p>
          <ul>
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/en/contact" className="btn btn-primary">
              Consult Propulsion Engineering
            </Link>
            <Link href="/en/engines" className="btn btn-ghost">
              Explore Engine Catalog
            </Link>
          </div>
        </div>
        <div className="seo-spec-panel">
          <p className="section-label">Compatible Propulsion Classes</p>
          <dl>
            {engines.map((engine) => (
              <div key={engine.slug}>
                <dt><Link href={`/en/products/${engine.slug}`}>{engine.name}</Link></dt>
                <dd>{engine.thrust}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="seo-inline-media">
          <Image src={page.image} alt={page.title} fill sizes="(max-width: 980px) 100vw, 45vw" />
        </div>
      </section>

      {/* B2B Strategic Pillars for Industrial UAV & Defense Programs */}
      <section className="section container" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "3rem" }}>
        <p className="section-label" style={{ textAlign: "center", marginBottom: "0.5rem" }}>Strategic B2B Advantage</p>
        <h2 className="heading-md" style={{ textAlign: "center", marginBottom: "2.5rem" }}>Why Aerospace Integrators Choose JetsMunt</h2>
        <div className="seo-card-grid three">
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>100% ITAR-Free Sovereignty</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Manufactured entirely in Spain within the European Union. Avoid US ITAR red tape and long export authorization delays with sovereign European propulsion systems.
            </p>
          </div>
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>Direct CAD & Avionics Integration</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Direct access to .STEP files, 3D envelope models, and protocol documentation. Standardized CAN Bus and serial telemetry facilitate turnkey connection with onboard flight controllers.
            </p>
          </div>
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>OEM Program Customization</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              We collaborate with OEM platform engineers to adapt mounting lugs, starter sequences, generator outputs, and multi-fuel settings to match your exact mission envelope.
            </p>
          </div>
        </div>
      </section>

      <SeoInternalLinks locale="en" />
    </SeoPageShell>
  );
}

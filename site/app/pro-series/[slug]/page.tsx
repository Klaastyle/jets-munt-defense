import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { proEngines, siteUrl } from "../../lib/seo-data";

type ProPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return proEngines.map((engine) => ({ slug: engine.slug }));
}

export async function generateMetadata({ params }: ProPageProps): Promise<Metadata> {
  const { slug } = await params;
  const engine = proEngines.find((item) => item.slug === slug);

  if (!engine) {
    return {};
  }

  return buildMetadata({
    title: `${engine.name} Turbojet PRO Package | JetsMunt`,
    description: `${engine.name} professional compact turbojet package for UAV and target platform programs requiring ECU, telemetry, integration and validation support.`,
    path: `/pro-series/${engine.slug}`,
    image: engine.img,
    keywords: [engine.name, "PRO turbojet package", "UAV propulsion package", "turbojet telemetry support"],
  });
}

export default async function ProEnginePage({ params }: ProPageProps) {
  const { slug } = await params;
  const engine = proEngines.find((item) => item.slug === slug);

  if (!engine) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: engine.name,
    description: engine.summaryEs || engine.summary,
    image: `${siteUrl}${engine.img}`,
    brand: {
      "@type": "Brand",
      name: "JetsMunt",
    },
    category: "Professional compact turbojet propulsion package",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Thrust", value: engine.thrust },
      { "@type": "PropertyValue", name: "Package", value: "PRO series" },
      { "@type": "PropertyValue", name: "Support", value: "Integration, telemetry and validation support" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SeoPageShell
        kicker="PRO series"
        title={`${engine.name} propulsion package.`}
        description={engine.summaryEs || engine.summary}
        image={engine.img}
        breadcrumbPath={`/pro-series/${engine.slug}`}
      >
        <section className="section container seo-detail-grid">
          <div className="seo-copy-block">
            <h2>Built for professional program conversations.</h2>
            <p>
              The {engine.name} package is framed for teams that need more than a thrust figure:
              ECU and telemetry planning, system architecture, integration review and validation support.
            </p>
            <ul>
              <li>Professional compact turbojet propulsion package.</li>
              <li>Telemetry and control interface discussion.</li>
              <li>Program-level support from selection to validation.</li>
            </ul>
            <Link href="/contacto" className="btn btn-primary">
              Consultar paquete PRO
            </Link>
          </div>
          <div className="seo-spec-panel">
            <p className="section-label">PRO package</p>
            <dl>
              <div><dt>Thrust</dt><dd>{engine.thrust}</dd></div>
              <div><dt>Series</dt><dd>PRO</dd></div>
              <div><dt>Support</dt><dd>B2B programs</dd></div>
            </dl>
          </div>
          <div className="seo-inline-media">
            <Image src={engine.img} alt={`${engine.name} compact turbojet package`} fill sizes="(max-width: 980px) 100vw, 45vw" />
          </div>
        </section>
        <SeoInternalLinks />
      </SeoPageShell>
    </>
  );
}

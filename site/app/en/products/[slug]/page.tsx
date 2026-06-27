import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { engines, productAlternates } from "../../../lib/seo-data";

type EnginePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return engines.map((engine) => ({ slug: engine.slug }));
}

export async function generateMetadata({ params }: EnginePageProps): Promise<Metadata> {
  const { slug } = await params;
  const engine = engines.find((item) => item.slug === slug);
  if (!engine) return {};
  return buildMetadata({
    title: `${engine.name} Compact Turbojet Engine | JetsMunt`,
    description: `${engine.name} compact turbojet engine with ${engine.thrust} thrust for UAV and target platform programs.`,
    path: `/en/products/${engine.slug}`,
    image: engine.img,
    locale: "en_US",
    languages: productAlternates(engine.slug),
  });
}

export default async function EnProductPage({ params }: EnginePageProps) {
  const { slug } = await params;
  const engine = engines.find((item) => item.slug === slug);
  if (!engine) notFound();

  return (
    <SeoPageShell locale="en"
      kicker="Compact turbojet engine"
      title={`${engine.name} propulsion class.`}
      description={engine.summary}
      image={engine.img}
      primaryHref="/en/contact"
      primaryLabel="Discuss this engine"
      secondaryHref="/en/engines"
      secondaryLabel="Back to engines"
      breadcrumbPath={`/en/products/${engine.slug}`}
    >
      <section className="section container seo-detail-grid">
        <div className="seo-spec-panel">
          <p className="section-label">Core specifications</p>
          <dl>
            <div><dt>Thrust</dt><dd>{engine.thrust}</dd></div>
            <div><dt>Weight</dt><dd>{engine.weight}</dd></div>
            <div><dt>Diameter</dt><dd>{engine.diameter}</dd></div>
            <div><dt>System</dt><dd>Engine, ECU and telemetry support</dd></div>
          </dl>
        </div>
        <div className="seo-copy-block">
          <h2>Designed for integration work, not catalogue browsing.</h2>
          <p>The {engine.name} is positioned for teams evaluating compact turbojet propulsion around aircraft envelope, control architecture, installation constraints and validation route.</p>
          <ul>
            <li>UAV and target platform propulsion studies.</li>
            <li>ECU, sensor and telemetry integration planning.</li>
            <li>Bench validation and flight-test preparation support.</li>
          </ul>
          <Link href="/en/contact" className="btn btn-primary">Discuss this engine</Link>
        </div>
        <div className="seo-inline-media">
          <Image src={engine.img} alt={`${engine.name} engine hardware`} fill sizes="(max-width: 980px) 100vw, 45vw" />
        </div>
      </section>
    </SeoPageShell>
  );
}

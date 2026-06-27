import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { engines, primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Compact Turbojet Engines for UAV Platforms | JetsMunt",
  description: "JetsMunt XM compact turbojet engines for UAV, target drone and advanced aerospace platforms.",
  path: "/en/engines",
  locale: "en_US",
  languages: primaryAlternates("engines"),
});

export default function EnEnginesPage() {
  return (
    <SeoPageShell locale="en"
      kicker="XM engine portfolio"
      title="Compact turbojet engines for UAV and target platforms."
      description="JetsMunt XM engines are selected around thrust, mass, diameter, ECU integration and validation requirements."
      image="/media/turbina/m166ts-2.jpg"
      compact
      breadcrumbPath="/en/engines"
      primaryHref="/en/contact"
      primaryLabel="Start technical enquiry"
      secondaryHref="/en/accessories"
      secondaryLabel="View accessories"
    >
      <section className="section container">
        <div className="seo-card-grid">
          {engines.map((engine) => (
            <article className="seo-product-card" key={engine.slug}>
              <div className="seo-card-media">
                <Image src={engine.img} alt={`${engine.name} compact turbojet engine`} fill sizes="(max-width: 980px) 100vw, 25vw" />
              </div>
              <div className="seo-card-body">
                <h2>{engine.name}</h2>
                <p>{engine.summary}</p>
                <div className="product-specs">
                  <span><small>Thrust</small><strong>{engine.thrust}</strong></span>
                  <span><small>Weight</small><strong>{engine.weight}</strong></span>
                  <span><small>Diameter</small><strong>{engine.diameter}</strong></span>
                </div>
                <Link href={`/en/products/${engine.slug}`} className="text-link">Engine details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

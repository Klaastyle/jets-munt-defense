import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { proEngines } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt PRO Series Turbojet Propulsion",
  description:
    "Professional compact turbojet propulsion packages for UAV, target platform and advanced aerospace programs requiring telemetry, integration and validation support.",
  path: "/pro-series",
  keywords: ["professional turbojet engines", "UAV turbojet PRO series", "compact turbojet propulsion package"],
});

export default function ProSeriesPage() {
  return (
    <SeoPageShell
      kicker="PRO series"
      title="Professional compact turbojet packages."
      description="The PRO series positions JetsMunt compact turbojet propulsion as a program-level package: engine class, electronics, telemetry, integration support and validation route."
      image="/media/turbina/m166ts-3.jpg"
      breadcrumbPath="/pro-series"
    >
      <section className="section container">
        <div className="seo-card-grid">
          {proEngines.map((engine) => (
            <article className="seo-product-card" key={engine.slug}>
              <div className="seo-card-media">
                <Image src={engine.img} alt={`${engine.name} professional turbojet propulsion package`} fill sizes="(max-width: 980px) 100vw, 35vw" />
              </div>
              <div className="seo-card-body">
                <h2>{engine.name}</h2>
                <p>{engine.summaryEs || engine.summary}</p>
                <div className="product-specs">
                  <span><small>Thrust</small><strong>{engine.thrust}</strong></span>
                  <span><small>System</small><strong>PRO</strong></span>
                  <span><small>Support</small><strong>B2B</strong></span>
                </div>
                <Link href={`/pro-series/${engine.slug}`} className="text-link">
                  PRO package details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SeoInternalLinks />
    </SeoPageShell>
  );
}

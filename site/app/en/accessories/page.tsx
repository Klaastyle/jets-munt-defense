 
import Image from "next/image";
import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { accessories, primaryAlternates } from "../../lib/seo-data";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt Accessories | Fuel, Telemetry and Flight Packs",
  description: "Fuel, telemetry, protection and flight-pack accessories for JetsMunt turbojet propulsion systems.",
  path: "/en/accessories",
  locale: "en_US",
  languages: primaryAlternates("accessories"),
});

export default function EnAccessoriesPage() {
  return (
    <SeoPageShell locale="en"
      kicker="Accessories"
      title="Accessory systems for JetsMunt propulsion."
      description="Fuel, telemetry, protection and flight-pack accessories presented for fast technical selection."
      image="/media/capabilities/electronics-telemetry.png"
      compact
      breadcrumbPath="/en/accessories"
      primaryHref="/en/contact"
      primaryLabel="Start technical enquiry"
      secondaryHref="/en/engines"
      secondaryLabel="View engines"
    >
      <section className="section container">
        <div className="accessory-grid">
          {accessories.map((item) => (
            <article className="accessory-card" key={item.slug}>
              <div className="accessory-media">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 980px) 100vw, 33vw" />
              </div>
              <div className="accessory-body">
                <div>
                  <p className="accessory-type">{item.compatibility}</p>
                  <h2>{item.name}</h2>
                  <p>{item.summary}</p>
                </div>
                <div className="accessory-foot">
                  <strong>{item.price}</strong>
                  <span>VAT not included where applicable</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { accessories, primaryAlternates } from "../../lib/seo-data";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Accessoires JetsMunt | Carburant, Telemetrie et Packs de Vol",
  description: "Accessoires de carburant, telemetrie, protection et packs de vol pour systemes turbojet JetsMunt.",
  path: "/fr/accessoires",
  locale: "fr_FR",
  languages: primaryAlternates("accessories"),
});

export default function FrAccessoiresPage() {
  return (
    <SeoPageShell locale="fr"
      kicker="Accessoires"
      title="Systemes d'accessoires pour la propulsion JetsMunt."
      description="Accessoires carburant, telemetrie, protection et packs de vol presentes pour une selection technique rapide."
      image="/media/capabilities/electronics-telemetry.png"
      compact
      breadcrumbPath="/fr/accessoires"
      primaryHref="/fr/contact"
      primaryLabel="Demande technique"
      secondaryHref="/fr/moteurs"
      secondaryLabel="Voir les moteurs"
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
                  <p>{item.summaryFr || item.summary}</p>
                </div>
                <div className="accessory-foot">
                  <strong>{item.price}</strong>
                  <span>TVA non incluse le cas echeant</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

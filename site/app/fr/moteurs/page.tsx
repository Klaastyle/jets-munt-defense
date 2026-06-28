import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { engines, primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Moteurs Turbojet Compacts pour UAV | JetsMunt",
  description: "Moteurs turbojet compacts JetsMunt XM pour UAV, drones cibles et plateformes aerospatiales avancees.",
  path: "/fr/moteurs",
  locale: "fr_FR",
  languages: primaryAlternates("engines"),
});

export default function FrMoteursPage() {
  return (
    <SeoPageShell locale="fr"
      kicker="Gamme de moteurs XM"
      title="Moteurs turbojet compacts pour UAV et plateformes cibles."
      description="Les moteurs JetsMunt XM se selectionnent selon la poussee, la masse, le diametre, l'integration ECU et les besoins de validation."
      image="/media/turbina/m166ts-2.jpg"
      compact
      breadcrumbPath="/fr/moteurs"
      primaryHref="/fr/contact"
      primaryLabel="Demande technique"
      secondaryHref="/fr/accessoires"
      secondaryLabel="Voir les accessoires"
    >
      <section className="section container">
        <div className="seo-card-grid">
          {engines.map((engine) => (
            <article className="seo-product-card" key={engine.slug}>
              <div className="seo-card-media">
                <Image src={engine.img} alt={`${engine.name} moteur turbojet compact`} fill sizes="(max-width: 980px) 100vw, 25vw" />
              </div>
              <div className="seo-card-body">
                <h2>{engine.name}</h2>
                <p>{engine.summaryFr || engine.summary}</p>
                <div className="product-specs">
                  <span><small>Poussee</small><strong>{engine.thrust}</strong></span>
                  <span><small>Poids</small><strong>{engine.weightFr || engine.weight}</strong></span>
                  <span><small>Diametre</small><strong>{engine.diameterFr || engine.diameter}</strong></span>
                </div>
                <Link href={`/fr/produits/${engine.slug}`} className="text-link">Details du moteur</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

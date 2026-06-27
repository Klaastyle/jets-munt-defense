import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Service Technique JetsMunt | Maintenance et Support",
  description: "Service technique pour moteurs turbojet JetsMunt, accessoires, ECU, telemetrie, maintenance et validation.",
  path: "/fr/service-technique",
  locale: "fr_FR",
  languages: primaryAlternates("service"),
});

export default function FrServiceTechniquePage() {
  return (
    <SeoPageShell locale="fr"
      kicker="Service technique"
      title="Support technique pour systemes de propulsion JetsMunt."
      description="Indiquez le modele moteur, l'historique d'utilisation, la configuration accessoires et le comportement actuel afin d'orienter la demande."
      image="/media/capabilities/testing-validation.png"
      compact
      breadcrumbPath="/fr/service-technique"
      primaryHref="/fr/contact"
      primaryLabel="Envoyer une demande"
      secondaryHref="/fr/distributeurs"
      secondaryLabel="Trouver un distributeur"
    >
      <section className="section container seo-contact-grid">
        <div className="seo-copy-block">
          <h2>Avant d'envoyer la demande</h2>
          <ul>
            <li>Modele moteur, reference serie et heures de fonctionnement si disponibles.</li>
            <li>ECU, journaux de telemetrie, systeme carburant et contexte d'installation.</li>
            <li>Besoin de maintenance, inspection, reparation ou validation.</li>
            <li>Distributeur ou centre de service prefere si deja connu.</li>
          </ul>
        </div>
        <form className="cta-fields seo-form">
          <input type="text" className="cta-field" placeholder="Modele moteur" />
          <input type="text" className="cta-field" placeholder="Heures d'utilisation" />
          <input type="text" className="cta-field" placeholder="Resume du probleme" />
          <input type="text" className="cta-field" placeholder="Email de contact" />
          <button className="btn btn-primary cta-submit" type="button">Envoyer la demande</button>
        </form>
      </section>
    </SeoPageShell>
  );
}

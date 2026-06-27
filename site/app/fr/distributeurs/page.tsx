import type { Metadata } from "next";
import DistributorDirectory from "../../components/DistributorDirectory";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Distributeurs JetsMunt | Revendeurs et Centres de Service",
  description: "Recherchez les distributeurs autorises JetsMunt et les centres de service par region ou pays.",
  path: "/fr/distributeurs",
  locale: "fr_FR",
  languages: primaryAlternates("distributors"),
});

export default function FrDistributeursPage() {
  return (
    <SeoPageShell locale="fr"
      kicker="Distributeurs"
      title="Reseau de distributeurs autorises JetsMunt."
      description="Selectionnez une region, recherchez un partenaire ou affichez uniquement les centres de service."
      image="/media/capabilities/manufacturing-spain.png"
      compact
      breadcrumbPath="/fr/distributeurs"
      primaryHref="/fr/contact"
      primaryLabel="Contacter JetsMunt"
      secondaryHref="/fr/moteurs"
      secondaryLabel="Voir les moteurs"
    >
      <DistributorDirectory />
    </SeoPageShell>
  );
}

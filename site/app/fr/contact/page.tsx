/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import ContactEnquiryForm from "../../components/ContactEnquiryForm";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact JetsMunt | Demande Technique Propulsion",
  description: "Contactez JetsMunt pour selection moteur, accessoires, distributeurs, service technique et integration propulsion.",
  path: "/fr/contact",
  locale: "fr_FR",
  languages: primaryAlternates("contact"),
});

export default function FrContactPage() {
  return (
    <SeoPageShell locale="fr"
      kicker="Contact"
      title="Dites-nous ce dont votre plateforme a besoin."
      description="Partagez la classe moteur, les accessoires, les besoins de service ou les exigences distributeur avec l'equipe JetsMunt."
      image="/media/capabilities/uav-integration.png"
      compact
      breadcrumbPath="/fr/contact"
      primaryHref="/fr/contact"
      primaryLabel="Demande technique"
      secondaryHref="/fr/distributeurs"
      secondaryLabel="Trouver un distributeur"
    >
      <section className="section container contact-enquiry">
        <div className="contact-intro">
          <p className="kicker">Demande technique</p>
          <h2>Commencez par les contraintes importantes.</h2>
          <p>Envoyez le contexte propulsion, la classe moteur, le besoin de service ou l'accessoire recherche. Plus le brief est precis, plus JetsMunt peut l'orienter rapidement.</p>
        </div>
        <ContactEnquiryForm />
      </section>
    </SeoPageShell>
  );
}

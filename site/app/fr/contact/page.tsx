/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import ContactEnquiryForm from "../../components/ContactEnquiryForm";
import { Mail } from "lucide-react";
import GlobePulse from "../../components/GlobePulse";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { distributors, primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact JetsMunt | Demande Technique Propulsion",
  description: "Contactez JetsMunt pour selection moteur, accessoires, distributeurs, service technique et integration propulsion.",
  path: "/fr/contact",
  locale: "fr_FR",
  languages: primaryAlternates("contact"),
});

export default function FrContactPage() {
  const countries = Array.from(new Set(distributors.map((item) => item.country)));
  const serviceCenters = distributors.filter((item) => item.service).length;

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

      <section className="section container contact-network">
        <div className="contact-details">
          <p className="kicker">Contact direct</p>
          <h2>Jets Munt S.L.</h2>
          <p>
            Fabricant européen de turboréacteurs compacts basé à Arenys de Munt, Barcelone.
            Support technique direct et réseau de distributeurs agréés sur les marchés aérospatiaux stratégiques.
          </p>

          <div className="contact-methods">
            <a href="mailto:info@jetsmuntdefense.com">
              <Mail className="contact-info-icon" />
              info@jetsmuntdefense.com
            </a>
            <a href="tel:+34937950113">
              <span>Téléphone</span>
              +34 937 950 113
            </a>
            <a href="https://wa.me/34722819250" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              +34 722 819 250
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Arenys%20de%20Munt%2008358%20Barcelona%20Spain" target="_blank" rel="noreferrer">
              <span>Localisation</span>
              08358 Arenys de Munt, Barcelone, Espagne
            </a>
          </div>
        </div>

        <div className="contact-globe-panel" aria-label="JetsMunt worldwide distributor presence">
          <GlobePulse />

          <div className="network-stats">
            <div>
              <strong>{countries.length}</strong>
              <span>pays</span>
            </div>
            <div>
              <strong>{distributors.length}</strong>
              <span>partenaires</span>
            </div>
            <div>
              <strong>{serviceCenters}</strong>
              <span>centres de service</span>
            </div>
          </div>
        </div>
      </section>
    </SeoPageShell>
  );
}

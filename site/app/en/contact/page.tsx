 
import type { Metadata } from "next";
import ContactEnquiryForm from "../../components/ContactEnquiryForm";
import { Mail } from "lucide-react";
import GlobePulse from "../../components/GlobePulse";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { distributors, primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact JetsMunt | Technical Propulsion Enquiry",
  description: "Contact JetsMunt for engine selection, accessories, distributors, technical service and propulsion integration.",
  path: "/en/contact",
  locale: "en_US",
  languages: primaryAlternates("contact"),
});

export default function EnContactPage() {
  const countries = Array.from(new Set(distributors.map((item) => item.country)));
  const serviceCenters = distributors.filter((item) => item.service).length;

  return (
    <SeoPageShell locale="en"
      kicker="Contact"
      title="Tell us what your platform needs."
      description="Share engine class, accessories, service needs or distributor requirements with the JetsMunt team."
      image="/media/capabilities/uav-integration.png"
      compact
      breadcrumbPath="/en/contact"
      primaryHref="/en/contact"
      primaryLabel="Start enquiry"
      secondaryHref="/en/distributors"
      secondaryLabel="Find distributors"
    >
      <section className="section container contact-enquiry">
        <div className="contact-intro">
          <p className="kicker">Technical enquiry</p>
          <h2>Start with the constraints that matter.</h2>
          <p>Send the propulsion context, engine class, service requirement or accessory need. The more precise the brief, the faster JetsMunt can route it.</p>
        </div>
        <ContactEnquiryForm />
      </section>

      <section className="section container contact-network">
        <div className="contact-details">
          <p className="kicker">Direct Contact</p>
          <h2>Jets Munt S.L.</h2>
          <p>
            European compact turbojet manufacturer based in Arenys de Munt, Barcelona.
            Direct engineering support and an authorized distributor network across key global aerospace hubs.
          </p>

          <div className="contact-methods">
            <a href="mailto:info@jetsmuntdefense.com">
              <Mail className="contact-info-icon" />
              info@jetsmuntdefense.com
            </a>
            <a href="tel:+34937950113">
              <span>Phone</span>
              +34 937 950 113
            </a>
            <a href="https://wa.me/34722819250" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              +34 722 819 250
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Arenys%20de%20Munt%2008358%20Barcelona%20Spain" target="_blank" rel="noreferrer">
              <span>Location</span>
              08358 Arenys de Munt, Barcelona, Spain
            </a>
          </div>
        </div>

        <div className="contact-globe-panel" aria-label="JetsMunt worldwide distributor presence">
          <GlobePulse />

          <div className="network-stats">
            <div>
              <strong>{countries.length}</strong>
              <span>countries</span>
            </div>
            <div>
              <strong>{distributors.length}</strong>
              <span>partners</span>
            </div>
            <div>
              <strong>{serviceCenters}</strong>
              <span>service centers</span>
            </div>
          </div>
        </div>
      </section>
    </SeoPageShell>
  );
}

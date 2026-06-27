import type { Metadata } from "next";
import ContactEnquiryForm from "../../components/ContactEnquiryForm";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact JetsMunt | Technical Propulsion Enquiry",
  description: "Contact JetsMunt for engine selection, accessories, distributors, technical service and propulsion integration.",
  path: "/en/contact",
  locale: "en_US",
  languages: primaryAlternates("contact"),
});

export default function EnContactPage() {
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
    </SeoPageShell>
  );
}

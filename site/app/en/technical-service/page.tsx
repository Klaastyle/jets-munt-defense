import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt Technical Service | Service and Maintenance Request",
  description: "Technical service for JetsMunt turbojet engines, accessories, ECU, telemetry, maintenance and validation support.",
  path: "/en/technical-service",
  locale: "en_US",
  languages: primaryAlternates("service"),
});

export default function EnTechnicalServicePage() {
  return (
    <SeoPageShell locale="en"
      kicker="Technical service"
      title="Service support for JetsMunt propulsion systems."
      description="Share the engine model, operating history, accessory configuration and current behavior so the technical team can route the request correctly."
      image="/media/capabilities/testing-validation.png"
      compact
      breadcrumbPath="/en/technical-service"
      primaryHref="/en/contact"
      primaryLabel="Send service request"
      secondaryHref="/en/distributors"
      secondaryLabel="Find distributor"
    >
      <section className="section container seo-contact-grid">
        <div className="seo-copy-block">
          <h2>Before sending the request</h2>
          <ul>
            <li>Engine model, serial reference and operating hours if available.</li>
            <li>ECU, telemetry logs, fuel system and installation context.</li>
            <li>Maintenance, inspection, repair or validation requirement.</li>
            <li>Preferred distributor or service center if already known.</li>
          </ul>
        </div>
        <form className="cta-fields seo-form">
          <input type="text" className="cta-field" placeholder="Engine model" />
          <input type="text" className="cta-field" placeholder="Operating hours" />
          <input type="text" className="cta-field" placeholder="Issue summary" />
          <input type="text" className="cta-field" placeholder="Contact email" />
          <button className="btn btn-primary cta-submit" type="button">Send request</button>
        </form>
      </section>
    </SeoPageShell>
  );
}

 
import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Service Request for JetsMunt Turbojet Engines",
  description:
    "Request service support for JetsMunt compact turbojet engines, ECU, telemetry, maintenance review or validation support.",
  path: "/support/service-request",
  keywords: ["turbojet service request", "JetsMunt maintenance", "UAV engine service"],
});

export default function ServiceRequestPage() {
  return (
    <SeoPageShell
      kicker="Service request"
      title="Share service context before the engine is evaluated."
      description="Service support works best when the technical team understands engine model, operating history, installation environment and current behavior."
      image="/media/capabilities/manufacturing-spain.png"
      breadcrumbPath="/support/service-request"
    >
      <section className="section container seo-contact-grid">
        <div className="seo-copy-block">
          <h2>Include these details</h2>
          <ul>
            <li>Engine model, serial reference and operating hours if available.</li>
            <li>ECU, telemetry logs, fault behavior or observed symptoms.</li>
            <li>Fuel, electrical, airframe and test environment details.</li>
          </ul>
        </div>
        <form className="cta-fields seo-form">
          <input type="text" className="cta-field" placeholder="Engine model" />
          <input type="text" className="cta-field" placeholder="Operating hours" />
          <input type="text" className="cta-field" placeholder="Issue summary" />
          <input type="text" className="cta-field" placeholder="Contact email" />
          <button className="btn btn-primary cta-submit" type="button">Send service request</button>
        </form>
      </section>
    </SeoPageShell>
  );
}

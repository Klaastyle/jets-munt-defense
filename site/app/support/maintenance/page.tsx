import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Turbojet Engine Maintenance Support | JetsMunt",
  description:
    "Maintenance planning and service considerations for JetsMunt compact turbojet engines, ECU, telemetry and UAV propulsion programs.",
  path: "/support/maintenance",
  keywords: ["turbojet maintenance", "compact turbojet service", "UAV engine maintenance"],
});

export default function MaintenancePage() {
  return (
    <SeoPageShell
      kicker="Maintenance"
      title="Maintenance planning for compact turbojet systems."
      description="Maintenance support depends on operating profile, engine model, installation environment, telemetry history and program validation needs."
      image="/media/capabilities/manufacturing-spain.png"
      breadcrumbPath="/support/maintenance"
    >
      <section className="section container seo-copy-block">
        <h2>Maintenance considerations</h2>
        <ul>
          <li>Operating hours, duty cycle and environmental exposure.</li>
          <li>Fuel system condition, electrical supply and installation constraints.</li>
          <li>Telemetry logs, ECU behavior and service history.</li>
          <li>Inspection route before bench test or flight-test activity.</li>
        </ul>
      </section>
      <SeoInternalLinks />
    </SeoPageShell>
  );
}

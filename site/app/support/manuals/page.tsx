import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt Manuals for Compact Turbojet Programs",
  description:
    "Manuals and technical guidance routes for JetsMunt compact turbojet engines, ECU, telemetry, installation and validation support.",
  path: "/support/manuals",
  keywords: ["JetsMunt manuals", "turbojet engine manual", "UAV engine manual"],
});

export default function ManualsPage() {
  return (
    <SeoPageShell
      kicker="Manuals"
      title="Manual routes for engine and system support."
      description="JetsMunt manuals and technical guidance should be connected to the engine class, ECU configuration, telemetry interface and platform context."
      image="/media/capabilities/electronics-telemetry.png"
      breadcrumbPath="/support/manuals"
    >
      <section className="section container seo-copy-block">
        <h2>Manual coverage areas</h2>
        <ul>
          <li>Engine operation and handling guidance for compact turbojet systems.</li>
          <li>ECU, telemetry, sensor and interface references.</li>
          <li>Installation, test preparation and service coordination notes.</li>
        </ul>
      </section>
      <SeoInternalLinks />
    </SeoPageShell>
  );
}

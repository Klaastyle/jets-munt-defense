 
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt Downloads and Technical Documentation",
  description:
    "Documentation route for JetsMunt compact turbojet engine programs, technical references, ECU information and support material.",
  path: "/support/downloads",
  keywords: ["JetsMunt downloads", "turbojet documentation", "UAV engine documentation"],
});

export default function DownloadsPage() {
  return (
    <SeoPageShell
      kicker="Downloads"
      title="Technical documentation for propulsion teams."
      description="Use this route for engine documentation, program references and technical support material connected to JetsMunt compact turbojet systems."
      image="/media/capabilities/electronics-telemetry.png"
      breadcrumbPath="/support/downloads"
    >
      <section className="section container seo-copy-block">
        <h2>Documentation areas</h2>
        <ul>
          <li>Engine class references and specification summaries.</li>
          <li>ECU, telemetry and interface information.</li>
          <li>Integration, testing and service support documents.</li>
        </ul>
      </section>
      <SeoInternalLinks />
    </SeoPageShell>
  );
}

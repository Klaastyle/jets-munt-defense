 
import Link from "next/link";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Technical Support for Compact Turbojet Systems | JetsMunt",
  description:
    "JetsMunt support routes for compact turbojet engines, ECU, telemetry, maintenance, service coordination and program documentation.",
  path: "/support",
  keywords: ["turbojet support", "JetsMunt support", "UAV engine maintenance"],
});

const supportLinks = [
  ["Downloads", "/support/downloads", "Technical references and documentation routes."],
  ["Manuals", "/support/manuals", "Manual routes for engine, ECU and integration guidance."],
  ["Service Request", "/support/service-request", "Service, inspection and support conversations."],
  ["FAQ", "/support/faq", "Common technical questions about engines, ECU and telemetry."],
  ["Maintenance", "/support/maintenance", "Maintenance planning and service considerations."],
];

export default function SupportPage() {
  return (
    <SeoPageShell
      kicker="Support"
      title="Support for compact turbojet propulsion programs."
      description="Technical support should connect the engine, ECU, telemetry, installation envelope and validation history. JetsMunt support is built around program context, not isolated parts."
      image="/media/capabilities/testing-validation.png"
      breadcrumbPath="/support"
    >
      <section className="section container">
        <div className="seo-card-grid three">
          {supportLinks.map(([title, href, desc]) => (
            <article className="seo-info-card" key={href}>
              <h2>{title}</h2>
              <p>{desc}</p>
              <Link href={href} className="text-link">Open page</Link>
            </article>
          ))}
        </div>
      </section>
      <SeoInternalLinks />
    </SeoPageShell>
  );
}

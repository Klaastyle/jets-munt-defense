import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Compact Turbojet Engine FAQ | JetsMunt",
  description:
    "Answers about JetsMunt compact turbojet engines, thrust class selection, ECU, telemetry, UAV integration and validation support.",
  path: "/support/faq",
  keywords: ["compact turbojet FAQ", "UAV turbojet questions", "turbojet ECU telemetry"],
});

const faqs = [
  ["How should an engine class be selected?", "Selection starts with thrust target, aircraft mass, altitude, duty cycle, fuel architecture and installation envelope."],
  ["Does JetsMunt support ECU and telemetry integration?", "Yes. ECU, sensors, telemetry interfaces and data logging are part of the propulsion system discussion."],
  ["Can JetsMunt support UAV integration?", "JetsMunt can support propulsion selection, installation review, bench testing and flight-test preparation for UAV programs."],
  ["Are these engines only catalogue products?", "The XM range is a product portfolio, but B2B programs usually require technical review around platform constraints and validation route."],
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoPageShell
        kicker="FAQ"
        title="Questions about compact turbojet propulsion."
        description="A short technical FAQ for teams evaluating JetsMunt engines, ECU, telemetry and UAV integration support."
        image="/media/capabilities/uav-integration.png"
        breadcrumbPath="/support/faq"
      >
        <section className="section container seo-faq-list">
          {faqs.map(([question, answer]) => (
            <article key={question} className="seo-info-card">
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          ))}
        </section>
        <SeoInternalLinks />
      </SeoPageShell>
    </>
  );
}

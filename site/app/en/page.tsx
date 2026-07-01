import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactEnquiryForm from "../components/ContactEnquiryForm";
import ScrollReveal from "../components/ScrollReveal";
import ScrollPropulsionPartner from "../components/ScrollPropulsionPartner";
import { engines, siteUrl } from "../lib/seo-data";
import { buildMetadata } from "../lib/metadata";
import { homeAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt | European Compact Turbojet Engineering",
  description: "European compact turbojet engines, accessories, distributors and technical service for JetsMunt propulsion systems.",
  path: "/en",
  locale: "en_US",
  languages: homeAlternates(),
});



const proofStrip = [
  ["98 N - 500 N", "Product range"],
  ["50+ Countries", "Global reach"],
  ["30+ Years", "Engineering experience"],
  ["6,000+ Engines", "Delivered worldwide"],
];

const heroProofCards = [
  ["Since 1998", "Turbine R&D started"],
  ["6,000+ Delivered", "Global operational experience"],
  ["Designed & Manufactured", "In Spain"],
  ["Defense Propulsion", "Advanced unmanned systems"],
];

export default function EnHomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JetsMunt",
    url: siteUrl,
    description: "European manufacturer of compact turbojet propulsion systems, ECU, telemetry and integration support for UAV platforms.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    knowsAbout: [
      "Compact turbojet engines",
      "25 years of compact turbine engineering experience",
      "UAV propulsion systems",
      "Target drone propulsion",
      "Turbojet ECU and telemetry",
      "Propulsion testing and validation",
    ],
  };

  const engineItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JetsMunt XM Compact Turbojet Engine Portfolio",
    itemListElement: engines.map((engine, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/products/${engine.slug}`,
      item: {
        "@type": "Product",
        name: engine.name,
        description: engine.summary,
        image: `${siteUrl}${engine.img}`,
        brand: { "@type": "Brand", name: "JetsMunt" },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Thrust", value: engine.thrust },
          { "@type": "PropertyValue", name: "Weight", value: engine.weight },
          { "@type": "PropertyValue", name: "Diameter", value: engine.diameter },
        ],
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, engineItemListSchema]) }} />
      <Nav />
      <main>
        <section className="hero" id="top">
          <div className="hero-pin">
            <Image src="/hero-image.png" alt="Jets-Munt Propulsion" fill style={{ objectFit: 'cover' }} priority />
            <div className="hero-overlay" />

            <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', width: '100%', paddingBottom: '2rem' }}>
              <div className="hero-copy" style={{ position: 'absolute', top: 'calc(var(--nav-height) + 2rem)', left: '50%', transform: 'translateX(-50%)', width: '90%' }}>
                <h1 className="heading-md" style={{ marginBottom: '0.25rem', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>European Turbojet Propulsion for<br/>Advanced Unmanned Systems</h1>
                <div className="hero-kicker" style={{ color: 'var(--accent-2)', margin: 0, textTransform: 'uppercase' }}>Defense Propulsion Systems</div>
              </div>

            </div>

            {/* Claims - raised above the model strip */}
            <div className="hero-copy" style={{ position: 'absolute', bottom: '6rem', left: '50%', transform: 'translateX(-50%)', width: '100%', zIndex: 12 }}>
              <div className="hero-proof-grid" aria-label="JetsMunt technical proof points">
                {heroProofCards.map(([label, detail]) => (
                  <div className="hero-proof-card" key={label}>
                    <strong>{label}</strong>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Model Strip - pinned to bottom of hero */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 11 }}>
              <section className="model-strip" aria-label="JetsMunt engine families" style={{ borderBottom: 'none' }}>
                <div className="model-strip-inner">
                  {proofStrip.concat(proofStrip).map(([label, detail], index) => (
                    <span className="model-pill" key={`${label}-${index}`}>
                      <strong>{label}</strong> {detail}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <ScrollPropulsionPartner />


        <section className="section workflow-section" id="workflow">
          <video className="workflow-bg-video" src="/media/videos/loop-seamless.mp4" autoPlay muted loop playsInline />
          <div className="workflow-bg-overlay" />
          <div className="container">
            <ScrollReveal>
              <p className="section-label">Program workflow</p>
              <h2 className="heading-lg">A clear route from platform need to validated propulsion.</h2>
            </ScrollReveal>

            <div className="workflow-grid">
              {[
                ["Mission Profile", "Define target thrust, altitude, duty cycle, fuel and installation constraints."],
                ["System Selection", "Align engine class, ECU, telemetry and support with the platform envelope."],
                ["Testing & Support", "Prepare bench validation, flight data and technical feedback before deployment."],
              ].map(([title, detail], index) => (
                <ScrollReveal key={title} delay={(index + 1) as 1 | 2 | 3}>
                  <article className="workflow-step">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section section" id="contact">
          <div className="container cta-inner">
            <div>
              <p className="section-label">Technical propulsion enquiry</p>
              <h2 className="heading-md">Define the right propulsion route for your platform.</h2>
              <p className="body-md">
                Share platform type, target thrust, operating envelope and integration requirements with the JetsMunt engineering team.
              </p>
            </div>
            <ContactEnquiryForm compact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

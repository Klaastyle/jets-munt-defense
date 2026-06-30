import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroLoopVideo from "../components/HeroLoopVideo";
import ContactEnquiryForm from "../components/ContactEnquiryForm";
import ScrollReveal from "../components/ScrollReveal";
import ScrollPropulsionPartner from "../components/ScrollPropulsionPartner";
import ArchitectureReveal from "../components/ArchitectureReveal";
import AnoAI from "@/components/ui/animated-shader-background";
import EngineButton from "../components/EngineButton";
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

const capabilities = [
  { title: "UAV Integration", desc: "Fuel architecture, control interfaces, installation review and platform support.", img: "/media/photos/Gemini_Generated_Image_xztybfxztybfxzty.png" },
  { title: "ECU & Telemetry", desc: "Control electronics, CAN Bus, serial interfaces, sensors and data logging.", img: "/media/capabilities/electronics-telemetry.png" },
  { title: "Custom Development", desc: "Mission analysis, dimensional adaptation, prototypes and program engineering.", img: "/media/capabilities/custom-development.png" },
  { title: "Testing & Validation", desc: "Test bench, performance analysis and flight preparation.", img: "/media/capabilities/testing-validation.png" },
  { title: "Manufacturing in Spain", desc: "European design, manufacturing, assembly and technical support.", img: "/media/capabilities/manufacturing-spain.png" },
  { title: "Target Drone Propulsion", desc: "Compact thrust and integration support for demanding platforms.", img: "/media/capabilities/target-drones.png" },
];

const proofStrip = [
  ["98 N - 255 N", "Product range"],
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
            <HeroLoopVideo src="/media/videos/hero-engines-seamless.mp4" />
            <div className="hero-overlay" />

            <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', width: '100%', paddingBottom: '2rem' }}>
              <div className="hero-copy" style={{ position: 'absolute', top: 'calc(var(--nav-height) + 2rem)', left: '50%', transform: 'translateX(-50%)', width: '90%' }}>
                <h1 className="heading-md" style={{ marginBottom: '0.25rem', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>European Turbojet Propulsion for<br/>Advanced Unmanned Systems</h1>
                <div className="hero-kicker" style={{ color: 'var(--accent-2)', margin: 0, textTransform: 'uppercase' }}>Defense Propulsion Systems</div>
              </div>

              <div style={{ position: 'absolute', top: '65%', left: '0', width: '100%', height: '0' }}>
                <div style={{ position: 'absolute', left: '10%', transform: 'translate(-50%, -50%)' }}>
                  <EngineButton name="XM215 PRO" href="/en/engines/xm215-pro" delay={0} />
                </div>
                <div style={{ position: 'absolute', left: '95%', transform: 'translate(-50%, -50%)' }}>
                  <EngineButton name="XM255 PRO" href="/en/engines/xm255-pro" delay={1.5} />
                </div>
              </div>

              <div className="hero-copy" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
                <p className="hero-desc" style={{ margin: '0 auto 1rem', maxWidth: '800px' }}>
                  Designed and manufactured in Spain for UAV, target drones and advanced aerospace platforms.
                </p>
                <div className="hero-proof-grid" aria-label="JetsMunt technical proof points">
                  {heroProofCards.map(([label, detail]) => (
                    <div className="hero-proof-card" key={label}>
                      <strong>{label}</strong>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="model-strip" aria-label="JetsMunt engine families">
          <div className="model-strip-inner">
            {proofStrip.concat(proofStrip).map(([label, detail], index) => (
              <span className="model-pill" key={`${label}-${index}`}>
                <strong>{label}</strong> {detail}
              </span>
            ))}
          </div>
        </section>

        <ScrollPropulsionPartner />
        <ArchitectureReveal />

        <section className="section capabilities-section" id="capabilities">
          <AnoAI />
          <div className="container capabilities-section-inner">
            <ScrollReveal>
              <div className="section-heading split">
                <div>
                  <p className="section-label">Engineering Capabilities</p>
                  <h2 className="heading-lg">Technical depth beyond the catalog.</h2>
                </div>
                <p className="body-md">
                  A program needs more than a thrust figure. JetsMunt helps select, integrate, validate and support the complete propulsion package.
                </p>
              </div>
            </ScrollReveal>

            <div className="capabilities-grid">
              {capabilities.map((cap, index) => (
                <ScrollReveal key={cap.title} delay={(index % 3 + 1) as 1 | 2 | 3 | 4}>
                  <article className="capability-card">
                    <Image src={cap.img} alt={cap.title} fill sizes="(max-width: 980px) 100vw, 33vw" />
                    <div className="capability-overlay">
                      <h3>{cap.title}</h3>
                      <p>{cap.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

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

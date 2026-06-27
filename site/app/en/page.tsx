import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollHeroVideos from "../components/ScrollHeroVideos";
import ContactEnquiryForm from "../components/ContactEnquiryForm";
import { buildMetadata } from "../lib/metadata";
import { homeAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt | European Compact Turbojet Engineering",
  description: "European compact turbojet engines, accessories, distributors and technical service for JetsMunt propulsion systems.",
  path: "/en",
  locale: "en_US",
  languages: homeAlternates(),
});

export default function EnHomePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero" id="top">
          <div className="hero-pin">
            <ScrollHeroVideos sources={["/media/videos/hero-1-scrub.mp4", "/media/videos/hero-2-scrub.mp4"]} />
            <div className="hero-overlay" />
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="hero-kicker">Engineered and manufactured in Spain</div>
                <h1 className="heading-xl">European compact turbojet engineering.</h1>
                <p className="hero-desc">
                  Designed and manufactured in Spain for UAV, target drone and advanced aerospace platforms.
                </p>
                <div className="hero-proof-grid" aria-label="JetsMunt technical proof points">
                  {[
                    ["98-255 N", "XM thrust classes"],
                    ["ECU + telemetry", "Integrated control stack"],
                    ["25+ years", "Turbine experience"],
                    ["Global network", "Authorized distributors"],
                  ].map(([label, detail]) => (
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

        <section className="model-strip" aria-label="JetsMunt proof points">
          <div className="model-strip-inner">
            {[
              ["25+ years", "Turbine experience"],
              ["Made in Spain", "European manufacturing"],
              ["Engineering support", "Selection and integration"],
              ["XM series", "98-255 N thrust classes"],
            ].concat([
              ["25+ years", "Turbine experience"],
              ["Made in Spain", "European manufacturing"],
              ["Engineering support", "Selection and integration"],
              ["XM series", "98-255 N thrust classes"],
            ]).map(([label, detail], index) => (
              <span className="model-pill" key={`${label}-${index}`}>
                <strong>{label}</strong> {detail}
              </span>
            ))}
          </div>
        </section>

        <section className="cta-section section">
          <div className="container cta-inner">
            <div>
              <p className="section-label">Technical propulsion enquiry</p>
              <h2 className="heading-md">Define the right propulsion route for your platform.</h2>
              <p className="body-md">Share platform type, target thrust, operating envelope and integration requirements with the JetsMunt team.</p>
              <div className="seo-actions">
                <Link href="/en/engines" className="btn btn-ghost">View engines</Link>
                <Link href="/en/contact" className="btn btn-primary">Contact engineering</Link>
              </div>
            </div>
            <ContactEnquiryForm compact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

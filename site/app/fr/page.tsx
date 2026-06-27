import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollHeroVideos from "../components/ScrollHeroVideos";
import ContactEnquiryForm from "../components/ContactEnquiryForm";
import { buildMetadata } from "../lib/metadata";
import { homeAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt | Ingenierie Europeenne de Turbojets Compacts",
  description: "Moteurs turbojet compacts, accessoires, distributeurs et service technique pour les systemes de propulsion JetsMunt.",
  path: "/fr",
  locale: "fr_FR",
  languages: homeAlternates(),
});

export default function FrHomePage() {
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
                <div className="hero-kicker">Concu et fabrique en Espagne</div>
                <h1 className="heading-xl">Ingenierie europeenne de turbojets compacts.</h1>
                <p className="hero-desc">
                  Concu et fabrique en Espagne pour UAV, drones cibles et plateformes aerospatiales avancees.
                </p>
                <div className="hero-proof-grid" aria-label="Points techniques JetsMunt">
                  {[
                    ["98-255 N", "Classes de poussee XM"],
                    ["ECU + telemetrie", "Controle integre"],
                    ["25+ ans", "Experience turbine"],
                    ["Reseau global", "Distributeurs autorises"],
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

        <section className="model-strip" aria-label="Points de preuve JetsMunt">
          <div className="model-strip-inner">
            {[
              ["25+ ans", "Experience turbine"],
              ["Made in Spain", "Fabrication europeenne"],
              ["Support ingenierie", "Selection et integration"],
              ["Serie XM", "Classes 98-255 N"],
            ].concat([
              ["25+ ans", "Experience turbine"],
              ["Made in Spain", "Fabrication europeenne"],
              ["Support ingenierie", "Selection et integration"],
              ["Serie XM", "Classes 98-255 N"],
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
              <p className="section-label">Demande technique propulsion</p>
              <h2 className="heading-md">Definissez la bonne route propulsion pour votre plateforme.</h2>
              <p className="body-md">Partagez le type de plateforme, la poussee cible, l'enveloppe operationnelle et les exigences d'integration.</p>
              <div className="seo-actions">
                <Link href="/fr/moteurs" className="btn btn-ghost">Voir les moteurs</Link>
                <Link href="/fr/contact" className="btn btn-primary">Contacter l'ingenierie</Link>
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

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroLoopVideo from "../components/HeroLoopVideo";
import ContactEnquiryForm from "../components/ContactEnquiryForm";
import { buildMetadata } from "../lib/metadata";
import { homeAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt | Ingénierie Européenne de Turbojets Compacts",
  description: "Moteurs turbojet compacts, accessoires, distributeurs et service technique pour les systèmes de propulsion JetsMunt.",
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
            <HeroLoopVideo src="/media/videos/hero-xm-loop-seamless.mp4" />
            <div className="hero-overlay" />
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="hero-kicker">Defense Propulsion Systems</div>
                <h1 className="heading-xl">European Turbojet Propulsion for Advanced Unmanned Systems</h1>
                <p className="hero-desc">
                  Conçu et fabriqué en Espagne pour UAV, drones cibles et plateformes aérospatiales avancées.
                </p>
                <div className="hero-proof-grid" aria-label="Points techniques JetsMunt">
                  {[
                    ["Depuis 1998", "Début de la R&D"],
                    ["6 000+ Livrés", "Expérience opérationnelle mondiale"],
                    ["Conçu & Fabriqué", "En Espagne"],
                    ["Propulsion de Défense", "Pour systèmes non habités"],
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
              ["98 N - 255 N", "Gamme de produits"],
              ["50+ Pays", "Portée mondiale"],
              ["30+ Ans", "Expérience technique"],
              ["6 000+ Moteurs", "Livrés dans le monde"],
            ].concat([
              ["98 N - 255 N", "Gamme de produits"],
              ["50+ Pays", "Portée mondiale"],
              ["30+ Ans", "Expérience technique"],
              ["6 000+ Moteurs", "Livrés dans le monde"],
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
              <h2 className="heading-md">Définissez la bonne route de propulsion pour votre plateforme.</h2>
              <p className="body-md">Partagez le type de plateforme, la poussée cible, l'enveloppe opérationnelle et les exigences d'intégration.</p>
              <div className="seo-actions">
                <Link href="/fr/moteurs" className="btn btn-ghost">Voir les moteurs</Link>
                <Link href="/fr/contact" className="btn btn-primary">Contacter l'ingénierie</Link>
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

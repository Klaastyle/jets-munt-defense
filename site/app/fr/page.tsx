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
  title: "JetsMunt | Ingénierie de Turboréacteurs Compacts",
  description: "Turboréacteurs compacts européens, accessoires, distributeurs et service technique pour les systèmes de propulsion JetsMunt.",
  path: "/fr",
  locale: "fr_FR",
  languages: homeAlternates(),
});



const proofStrip = [
  ["98 N - 500 N", "Gamme de produits"],
  ["50+ Pays", "Portée mondiale"],
  ["30+ Ans", "Expérience en ingénierie"],
  ["6 000+ Moteurs", "Livrés dans le monde"],
];

const heroProofCards = [
  ["Depuis 1998", "Début de la R&D sur les turbines"],
  ["6 000+ Livrés", "Expérience opérationnelle mondiale"],
  ["Conçu et fabriqué", "En Espagne"],
  ["Propulsion de défense", "Systèmes sans pilote avancés"],
];

export default function FrHomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JetsMunt",
    url: siteUrl,
    description: "Fabricant européen de systèmes de propulsion par turboréacteurs compacts, d'ECU, de télémétrie et de support d'intégration pour les plateformes UAV.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    knowsAbout: [
      "Turboréacteurs compacts",
      "25 ans d'expérience en ingénierie de turbines",
      "Systèmes de propulsion UAV",
      "Propulsion pour drones cibles",
      "ECU et télémétrie de turboréacteurs",
      "Essai et validation de propulsion",
    ],
  };

  const engineItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio de turboréacteurs compacts JetsMunt XM",
    itemListElement: engines.map((engine, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/products/${engine.slug}`,
      item: {
        "@type": "Product",
        name: engine.name,
        description: engine.summaryFr || engine.summary,
        image: `${siteUrl}${engine.img}`,
        brand: { "@type": "Brand", name: "JetsMunt" },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Thrust", value: engine.thrust },
          { "@type": "PropertyValue", name: "Weight", value: engine.weightFr || engine.weight },
          { "@type": "PropertyValue", name: "Diameter", value: engine.diameterFr || engine.diameter },
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
                <h1 className="heading-md" style={{ marginBottom: '0.25rem', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Propulsion européenne par turboréacteur pour<br/>systèmes sans pilote avancés</h1>
                <div className="hero-kicker" style={{ color: 'var(--accent-2)', margin: 0, textTransform: 'uppercase' }}>Systèmes de propulsion de défense</div>
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
              <p className="section-label">Déroulement du programme</p>
              <h2 className="heading-lg">Une voie claire, du besoin de la plateforme à la propulsion validée.</h2>
            </ScrollReveal>

            <div className="workflow-grid">
              {[
                ["Profil de mission", "Définir la poussée cible, l'altitude, le cycle d'utilisation, le carburant et les contraintes d'installation."],
                ["Sélection du système", "Aligner la classe de moteur, l'ECU, la télémétrie et le support avec l'enveloppe de la plateforme."],
                ["Essai et support", "Préparer la validation sur banc, les données de vol et le retour technique avant déploiement."],
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
              <p className="section-label">Demande technique de propulsion</p>
              <h2 className="heading-md">Définissez la bonne voie de propulsion pour votre plateforme.</h2>
              <p className="body-md">
                Partagez le type de plateforme, la poussée cible, l'enveloppe d'exploitation et les exigences d'intégration avec l'équipe d'ingénierie JetsMunt.
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

import Image from "next/image";
import Nav from "./components/Nav";
import ScrollReveal from "./components/ScrollReveal";
import ScrollPropulsionPartner from "./components/ScrollPropulsionPartner";
import ContactEnquiryForm from "./components/ContactEnquiryForm";
import Footer from "./components/Footer";
import { engines, siteUrl } from "./lib/seo-data";



const proofStrip = [
  ["98 N - 500 N", "Gama de productos"],
  ["50+ Países", "Alcance global"],
  ["30+ Años", "Experiencia en ingeniería"],
  ["6.000+ Motores", "Entregados en el mundo"],
];

const heroProofCards = [
  ["Desde 1998", "Inicio de I+D de turbinas"],
  ["6.000+ Entregados", "Experiencia operativa global"],
  ["Diseñado y Fabricado", "En España"],
  ["Propulsión de Defensa", "Sistemas no tripulados avanzados"],
];

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JetsMunt",
    url: siteUrl,
    description:
      "Fabricante europeo de sistemas de propulsión turbojet compactos, ECU, telemetría y soporte de integración para plataformas UAV.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    knowsAbout: [
      "Motores turbojet compactos",
      "25 años de experiencia en ingeniería de turbinas compactas",
      "Sistemas de propulsión UAV",
      "Propulsión para target drones",
      "ECU y telemetría turbojet",
      "Ensayo y validación de propulsión",
    ],
  };

  const engineItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio de motores turbojet compactos JetsMunt XM",
    itemListElement: engines.map((engine, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/products/${engine.slug}`,
      item: {
        "@type": "Product",
        name: engine.name,
        description: engine.summaryEs || engine.summary,
        image: `${siteUrl}${engine.img}`,
        brand: {
          "@type": "Brand",
          name: "JetsMunt",
        },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Thrust", value: engine.thrust },
          { "@type": "PropertyValue", name: "Weight", value: engine.weightEs || engine.weight },
          { "@type": "PropertyValue", name: "Diameter", value: engine.diameterEs || engine.diameter },
        ],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, engineItemListSchema]),
        }}
      />
      <Nav />
      <main>
        <section className="hero" id="top">
          <div className="hero-pin">
            <Image src="/hero-image.png" alt="Jets-Munt Propulsion" fill style={{ objectFit: 'cover' }} priority />
            <div className="hero-overlay" />

            <div className="container" style={{ 
              position: 'relative', 
              zIndex: 2, 
              height: '100%', 
              width: '100%',
              paddingBottom: '2rem' 
            }}>
              {/* H1 justo por debajo del menu */}
              <div className="hero-copy" style={{ position: 'absolute', top: 'calc(var(--nav-height) + 2rem)', left: '50%', transform: 'translateX(-50%)', width: '90%' }}>
                <h1 className="heading-md" style={{ marginBottom: '0.25rem', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Propulsión Europea en Turborreactores para<br/>Sistemas No Tripulados Avanzados</h1>
                <div className="hero-kicker" style={{ color: 'var(--accent-2)', margin: 0, textTransform: 'uppercase' }}>Sistemas de Propulsión de Defensa</div>
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
              <p className="section-label">Flujo de programa</p>
              <h2 className="heading-lg">Una ruta clara desde la necesidad de plataforma hasta la propulsión validada.</h2>
            </ScrollReveal>

            <div className="workflow-grid">
              {[
                ["Perfil de misión", "Definir empuje objetivo, altitud, ciclo de uso, combustible y restricciones de instalación."],
                ["Selección del sistema", "Alinear clase de motor, ECU, telemetría y soporte con la envolvente de la plataforma."],
                ["Ensayo y soporte", "Preparar validación en banco, datos de vuelo y feedback técnico antes del despliegue."],
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
              <p className="section-label">Consulta técnica de propulsión</p>
              <h2 className="heading-md">Define la ruta de propulsión adecuada para tu plataforma.</h2>
              <p className="body-md">
                Comparte el tipo de plataforma, empuje objetivo, envolvente operativa y requisitos de integración con el equipo de ingeniería de JetsMunt.
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


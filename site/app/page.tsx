import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import ScrollReveal from "./components/ScrollReveal";
import ScrollHeroVideos from "./components/ScrollHeroVideos";
import ScrollPropulsionPartner from "./components/ScrollPropulsionPartner";
import ArchitectureReveal from "./components/ArchitectureReveal";
import ContactEnquiryForm from "./components/ContactEnquiryForm";
import Footer from "./components/Footer";
import { engines, siteUrl } from "./lib/seo-data";

const capabilities = [
  { title: "Integración UAV", desc: "Arquitectura de combustible, interfaces de control, revisión de instalación y soporte de plataforma.", img: "/media/capabilities/uav-integration.png" },
  { title: "ECU y telemetría", desc: "Electrónica de control, CAN Bus, interfaces serie, sensores y registro de datos.", img: "/media/capabilities/electronics-telemetry.png" },
  { title: "Desarrollo a medida", desc: "Análisis de misión, adaptación dimensional, prototipos e ingeniería de programa.", img: "/media/capabilities/custom-development.png" },
  { title: "Ensayo y validación", desc: "Banco de pruebas, análisis de rendimiento y preparación para vuelo.", img: "/media/capabilities/testing-validation.png" },
  { title: "Fabricación en España", desc: "Diseño europeo, fabricación, montaje y soporte técnico.", img: "/media/capabilities/manufacturing-spain.png" },
  { title: "Propulsión target drone", desc: "Empuje compacto y soporte de integración para plataformas exigentes.", img: "/media/capabilities/target-drones.png" },
];

const proofStrip = [
  ["25+ años", "Experiencia en turbinas"],
  ["Fabricado en España", "Fabricación europea"],
  ["25+ años", "Ingeniería de turbinas compactas"],
  ["Hecho en España", "Diseñado y fabricado"],
];

const heroProofCards = [
  ["98-255 N", "Clases de empuje XM"],
  ["ECU + telemetría", "Control integrado"],
  ["Soporte técnico", "Selección e integración"],
  ["Red global", "Distribuidores autorizados"],
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
            <ScrollHeroVideos sources={["/media/videos/hero-1-scrub.mp4", "/media/videos/hero-2-scrub.mp4"]} />
            <div className="hero-overlay" />

            <div className="container hero-grid">
              <ScrollReveal className="hero-copy">
                <div className="hero-kicker">Diseñado y fabricado en España</div>
                <h1 className="heading-xl">Ingeniería europea en turbojets compactos.</h1>
                <p className="hero-desc">
                  Diseñado y fabricado en España para UAV, target drones y plataformas aeroespaciales avanzadas.
                </p>
                <div className="hero-proof-grid" aria-label="JetsMunt technical proof points">
                  {heroProofCards.map(([label, detail]) => (
                    <div className="hero-proof-card" key={label}>
                      <strong>{label}</strong>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
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

        <section className="section container" id="products">
          <ScrollReveal>
            <div className="section-heading">
              <p className="section-label">Portfolio de motores XM</p>
              <h2 className="heading-lg">Selecciona propulsión por empuje, masa y envolvente de instalación.</h2>
            </div>
          </ScrollReveal>

          <div className="products-grid">
            {engines.map((engine, index) => (
              <ScrollReveal key={engine.name} delay={(index % 4 + 1) as 1 | 2 | 3 | 4}>
                <Link className="product-card product-card-link" href={`/products/${engine.slug}`}>
                  <div className="product-card-img">
                    <Image src={engine.img} alt={`${engine.name} motor turbojet compacto`} width={640} height={480} sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw" />
                  </div>
                  <div className="product-card-body">
                    <div>
                      <h3>{engine.name}</h3>
                      <p>Turbojet compacto UAV</p>
                    </div>
                    <div className="product-specs">
                      <span><small>Empuje</small><strong>{engine.thrust}</strong></span>
                      <span><small>Peso</small><strong>{engine.weightEs || engine.weight}</strong></span>
                      <span><small>Diámetro</small><strong>{engine.diameterEs || engine.diameter}</strong></span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="section container" id="capabilities">
          <ScrollReveal>
            <div className="section-heading split">
              <div>
                <p className="section-label">Capacidades de ingeniería</p>
                <h2 className="heading-lg">Profundidad técnica más allá del catálogo.</h2>
              </div>
              <p className="body-md">
                Un programa necesita más que una cifra de empuje. JetsMunt ayuda a seleccionar, integrar, validar y soportar el paquete de propulsión completo.
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
        </section>

        <section className="section workflow-section" id="workflow">
          <video className="workflow-bg-video" src="/media/videos/loop.mp4" autoPlay muted loop playsInline />
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


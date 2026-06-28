import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { engines, productAlternates, siteUrl } from "../../lib/seo-data";

type EnginePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return engines.map((engine) => ({ slug: engine.slug }));
}

export async function generateMetadata({ params }: EnginePageProps): Promise<Metadata> {
  const { slug } = await params;
  const engine = engines.find((item) => item.slug === slug);

  if (!engine) {
    return {};
  }

  return buildMetadata({
    title: `${engine.name} Motor Turbojet Compacto | JetsMunt`,
    description: `Motor turbojet compacto ${engine.name} con ${engine.thrust} de empuje para programas de propulsión de UAV, target drones y plataformas aeroespaciales avanzadas.`,
    path: `/products/${engine.slug}`,
    image: engine.img,
    keywords: [engine.name, `${engine.name} turbojet`, "motor turbojet compacto UAV", "motor para target drone"],
    locale: "es_ES",
    languages: productAlternates(engine.slug),
  });
}

export default async function EnginePage({ params }: EnginePageProps) {
  const { slug } = await params;
  const engine = engines.find((item) => item.slug === slug);

  if (!engine) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: engine.name,
    description: engine.summaryEs || engine.summary,
    image: `${siteUrl}${engine.img}`,
    brand: {
      "@type": "Brand",
      name: "JetsMunt",
    },
    category: "Motor turbojet compacto",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Thrust", value: engine.thrust },
      { "@type": "PropertyValue", name: "Weight", value: engine.weightEs || engine.weight },
      { "@type": "PropertyValue", name: "Diameter", value: engine.diameterEs || engine.diameter },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SeoPageShell
        kicker="Motor turbojet compacto"
        title={`Clase de propulsion ${engine.name}.`}
        description={engine.summaryEs || engine.summary}
        image={engine.img}
        breadcrumbPath={`/products/${engine.slug}`}
      >
        <section className="section container seo-detail-grid">
          <div className="seo-spec-panel">
            <p className="section-label">Especificaciones principales</p>
            <dl>
              <div><dt>Empuje</dt><dd>{engine.thrust}</dd></div>
              <div><dt>Peso</dt><dd>{engine.weightEs || engine.weight}</dd></div>
              <div><dt>Diámetro</dt><dd>{engine.diameterEs || engine.diameter}</dd></div>
              <div><dt>Sistema</dt><dd>Motor, ECU y soporte de telemetría</dd></div>
            </dl>
          </div>
          <div className="seo-copy-block">
            <h2>Diseñado para integración real, no solo para catálogo.</h2>
            <p>
              El {engine.name} está orientado a equipos que evaluan propulsion turbojet compacta
              en función de envolvente de aeronave, arquitectura de control, restricciones de instalación
              y ruta de validación. JetsMunt acompaña la selección más allá del empuje, incluyendo ECU,
              telemetría, combustible y necesidades de ensayo.
            </p>
            <ul>
              <li>Estudios de propulsion para UAV y plataformas target.</li>
              <li>Planificación de integración ECU, sensores y telemetria.</li>
              <li>Soporte de validación en banco y preparación de pruebas de vuelo.</li>
            </ul>
            <Link href="/contacto" className="btn btn-primary">
              Consultar este motor
            </Link>
          </div>
          <div className="seo-inline-media">
            <Image src={engine.img} alt={`${engine.name} hardware de motor`} fill sizes="(max-width: 980px) 100vw, 45vw" />
          </div>
        </section>
        <SeoInternalLinks />
      </SeoPageShell>
    </>
  );
}

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
    title: `${engine.name} Compact Turbojet Engine | JetsMunt`,
    description: `${engine.name} compact turbojet engine with ${engine.thrust} thrust for UAV, target drone and advanced aerospace propulsion programs.`,
    path: `/products/${engine.slug}`,
    image: engine.img,
    keywords: [engine.name, `${engine.name} turbojet`, "compact UAV turbojet engine", "target drone engine"],
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
    category: "Compact turbojet engine",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Thrust", value: engine.thrust },
      { "@type": "PropertyValue", name: "Weight", value: engine.weight },
      { "@type": "PropertyValue", name: "Diameter", value: engine.diameter },
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
              <div><dt>Peso</dt><dd>{engine.weight}</dd></div>
              <div><dt>Diametro</dt><dd>{engine.diameter}</dd></div>
              <div><dt>Sistema</dt><dd>Motor, ECU y soporte de telemetria</dd></div>
            </dl>
          </div>
          <div className="seo-copy-block">
            <h2>Disenado para integracion real, no solo para catalogo.</h2>
            <p>
              El {engine.name} esta orientado a equipos que evaluan propulsion turbojet compacta
              en funcion de envolvente de aeronave, arquitectura de control, restricciones de instalacion
              y ruta de validacion. JetsMunt acompana la seleccion mas alla del empuje, incluyendo ECU,
              telemetria, combustible y necesidades de ensayo.
            </p>
            <ul>
              <li>Estudios de propulsion para UAV y plataformas target.</li>
              <li>Planificacion de integracion ECU, sensores y telemetria.</li>
              <li>Soporte de validacion en banco y preparacion de pruebas de vuelo.</li>
            </ul>
            <Link href="/contacto" className="btn btn-primary">
              Consultar este motor
            </Link>
          </div>
          <div className="seo-inline-media">
            <Image src={engine.img} alt={`${engine.name} engine hardware`} fill sizes="(max-width: 980px) 100vw, 45vw" />
          </div>
        </section>
        <SeoInternalLinks />
      </SeoPageShell>
    </>
  );
}

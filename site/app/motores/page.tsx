import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { engines, primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Motores Turbojet Compactos para UAV | JetsMunt",
  description:
    "Explora los motores turbojet compactos JetsMunt XM para UAV, target drones y plataformas especiales, con clases de empuje de 98 N a 255 N.",
  path: "/motores",
  keywords: ["motores turbojet compactos", "motores turbojet UAV", "motores turbojet XM"],
  locale: "es_ES",
  languages: primaryAlternates("engines"),
});

export default function EnginesPage() {
  return (
    <SeoPageShell
      kicker="Portfolio de motores XM"
      title="Motores turbojet compactos para UAV y plataformas target."
      description="Los motores JetsMunt XM se seleccionan por empuje, masa, diametro, integracion ECU y requisitos de validacion para plataformas aeroespaciales compactas."
      image="/media/turbina/m166ts-2.jpg"
      breadcrumbPath="/motores"
      compact
    >
      <section className="section container">
        <div className="seo-card-grid">
          {engines.map((engine) => (
            <article className="seo-product-card" key={engine.slug}>
              <div className="seo-card-media">
                <Image src={engine.img} alt={`${engine.name} compact turbojet engine`} fill sizes="(max-width: 980px) 100vw, 25vw" />
              </div>
              <div className="seo-card-body">
                <h2>{engine.name}</h2>
                <p>{engine.summaryEs || engine.summary}</p>
                <div className="product-specs">
                  <span><small>Empuje</small><strong>{engine.thrust}</strong></span>
                  <span><small>Peso</small><strong>{engine.weight}</strong></span>
                  <span><small>Diametro</small><strong>{engine.diameter}</strong></span>
                </div>
                <Link href={`/products/${engine.slug}`} className="text-link">
                  Ver detalles
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SeoInternalLinks />
    </SeoPageShell>
  );
}

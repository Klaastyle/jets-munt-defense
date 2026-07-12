 
import Image from "next/image";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../components/SeoPage";
import { accessories, primaryAlternates } from "../lib/seo-data";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Accesorios JetsMunt | Combustible, Telemetría y Packs de Vuelo",
  description:
    "Accesorios JetsMunt para sistemas turbojet: depósito UAT, FOD Guard, Fuel Station, packs de vuelo, Smart Data Terminal y telemetría V-Speak.",
  path: "/accesorios",
  image: "/media/capabilities/electronics-telemetry.png",
  keywords: ["JetsMunt accesorios", "accesorios turbojet", "FOD Guard", "telemetría V-Speak", "pack de vuelo JetsMunt"],
  locale: "es_ES",
  languages: primaryAlternates("accessories"),
});

export default function AccessoriesPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JetsMunt accesorios",
    itemListElement: accessories.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.name,
        description: item.summaryEs || item.summary,
        image: item.image,
        brand: { "@type": "Brand", name: "JetsMunt" },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SeoPageShell
        kicker="Accesorios"
        title="Sistemas de accesorios para propulsión JetsMunt."
        description="Accesorios de combustible, telemetría, protección y packs de vuelo del catálogo JetsMunt, presentados para una selección técnica rápida."
        image="/media/capabilities/electronics-telemetry.png"
        breadcrumbPath="/accesorios"
        compact
      >
        <section className="section container">
          <div className="accessory-grid">
            {accessories.map((item) => (
              <article className="accessory-card" key={item.slug}>
                <div className="accessory-media">
                  <Image src={item.image} alt={item.name} fill sizes="(max-width: 980px) 100vw, 33vw" />
                </div>
                <div className="accessory-body">
                  <div>
                    <p className="accessory-type">{item.compatibility}</p>
                    <h2>{item.name}</h2>
                    <p>{item.summaryEs || item.summary}</p>
                  </div>
                  <div className="accessory-foot">
                    <strong>{item.price}</strong>
                    <span>IVA no incluido cuando aplica</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <SeoInternalLinks />
      </SeoPageShell>
    </>
  );
}


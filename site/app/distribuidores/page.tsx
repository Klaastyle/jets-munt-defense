 
import type { Metadata } from "next";
import DistributorDirectory from "../components/DistributorDirectory";
import { SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { distributors, primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Distribuidores JetsMunt | Centros de Venta y Servicio Autorizados",
  description:
    "Directorio seleccionable de distribuidores JetsMunt, partners autorizados y centros de venta o servicio técnico por región.",
  path: "/distribuidores",
  image: "/media/capabilities/manufacturing-spain.png",
  keywords: ["distribuidores JetsMunt", "vendedores JetsMunt", "centro de servicio JetsMunt", "distribuidor turbojet"],
  locale: "es_ES",
  languages: primaryAlternates("distributors"),
});

export default function DistributorsPage() {
  const distributorSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Red de distribuidores JetsMunt",
    itemListElement: distributors.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: item.name,
        areaServed: item.country,
        address: {
          "@type": "PostalAddress",
          addressCountry: item.country,
          addressLocality: item.city,
          postalCode: item.postalCode,
        },
        telephone: item.phone,
        email: item.email,
        url: item.website,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(distributorSchema) }}
      />
      <SeoPageShell
        kicker="Distribuidores"
        title="Red de distribuidores autorizados JetsMunt."
        description="Selecciona una región, busca por partner o filtra solo centros de servicio. La lista se basa en el directorio oficial de distribuidores JetsMunt."
        image="/media/capabilities/manufacturing-spain.png"
        breadcrumbPath="/distribuidores"
        compact
      >
        <DistributorDirectory />
      </SeoPageShell>
    </>
  );
}


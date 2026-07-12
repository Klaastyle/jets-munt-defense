 
import type { Metadata } from "next";
import DistributorDirectory from "../../components/DistributorDirectory";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "JetsMunt Distributors | Authorized Dealers and Service Centers",
  description: "Search JetsMunt authorized distributors, dealers and service centers by region or country.",
  path: "/en/distributors",
  locale: "en_US",
  languages: primaryAlternates("distributors"),
});

export default function EnDistributorsPage() {
  return (
    <SeoPageShell locale="en"
      kicker="Distributors"
      title="Authorized JetsMunt distributor network."
      description="Select a region, search by partner name, or show service centers only."
      image="/media/capabilities/manufacturing-spain.png"
      compact
      breadcrumbPath="/en/distributors"
      primaryHref="/en/contact"
      primaryLabel="Contact JetsMunt"
      secondaryHref="/en/engines"
      secondaryLabel="View engines"
    >
      <DistributorDirectory />
    </SeoPageShell>
  );
}

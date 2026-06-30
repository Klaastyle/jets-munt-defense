import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Professional Turbojet Engines for UAV | JetsMunt",
  description:
    "Explore the JetsMunt PRO series of professional compact turbojet engines for advanced UAV and target drone platforms, with integrated electronics and validation support.",
  path: "/en/engines",
  keywords: ["professional turbojet engines", "UAV turbojet", "JetsMunt PRO", "XM215 PRO", "XM255 PRO"],
  locale: "en_US",
  languages: primaryAlternates("engines"),
});

export default function EnEnginesPage() {
  const proEnginesList = [
    {
      name: "XM215 PRO",
      slug: "xm215-pro",
      thrust: "215 N",
      weight: "1,820 g",
      diameter: "73.9 mm",
      img: "/media/215/Gemini_Generated_Image_h34k9mh34k9mh34k.png",
      summary: "Microturbine optimized with brushless FOC control electronics and real-time mission telemetry.",
    },
    {
      name: "XM255 PRO",
      slug: "xm255-pro",
      thrust: "255 N",
      weight: "2,080 g",
      diameter: "122 mm",
      img: "/media/255/Gemini_Generated_Image_g27l6rg27l6rg27l.png",
      summary: "Our highest thrust and military performance propulsion unit for target platforms and tactical UAVs.",
    },
  ];

  return (
    <SeoPageShell
      locale="en"
      kicker="PRO Engines Catalogue"
      title="Turbojet Propulsion Systems for UAVs"
      description="JetsMunt PRO engines integrate the control unit (ECU), diagnostic software, and flight sensors directly into the engine hardware, eliminating cables and simplifying installation on unmanned platforms."
      image="/media/photos/Gemini_Generated_Image_bb2h12bb2h12bb2h.png"
      breadcrumbPath="/en/engines"
      compact
      primaryHref="/en/contact"
      primaryLabel="Start technical enquiry"
      secondaryHref="/en/engines"
      secondaryLabel="View engines"
    >
      <section className="section container">
        <div className="seo-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {proEnginesList.map((engine) => (
            <article className="seo-product-card" key={engine.slug} style={{ display: "flex", flexDirection: "column", height: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", overflow: "hidden" }}>
              <div className="seo-card-media" style={{ position: "relative", height: "240px", width: "100%" }}>
                <Image src={engine.img} alt={`${engine.name} professional compact turbojet`} fill style={{ objectFit: "cover" }} sizes="(max-width: 980px) 100vw, 50vw" />
              </div>
              <div className="seo-card-body" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>{engine.name}</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>{engine.summary}</p>
                
                <div className="product-specs" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Thrust</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.thrust}</strong></span>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Weight</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.weight}</strong></span>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Diameter</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.diameter}</strong></span>
                </div>
                
                <Link href={`/en/engines/${engine.slug}`} className="btn btn-ghost" style={{ textAlign: "center", width: "100%", padding: "0.6rem" }}>
                  View integration details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

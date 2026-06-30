import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Motores Turbojet Profesionales para UAV | JetsMunt",
  description:
    "Explore la serie de motores turbojet profesionales JetsMunt PRO para UAV avanzados y plataformas target, con electrónica integrada y soporte de validación.",
  path: "/motores",
  keywords: ["motores turbojet profesionales", "turbojet UAV", "JetsMunt PRO", "XM215 PRO", "XM255 PRO"],
  locale: "es_ES",
  languages: primaryAlternates("engines"),
});

export default function EnginesPage() {
  const proEnginesList = [
    {
      name: "XM215 PRO",
      slug: "xm215-pro",
      thrust: "215 N",
      weight: "1.820 g",
      diameter: "73,9 mm",
      img: "/media/215/Gemini_Generated_Image_h34k9mh34k9mh34k.png",
      summary: "Microturbina optimizada con electrónica de control brushless FOC y telemetría de misión en tiempo real.",
    },
    {
      name: "XM255 PRO",
      slug: "xm255-pro",
      thrust: "255 N",
      weight: "2.080 g",
      diameter: "122 mm",
      img: "/media/255/Gemini_Generated_Image_g27l6rg27l6rg27l.png",
      summary: "Nuestra unidad de propulsión de mayor empuje y rendimiento militar para plataformas target y UAVs tácticos.",
    },
  ];

  return (
    <SeoPageShell
      kicker="Catálogo de Motores PRO"
      title="Sistemas de Propulsión Turbojet para UAV"
      description="Los motores JetsMunt PRO integran la unidad de control (ECU), el software de diagnóstico y los sensores de vuelo directamente en el hardware del motor, eliminando cables y simplificando la instalación en plataformas no tripuladas."
      image="/media/photos/Gemini_Generated_Image_bb2h12bb2h12bb2h.png"
      breadcrumbPath="/motores"
      compact
    >
      <section className="section container">
        <div className="seo-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {proEnginesList.map((engine) => (
            <article className="seo-product-card" key={engine.slug} style={{ display: "flex", flexDirection: "column", height: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", overflow: "hidden" }}>
              <div className="seo-card-media" style={{ position: "relative", aspectRatio: "16/9", width: "100%", background: "#050505" }}>
                <Image src={engine.img} alt={`${engine.name} motor turbojet compacto profesional`} fill style={{ objectFit: "contain" }} sizes="(max-width: 980px) 100vw, 50vw" />
              </div>
              <div className="seo-card-body" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>{engine.name}</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>{engine.summary}</p>
                
                <div className="product-specs" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Empuje</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.thrust}</strong></span>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Peso</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.weight}</strong></span>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Diámetro</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.diameter}</strong></span>
                </div>
                
                <Link href={`/motores/${engine.slug}`} className="btn btn-ghost" style={{ textAlign: "center", width: "100%", padding: "0.6rem" }}>
                  Ver detalles de integración
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SeoInternalLinks locale="es" />
    </SeoPageShell>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Moteurs Turbojet Professionnels pour UAV | JetsMunt",
  description:
    "Découvrez la gamme de moteurs turboréacteurs professionnels JetsMunt PRO pour UAV avancés et plateformes cibles, avec électronique intégrée et support de validation.",
  path: "/fr/moteurs",
  keywords: ["moteurs turbojet professionnels", "turbojet UAV", "JetsMunt PRO", "XM215 PRO", "XM255 PRO"],
  locale: "fr_FR",
  languages: primaryAlternates("engines"),
});

export default function FrMoteursPage() {
  const proEnginesList = [
    {
      name: "XM215 PRO",
      slug: "xm215-pro",
      thrust: "215 N",
      weight: "1 820 g",
      diameter: "73,9 mm",
      img: "/media/215/Gemini_Generated_Image_h34k9mh34k9mh34k.png",
      summary: "Microturbine optimisée avec électronique de contrôle brushless FOC et télémétrie de mission en temps réel.",
    },
    {
      name: "XM255 PRO",
      slug: "xm255-pro",
      thrust: "255 N",
      weight: "2 080 g",
      diameter: "122 mm",
      img: "/media/255/Gemini_Generated_Image_g27l6rg27l6rg27l.png",
      summary: "Notre unité de propulsion avec la plus forte poussée et performance militaire pour les plateformes cibles et les drones tactiques.",
    },
  ];

  return (
    <SeoPageShell
      locale="fr"
      kicker="Catalogue de Moteurs PRO"
      title="Systèmes de Propulsion Turboréacteur pour Drones"
      description="Les moteurs JetsMunt PRO intègrent l'unité de contrôle (ECU), le logiciel de diagnostic et les capteurs de vol directement dans le matériel du moteur, éliminant les câbles et simplifiant l'installation sur les plateformes sans pilote."
      image="/media/photos/Gemini_Generated_Image_bb2h12bb2h12bb2h.png"
      breadcrumbPath="/fr/moteurs"
      compact
      primaryHref="/fr/contact"
      primaryLabel="Demande technique"
      secondaryHref="/fr/moteurs"
      secondaryLabel="Voir les moteurs"
    >
      <section className="section container">
        <div className="seo-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {proEnginesList.map((engine) => (
            <article className="seo-product-card" key={engine.slug} style={{ display: "flex", flexDirection: "column", height: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", overflow: "hidden" }}>
              <div className="seo-card-media" style={{ position: "relative", aspectRatio: "16/9", width: "100%", background: "#050505" }}>
                <Image src={engine.img} alt={`${engine.name} turboréacteur compact professionnel`} fill style={{ objectFit: "contain" }} sizes="(max-width: 980px) 100vw, 50vw" />
              </div>
              <div className="seo-card-body" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>{engine.name}</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>{engine.summary}</p>
                
                <div className="product-specs" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Poussée</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.thrust}</strong></span>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Poids</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.weight}</strong></span>
                  <span style={{ display: "flex", flexDirection: "column" }}><small style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Diamètre</small><strong style={{ color: "#fff", fontSize: "0.95rem" }}>{engine.diameter}</strong></span>
                </div>
                
                <Link href={`/fr/moteurs/${engine.slug}`} className="btn btn-ghost" style={{ textAlign: "center", width: "100%", padding: "0.6rem" }}>
                  Voir les détails d'intégration
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

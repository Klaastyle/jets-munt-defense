/* eslint-disable react/no-unescaped-entities */
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
      img: "/media/215/motor-turbojet-xm215-pro-3.png",
      summary: "Microturbine optimisée avec électronique de contrôle brushless FOC et télémétrie de mission en temps réel.",
    },
    {
      name: "XM255 PRO",
      slug: "xm255-pro",
      thrust: "255 N",
      weight: "2 080 g",
      diameter: "122 mm",
      img: "/media/255/motor-turbojet-xm255-pro-8.png",
      summary: "Notre unité de propulsion avec la plus forte poussée et performance militaire pour les plateformes cibles et les drones tactiques.",
    },
  ];

  return (
    <SeoPageShell
      locale="fr"
      kicker="Catalogue de Moteurs PRO"
      title="Systèmes de Propulsion Turboréacteur pour Drones"
      description="Les moteurs JetsMunt PRO intègrent l'unité de contrôle (ECU), le logiciel de diagnostic et les capteurs de vol directement dans le matériel du moteur, éliminant les câbles et simplifiant l'installation sur les plateformes sans pilote."
      image="/media/photos/jetsmunt-galeria-motores-26.png"
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
              <div className="seo-card-media" style={{ position: "relative", aspectRatio: "4/3", width: "100%", background: "#050505" }}>
                <Image src={engine.img} alt={`${engine.name} turboréacteur compact professionnel`} fill style={{ objectFit: "cover" }} sizes="(max-width: 980px) 100vw, 50vw" />
              </div>
              <div className="seo-card-body" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>{engine.name}</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>{engine.summary}</p>
                
                <div className="product-specs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem", marginTop: "auto", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.02)", padding: "1rem 0.5rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.04)", transition: "background 0.3s ease" }}>
                    <svg style={{ width: "22px", height: "22px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "0.6rem" }} viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    <small style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>Poussée</small>
                    <strong style={{ color: "#fff", fontSize: "1.05rem" }}>{engine.thrust}</strong>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.02)", padding: "1rem 0.5rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.04)", transition: "background 0.3s ease" }}>
                    <svg style={{ width: "22px", height: "22px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "0.6rem" }} viewBox="0 0 24 24">
                      <rect x="4" y="8" width="16" height="12" rx="2" />
                      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                    </svg>
                    <small style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>Poids</small>
                    <strong style={{ color: "#fff", fontSize: "1.05rem" }}>{engine.weight}</strong>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.02)", padding: "1rem 0.5rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.04)", transition: "background 0.3s ease" }}>
                    <svg style={{ width: "22px", height: "22px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "0.6rem" }} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <polyline points="5 9 2 12 5 15" />
                      <polyline points="19 9 22 12 19 15" />
                    </svg>
                    <small style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>Diam.</small>
                    <strong style={{ color: "#fff", fontSize: "1.05rem" }}>{engine.diameter}</strong>
                  </div>
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

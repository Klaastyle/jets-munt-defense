import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Services de Propulsion et Développement UAV | JetsMunt",
  description:
    "Services d'intégration de turboréacteurs, électronique de télémétrie et ingénierie sur mesure OEM pour drones et plateformes de défense.",
  path: "/fr/services",
  keywords: ["services propulsion UAV", "integration turbine drone", "ingenierie defense aerospatiale"],
  locale: "fr_FR",
  languages: primaryAlternates("services"),
});

export default function FrServicesPage() {
  const serviceList = [
    {
      title: "Électronique et Télémétrie",
      slug: "electronique-telemetrie",
      kicker: "Systèmes de Contrôle FADEC",
      desc: "Conception et intégration d'unités de contrôle électronique (ECU), liaisons série pour pilote automatique, réseaux CAN Bus, fibre optique et enregistrement SD haute fréquence.",
      image: "/media/services/Gemini_Generated_Image_knhy4pknhy4pknhy.png",
    },
    {
      title: "Intégration UAV",
      slug: "integration-uav",
      kicker: "Ingenierie de Plateforme",
      desc: "Assistance technique d'intégration physique (circuits de carburant, alimentation, supports) pour l'installation de turboréacteurs sur drones tactiques et cibles.",
      image: "/media/services/Gemini_Generated_Image_xztybfxztybfxzty.png",
    },
    {
      title: "Ingénierie et Développement",
      slug: "ingenierie-developpement",
      kicker: "Solutions OEM Personnalisées",
      desc: "Support d'ingénierie complet depuis le concept initial et la simulation jusqu'à la fabrication in-house de prototypes, essais environnementaux et validation en vol.",
      image: "/media/services/Gemini_Generated_Image_saa7dvsaa7dvsaa7.png",
    },
  ];

  return (
    <SeoPageShell
      locale="fr"
      kicker="Services Spécialisés"
      title="Support d'Intégration et Développement de Propulsion UAV"
      description="Nous fournissons des services d'ingénierie aérospatiale avancés de qualité militaire couvrant le développement FADEC, la télémétrie, l'intégration physique et le prototypage de turbines."
      image="/media/services/Gemini_Generated_Image_xztybfxztybfxzty.png"
      breadcrumbPath="/fr/services"
      compact
    >
      <section className="section container">
        <div className="seo-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {serviceList.map((service) => (
            <article className="seo-product-card" key={service.slug} style={{ display: "flex", flexDirection: "column", height: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", overflow: "hidden" }}>
              <div className="seo-card-media" style={{ position: "relative", height: "200px", width: "100%" }}>
                <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 980px) 100vw, 33vw" />
              </div>
              <div className="seo-card-body" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{service.kicker}</span>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "0.8rem" }}>{service.title}</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>{service.desc}</p>
                
                <Link href={`/fr/services/${service.slug}`} className="btn btn-ghost" style={{ textAlign: "center", width: "100%", padding: "0.6rem" }}>
                  Voir les détails du service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SeoInternalLinks locale="fr" />
    </SeoPageShell>
  );
}

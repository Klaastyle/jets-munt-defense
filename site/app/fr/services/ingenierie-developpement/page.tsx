import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { primaryAlternates } from "../../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Ingénierie de Propulsion UAV sur Mesure | JetsMunt",
  description:
    "Développement de turbines personnalisées, optimisation de poussée, qualifications environnementales et ingénierie OEM pour programmes de défense.",
  path: "/fr/services/ingenierie-developpement",
  keywords: ["conception turbine sur mesure", "ingenierie defense UAV", "qualification environnementale", "propulsion sans ITAR"],
  locale: "fr_FR",
  languages: primaryAlternates("services-development"),
});

export default function FrEngineeringDevelopmentPage() {
  const capabilities = [
    "Optimisation de Poussée",
    "Adaptation Dimensionnelle",
    "Personnalisation de l'ECU",
    "Intégration de Télémétrie",
    "Fabrication de Prototypes",
    "Qualification Environnementale",
    "Support Essais en Vol",
    "Assistance Ingénierie OEM",
    "Validation Circuits Carburant",
    "Redondance Électronique de Vol",
    "Conception Nacelle Intégrée",
  ];

  const processSteps = [
    { num: "01", name: "Spécifications", desc: "Définition de l'enveloppe de vol, des contraintes dimensionnelles et profils de mission." },
    { num: "02", name: "Concept & Design", desc: "Simulations aérodynamiques, analyses thermodynamiques et modélisation 3D." },
    { num: "03", name: "Ingénierie de Détail", desc: "Développement mécanique, routage de cartes et programmation FADEC sur mesure." },
    { num: "04", name: "Prototypage Rapide", desc: "Usinage CNC in-house des compresseurs, turbines et chambres de combustion." },
    { num: "05", name: "Essais & Validation", desc: "Validation sur bancs d'essais et en chambres environnementales (thermique, altitude)." },
    { num: "06", name: "Vérification en Vol", desc: "Support technique sur site pour l'intégration finale et les premiers vols de test." },
  ];

  const areas = [
    { title: "Moteurs UAV Compacts", desc: "Adaptation et modifications rapides de nos turboréacteurs de série pour s'adapter à vos configurations." },
    { title: "Plateformes à Poussée accrue", desc: "Développement de nouvelles microturbines de poussée supérieure pour drones tactiques lourds." },
    { title: "Systèmes de Propulsion Intégrés", desc: "Packs de propulsion clés en main incluant le moteur, l'ECU, le réservoir tampon et la connectique." },
    { title: "Configurations Missions Spéciales", desc: "Propulseurs renforcés conçus pour tolérer des accélérations élevées et des redémarrages automatiques en altitude." },
  ];

  return (
    <SeoPageShell
      locale="fr"
      kicker="De la définition du concept jusqu'aux systèmes de propulsion prêts à voler."
      title="Ingénierie et Développement sur Mesure"
      description="JetsMunt collabore étroitement avec les fabricants OEM, centres d'essais aérospatiaux et forces de défense en apportant un support technique d'ingénierie directe pour concevoir des turbines spécifiques."
      image="/media/services/Gemini_Generated_Image_xztybfxztybfxzty.png"
      breadcrumbPath="/fr/services/ingenierie-developpement"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Capabilities & Areas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>
          
          {/* Areas of Development */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
              Domaines de Développement
            </h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {areas.map((area) => (
                <div key={area.title} style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "1.2rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.4rem" }}>{area.title}</h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities List */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
              Capacités d'Ingénierie
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Notre équipe d'ingénieurs maîtrise l'intégralité du cycle de conception et de validation des turbines. Nous accompagnons nos partenaires sur les axes suivants :
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
              {capabilities.map((cap) => (
                <div key={cap} style={{ fontSize: "0.85rem", color: "var(--text-soft)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent)" }}>✓</span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Development Cycle Process */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "2.5rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.5rem", color: "#fff", textAlign: "center" }}>
            Le Processus de Développement
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", textAlign: "center", marginBottom: "2.5rem" }}>
            Un cycle de développement aérospatiale complet intégré sous un même toit—de l'étude des contraintes à la validation finale en vol.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {processSteps.map((step) => (
              <div key={step.num} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "rgba(242, 106, 33, 0.2)", fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", lineHeight: 1 }}>{step.num}</span>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff" }}>{step.name}</h4>
                <p style={{ color: "var(--text-soft)", fontSize: "0.8rem", lineHeight: "1.5" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* European Supply Chain Info */}
        <div
          style={{
            background: "linear-gradient(180deg, rgba(242, 106, 33, 0.05) 0%, rgba(242, 106, 33, 0.01) 100%)",
            border: "1px solid rgba(242, 106, 33, 0.15)",
            borderRadius: "6px",
            padding: "2.5rem",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Souveraineté Technologique et Sécurité
            </span>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, margin: "0.5rem 0 1rem", color: "#fff" }}>
              Production européenne 100% ITAR-Free
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "0rem" }}>
              Tous nos programmes sur mesure s'appuient exclusivement sur une chaîne d'approvisionnement européenne certifiée. L'exclusion de composants d'origine américaine réglementés ITAR simplifie les procédures de transfert et d'exportation de matériel de défense pour nos clients gouvernementaux dans le monde.
            </p>
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="fr" />
    </SeoPageShell>
  );
}

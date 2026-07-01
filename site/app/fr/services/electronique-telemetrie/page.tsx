import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { primaryAlternates } from "../../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Électronique et Télémétrie UAV | JetsMunt",
  description:
    "Systèmes avancés de contrôle moteur électronique, calculateurs ECU redondants, télémétrie CAN Bus et intégration pilote automatique.",
  path: "/fr/services/electronique-telemetrie",
  keywords: ["ECU turboreacteur", "FADEC UAV", "telemetrie CAN Bus", "controle brushless FOC"],
  locale: "fr_FR",
  languages: primaryAlternates("services-telemetry"),
});

export default function FrElectronicsTelemetryPage() {
  const interfaces = [
    {
      title: "CAN Bus",
      desc: "Télémétrie et contrôle du moteur à grande vitesse et haute fiabilité. Compatible avec les réseaux aéronautiques et industriels.",
    },
    {
      title: "Liaison Fibre Optique (Optionnel)",
      desc: "Interface physique en option, totalement insensible aux interférences électromagnétiques (EMI) et au bruit radiofréquence.",
    },
    {
      title: "Protocole Série Ouvert",
      desc: "Liaison série UART standard facilitant l'intégration directe avec la majorité des ordinateurs de vol de pilote automatique.",
    },
    {
      title: "Expansion de Capteurs (I2C)",
      desc: "Permet de connecter des capteurs de mission auxiliaires (débitmètres externes, capteurs de pression dynamique).",
    },
    {
      title: "Enregistrement de Données SD",
      desc: "Enregistrement local continu à haute fréquence (50 Hz) de tous les paramètres de fonctionnement et anomalies de vol.",
    },
  ];

  const management = [
    { title: "Télémétrie Temps Réel", desc: "Supervision constante des tours/minute (tr/min), température d'échappement (EGT), pompe et tensions." },
    { title: "Fusion de Capteurs Intelligente", desc: "Traitement par filtre de Kalman intégré au micrologiciel pour des lectures de capteurs ultra-stables." },
    { title: "Compensation Environnementale", desc: "Ajustement automatique des cartes d'injection selon la pression barométrique, l'humidité et la température." },
    { title: "Fonctions de Protection", desc: "Arrêt préventif automatique du moteur en cas de coupure de flamme, surtension ou perte de liaison." },
    { title: "Contrôle Précis du Régime", desc: "Contrôle vectoriel de flux (FOC) pour démarreur et pompes brushless offrant une accélération linéaire." },
    { title: "Suivi de l'État Moteur", desc: "Analyse prédictive de l'usure mécanique et de la fatigue thermique calculée selon les cycles thermiques." },
  ];

  return (
    <SeoPageShell
      locale="fr"
      kicker="Intelligence de Propulsion Intégrée"
      title="Électronique Avancée et Télémétrie"
      description="Nos turboréacteurs intègrent une architecture FADEC avancée et propriétaire qui regroupe la puissance de calcul, les boucles de rétroaction et les capteurs sous un blindage EMI hermétique."
      image="/media/services/Gemini_Generated_Image_saa7dvsaa7dvsaa7.png"
      breadcrumbPath="/fr/services/electronique-telemetrie"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Architecture Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Architecture de Contrôle Intégrée
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              L'ECU JetsMunt agit comme le cœur intelligent du système de propulsion. Il gère la pompe à carburant et le démarreur brushless via des algorithmes de contrôle vectoriel tout en transmettant la télémétrie en temps réel au pilote automatique.
            </p>
            <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-soft)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[GCS]</span>
                  <span>↔ Station de contrôle au sol</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[Télémétrie]</span>
                  <span>↔ Liaison de données sans fil</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[Pilote Automatique]</span>
                  <span>↔ Ordinateur de navigation aéronef</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[JetsMunt ECU]</span>
                  <span>↔ FADEC et contrôle des actionneurs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interfaces */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Interfaces de Communication
            </h2>
            <div style={{ display: "grid", gap: "1.2rem" }}>
              {interfaces.map((inf) => (
                <div key={inf.title} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.2rem" }}>{inf.title}</h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.82rem", lineHeight: "1.5" }}>{inf.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engine Management Block */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "2.5rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.8rem", color: "#fff", textAlign: "center" }}>
            Gestion Avancée du Moteur
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {management.map((mng) => (
              <div key={mng.title}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.4rem" }}>{mng.title}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{mng.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Software Suite */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Logiciel de Configuration et Diagnostic
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.2rem" }}>
              Nous fournissons une suite graphique complète multiplateforme pour analyser la télémétrie, configurer les variables opérationnelles et mettre à niveau le micrologiciel.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>macOS</span>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>Linux</span>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>Windows</span>
            </div>
          </div>
          <div style={{ background: "rgba(242, 106, 33, 0.03)", border: "1px solid rgba(242, 106, 33, 0.15)", borderRadius: "6px", padding: "2rem", textAlign: "center" }}>
            <span style={{ fontSize: "2.5rem", color: "var(--accent)" }}>🛡️</span>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", margin: "1rem 0 0.5rem" }}>
              Systèmes Sans ITAR
            </h3>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Développement matériel et micrologiciel 100% européen pour simplifier les processus d'exportation.
            </p>
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="fr" />
    </SeoPageShell>
  );
}

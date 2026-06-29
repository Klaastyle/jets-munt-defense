import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { primaryAlternates } from "../../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Intégration de Moteurs sur UAV | JetsMunt",
  description:
    "Solutions d'intégration physique, interfaces de bus avioniques et support technique pour drones tactiques et cibles aériennes.",
  path: "/fr/services/integration-uav",
  keywords: ["integration UAV", "support moteur drone", "bus avionique", "propulsion aile fixe"],
  locale: "fr_FR",
  languages: primaryAlternates("services-integration"),
});

export default function FrUavIntegrationPage() {
  const interfaces = [
    { name: "CAN Bus", desc: "Compatible avec SAE J1939 pour une intégration simplifiée sur les réseaux d'avionique complexes." },
    { name: "Bus I2C", desc: "Conçu pour la communication directe avec les capteurs environnementaux et charges utiles." },
    { name: "Liaisons Série", desc: "Support des canaux RS232, RS422 et RS485 pour une télémétrie et des commandes redondantes." },
    { name: "PWM", desc: "Signal analogique traditionnel de largeur d'impulsion pour des commandes d'accélération de secours." },
    { name: "Carte SD", desc: "Interface physique pour la récupération des historiques de vol et la mise à jour simplifiée." },
  ];

  const applications = [
    { title: "UAV à Voilure Fixe", desc: "Intégration aérodynamique optimisée dans des nacelles internes ou externes pour vols longue distance." },
    { title: "Drones Cibles", desc: "Supports de fixation haute résistance conçus pour tolérer des catapultes pneumatiques ou de fusées." },
    { title: "Systèmes Lancés du Sol", desc: "Intégration dans des lanceurs terrestres et missiles tactiques avec démarrage rapide en moins de 30 secondes." },
    { title: "UAV VTOL / Hybrides", desc: "Support pour les configurations de poussée vectorielle et transition de vol vertical à horizontal." },
    { title: "Munitions Rôdeuses", desc: "Architectures ultra-légères et compactes optimisées pour un rapport poids/puissance maximal à coût réduit." },
    { title: "Missions Spéciales", desc: "Solutions personnalisées qualifiées pour opérer sous des environnements de température ou d'humidité extrêmes." },
  ];

  const benefits = [
    { title: "Temps d'Intégration Réduit", desc: "Grâce à des interfaces standardisées et des logiciels d'assistance plug & play." },
    { title: "Performances Optimisées", desc: "Maximise le rapport poussée/poids et optimise la consommation spécifique (SFC)." },
    { title: "Fiabilité de Mission", desc: "Systèmes électroniques et mécaniques validés pour des applications militaires critiques." },
    { title: "Rentabilité", desc: "Réduit les investissements initiaux de développement et optimise le coût du cycle de vie." },
    { title: "Support Global", desc: "Assistance technique directe de nos ingénieurs lors des essais au sol et en vol dans le monde entier." },
  ];

  return (
    <SeoPageShell
      locale="fr"
      kicker="Intégration Transparente. Performances Maximales."
      title="Capacidades de Intégration en UAV"
      description="Les turboréacteurs JetsMunt sont optimisés pour une intégration physique et électrique rapide, limitant le poids du câblage et simplifiant les interfaces."
      image="/media/capabilities/uav-integration.png"
      breadcrumbPath="/fr/services/integration-uav"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Applications Grid */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff", textAlign: "center" }}>
            Conçu pour Différentes Plateformes
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {applications.map((app) => (
              <div key={app.title} style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.5rem" }}>{app.title}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Architecture */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Architecture d'Intégration Classique
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              Notre architecture limite la connectivité physique à seulement l'alimentation et un bus de communication (CAN ou RS485). L'ECU pilote directement les solénoïdes, la bougie d'allumage et la pompe brushless, isolant la charge de propulsion du calculateur de vol.
            </p>
            <div style={{ padding: "1.2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", fontSize: "0.82rem", color: "var(--text-soft)" }}>
              <strong>Actionneurs Pilotés par l'ECU :</strong>
              <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem", display: "grid", gap: "0.3rem" }}>
                <li>• Pompe à Carburant Brushless Intelligente</li>
                <li>• Électrovanne de Carburant à Action Rapide</li>
                <li>• Système d'Allumage Haute Puissance</li>
                <li>• Capteurs Environnementaux Intégrés</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Interfaces de Contrôle de Vol
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {interfaces.map((inf) => (
                <div key={inf.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem" }}>
                  <strong style={{ color: "#fff", fontSize: "0.9rem", whiteSpace: "nowrap" }}>{inf.name}</strong>
                  <span style={{ color: "var(--text-soft)", fontSize: "0.85rem", textAlign: "right" }}>{inf.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
            Bénéfices Clés pour les Programmes
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {benefits.map((b) => (
              <div key={b.title}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--accent-2)", marginBottom: "0.4rem", textTransform: "uppercase" }}>{b.title}</h4>
                <p style={{ color: "var(--text-soft)", fontSize: "0.82rem", lineHeight: "1.5" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="fr" />
    </SeoPageShell>
  );
}

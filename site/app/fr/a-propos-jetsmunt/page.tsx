import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "À Propos de JetsMunt | Plus de Trois Décennies d'Expertise en Turbines",
  description:
    "Découvrez l'histoire, la chronologie et les capacités de conception et de fabrication personnalisées de turboréacteurs compacts chez JetsMunt.",
  path: "/fr/a-propos-jetsmunt",
  image: "/media/capabilities/manufacturing-spain.png",
  keywords: ["a propos de JetsMunt", "histoire JetsMunt", "ingenierie aerospatiale", "fabricant turboreacteur"],
  locale: "fr_FR",
  languages: primaryAlternates("about"),
});

export default function AProposJetsMuntPage() {
  const timelineItems = [
    { year: "1994", title: "Début de la Recherche", desc: "Début de la recherche technique et des activités expérimentales sur la technologie des microturbines." },
    { year: "1996", title: "Premier Vol Réussi", desc: "Premier vol réussi propulsé par un turboréacteur compact développé en interne." },
    { year: "1998", title: "Fondation de l'Entreprise", desc: "Fondation officielle de JetsMunt pour la commercialisation et le développement continu de microturbines." },
    { year: "2025+", title: "Leader de Propulsion UAV", desc: "Plus de 6 000 moteurs livrés dans le monde avec une solide expérience opérationnelle sur les plateformes de défense." },
  ];

  const stats = [
    { value: "98 N - 255 N", label: "Gamme de poussée" },
    { value: "50+ Pays", label: "Présence mondiale" },
    { value: "30+ Ans", label: "Expérience technique" },
  ];

  return (
    <SeoPageShell
      kicker="À Propos"
      title="Trois décennies d'innovation en propulsion turbojet compacte."
      description="JetsMunt est une société d'ingénierie aérospatiale espagnole spécialisée dans la conception, le développement et la fabrication de turboréacteurs avancés pour plateformes autonomes modernes."
      image="/media/capabilities/manufacturing-spain.png"
      breadcrumbPath="/fr/a-propos-jetsmunt"
      locale="fr"
    >
      <section className="section container" style={{ paddingBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Notre Parcours
            </h2>
            <p style={{ color: "var(--text-soft)", marginBottom: "1.2rem", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Les origines de JetsMunt remontent à 1994, année du lancement des premières recherches théoriques et expérimentales sur la technologie des microturbines. La validation pratique en vol a été obtenue en 1996, jetant les bases de la création officielle de la société en 1998.
            </p>
            <p style={{ color: "var(--text-soft)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Aujourd'hui, JetsMunt développe des solutions de propulsion complètes et robustes, en intégrant sous un même toit la conception aérodynamique, l'analyse thermodynamique, l'ECU propriétaire et le logiciel embarqué de temps réel en Espagne.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Expérience Opérationnelle
            </h2>
            <p style={{ color: "var(--text-soft)", marginBottom: "1.2rem", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Avec plus de 6 000 moteurs livrés à travers le monde, nos turbines équipent de nombreuses plateformes de défense et UAV commerciaux dans plus de 50 pays. La robustesse et la fiabilité de nos systèmes proviennent de processus rigoureux sur nos bancs d'essais internes.
            </p>
            <p style={{ color: "var(--text-soft)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Grâce à notre chaîne d'approvisionnement 100% européenne libre de toute réglementation ITAR, nous offrons à nos partenaires internationaux des solutions d'intégration fiables et des délais de livraison courts.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ margin: "4rem 0" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2.5rem", color: "#fff", textAlign: "center" }}>
            Grandes Étapes
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {timelineItems.map((item) => (
              <div
                key={item.year}
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
                  border: "1px solid var(--line-soft, rgba(255,255,255,0.08))",
                  borderRadius: "6px",
                  padding: "1.5rem",
                  transition: "border-color 0.2s ease",
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--accent)", fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", marginBottom: "0.5rem" }}>
                  {item.year}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.5" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            background: "rgba(242, 106, 33, 0.04)",
            border: "1px solid rgba(242, 106, 33, 0.15)",
            borderRadius: "6px",
            padding: "2.5rem 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", fontFamily: "var(--font-archivo, 'Archivo', sans-serif)" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-2)", marginTop: "0.4rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SeoPageShell>
  );
}

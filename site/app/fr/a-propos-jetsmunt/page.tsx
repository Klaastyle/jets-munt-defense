import type { Metadata } from "next";
import Image from "next/image";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "À Propos de JetsMunt | Plus de Trois Décennies d'Expertise en Turbines",
  description:
    "Découvrez l'histoire, la chronologie et les capacités de conception et de fabrication personnalisées de turboréacteurs compacts chez JetsMunt.",
  path: "/fr/a-propos-jetsmunt",
  image: "/about-hero.png",
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
    { value: "98 N - 500 N", label: "Gamme de poussée" },
    { value: "50+ Pays", label: "Présence mondiale" },
    { value: "30+ Ans", label: "Expérience technique" },
  ];

  return (
    <SeoPageShell
      kicker="À Propos"
      title="Trois décennies d'innovation en propulsion turbojet compacte."
      description="JetsMunt is a Spanish aerospace engineering company specialized in the design, development, and manufacturing of advanced turbojet systems for modern unmanned platforms."
      image="/about-hero.png"
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {timelineItems.map((item, index) => (
              <div key={item.year} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                {/* Timeline Line & Dot */}
                <div style={{ display: "flex", alignItems: "center", width: "100%", marginBottom: "1.5rem" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 0 4px rgba(242,106,33,0.15)", flexShrink: 0 }}></div>
                  <div style={{ height: "2px", flexGrow: 1, marginLeft: "1rem", background: index === timelineItems.length - 1 ? "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)" : "rgba(255,255,255,0.15)" }}></div>
                </div>
                {/* Timeline Card */}
                <div
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.03), transparent)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderTop: "3px solid var(--accent)",
                    borderRadius: "6px",
                    padding: "1.5rem",
                    flexGrow: 1
                  }}
                >
                  <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-soft)", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Galerie des Installations et du Développement */}
        <div style={{ margin: "4rem 0" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2rem", color: "#fff", textAlign: "center" }}>
            Nos Installations et Développement
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { src: "/assembly-facility.png", alt: "Installations d'assemblage JetsMunt" },
              { src: "/media/about/Gemini_Generated_Image_mt2eermt2eermt2e.png", alt: "Conception et ingénierie des aubes et rotors" },
              { src: "/media/about/Gemini_Generated_Image_n2rnkfn2rnkfn2rn.png", alt: "Cellule de banc d'essai de turbine" },
              { src: "/media/about/Gemini_Generated_Image_vnxrcxvnxrcxvnxr.png", alt: "Laboratoire de contrôle qualité et métrologie" },
            ].map((img, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  height: "220px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1rem",
                  }}
                >
                  <p style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>{img.alt}</p>
                </div>
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

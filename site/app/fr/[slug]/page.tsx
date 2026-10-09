/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { engines, localizedSolutionPages, solutionAlternates } from "../../lib/seo-data";

type LocalizedSolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return localizedSolutionPages.map((page) => ({ slug: page.fr.slug }));
}

export async function generateMetadata({ params }: LocalizedSolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = localizedSolutionPages.find((page) => page.fr.slug === slug);

  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: `${entry.fr.title} | JetsMunt Defense Propulsion`,
    description: entry.fr.description,
    path: `/fr/${entry.fr.slug}`,
    image: entry.fr.image,
    keywords: entry.fr.keywords,
    locale: "fr_FR",
    languages: solutionAlternates(entry.baseSlug),
  });
}

export default async function FrSolutionPage({ params }: LocalizedSolutionPageProps) {
  const { slug } = await params;
  const entry = localizedSolutionPages.find((page) => page.fr.slug === slug);

  if (!entry) {
    notFound();
  }

  const page = entry.fr;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": page.title,
        "description": page.description,
        "provider": {
          "@type": "Organization",
          "name": "JetsMunt",
          "url": "https://www.jetsmuntdefense.com"
        },
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Systèmes de Propulsion Microturboréacteur",
          "itemListElement": engines.map((e) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": e.name,
              "description": `${e.thrust} moteur turboréacteur compact`
            }
          }))
        }
      }
    ]
  };

  return (
    <SeoPageShell locale="fr"
      kicker={page.label}
      title={`${page.title} pour plateformes aérospatiales compactes.`}
      description={page.description}
      image={page.image}
      primaryHref="/fr/contact"
      primaryLabel="Consulter l'ingénierie de propulsion"
      secondaryHref="/fr/moteurs"
      secondaryLabel="Voir le catalogue de moteurs"
      breadcrumbPath={`/fr/${page.slug}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section container seo-detail-grid">
        <div className="seo-copy-block">
          <h2>Architecture d'Ingénierie et Exigences de Mission</h2>
          <p>
            JetsMunt aborde la propulsion microturboréacteur compacte comme un écosystème d'ingénierie complet :
            matériel moteur, ECU numérique intégrée, télémétrie haute fréquence, gestion thermique, contraintes d'enveloppe
            et support de cycle de vie global. Notre objectif est de dérisquer l'intégration dès les premières phases du programme.
          </p>
          <ul>
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/fr/contact" className="btn btn-primary">
              Consulter l'ingénierie de propulsion
            </Link>
            <Link href="/fr/moteurs" className="btn btn-ghost">
              Explorer les moteurs
            </Link>
          </div>
        </div>
        <div className="seo-spec-panel">
          <p className="section-label">Classes de Propulsion Compatibles</p>
          <dl>
            {engines.map((engine) => (
              <div key={engine.slug}>
                <dt><Link href={`/fr/produits/${engine.slug}`}>{engine.name}</Link></dt>
                <dd>{engine.thrust}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="seo-inline-media">
          <Image src={page.image} alt={page.title} fill sizes="(max-width: 980px) 100vw, 45vw" />
        </div>
      </section>

      {/* Piliers stratégiques B2B pour programmes de défense et drones */}
      <section className="section container" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "3rem" }}>
        <p className="section-label" style={{ textAlign: "center", marginBottom: "0.5rem" }}>Avantages Stratégiques B2B</p>
        <h2 className="heading-md" style={{ textAlign: "center", marginBottom: "2.5rem" }}>Pourquoi les Intégrateurs Aérospatiaux Choisissent JetsMunt</h2>
        <div className="seo-card-grid three">
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>Souveraineté 100% Sans ITAR</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Conçu et fabriqué intégralement en Espagne au sein de l'Union Européenne. Évitez les contraintes administratives et les délais d'exportation ITAR américains grâce à des systèmes souverains européens.
            </p>
          </div>
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>Intégration Directe CAO & Avionique</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Accès direct aux modèles 3D (.STEP), gabarits d'enveloppe et documentation de protocole. Télémétrie standard bus CAN et série pour une connexion immédiate aux pilotes automatiques de bord.
            </p>
          </div>
          <div className="seo-info-card">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--accent-2)" }}>Personnalisation Programmes OEM</h3>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Nous collaborons directement avec les ingénieurs de plateformes pour adapter les points d'ancrage, séquences de démarrage, générateurs et profils multi-carburants aux exigences exactes de la mission.
            </p>
          </div>
        </div>
      </section>

      <SeoInternalLinks locale="fr" />
    </SeoPageShell>
  );
}

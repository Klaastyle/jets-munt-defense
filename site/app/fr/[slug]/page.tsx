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
    title: `${entry.fr.title} | JetsMunt`,
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

  return (
    <SeoPageShell locale="fr"
      kicker={page.label}
      title={`${page.title} pour plateformes aerospatiales compactes.`}
      description={page.description}
      image={page.image}
      primaryHref="/fr/contact"
      primaryLabel="Discuter les exigences"
      secondaryHref="/fr/moteurs"
      secondaryLabel="Voir les moteurs"
      breadcrumbPath={`/fr/${page.slug}`}
    >
      <section className="section container seo-detail-grid">
        <div className="seo-copy-block">
          <h2>Construit autour des exigences programme.</h2>
          <p>
            JetsMunt aborde la propulsion turbojet compacte comme un systeme d'ingenierie:
            moteur, ECU, telemetrie, contraintes d'installation, route d'essais et support technique.
          </p>
          <ul>
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link href="/fr/contact" className="btn btn-primary">
            Discuter les exigences
          </Link>
        </div>
        <div className="seo-spec-panel">
          <p className="section-label">Classes moteur pertinentes</p>
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
      <SeoInternalLinks locale="fr" />
    </SeoPageShell>
  );
}

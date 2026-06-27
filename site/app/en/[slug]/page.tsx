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
  return localizedSolutionPages.map((page) => ({ slug: page.en.slug }));
}

export async function generateMetadata({ params }: LocalizedSolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = localizedSolutionPages.find((page) => page.en.slug === slug);

  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: `${entry.en.title} | JetsMunt`,
    description: entry.en.description,
    path: `/en/${entry.en.slug}`,
    image: entry.en.image,
    keywords: entry.en.keywords,
    locale: "en_US",
    languages: solutionAlternates(entry.baseSlug),
  });
}

export default async function EnSolutionPage({ params }: LocalizedSolutionPageProps) {
  const { slug } = await params;
  const entry = localizedSolutionPages.find((page) => page.en.slug === slug);

  if (!entry) {
    notFound();
  }

  const page = entry.en;

  return (
    <SeoPageShell locale="en"
      kicker={page.label}
      title={`${page.title} for compact aerospace platforms.`}
      description={page.description}
      image={page.image}
      primaryHref="/en/contact"
      primaryLabel="Discuss requirements"
      secondaryHref="/en/engines"
      secondaryLabel="View engines"
      breadcrumbPath={`/en/${page.slug}`}
    >
      <section className="section container seo-detail-grid">
        <div className="seo-copy-block">
          <h2>Built around program requirements.</h2>
          <p>
            JetsMunt works with compact turbojet propulsion as an engineering system: engine hardware,
            ECU, telemetry, installation constraints, testing route and technical support.
          </p>
          <ul>
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link href="/en/contact" className="btn btn-primary">
            Discuss requirements
          </Link>
        </div>
        <div className="seo-spec-panel">
          <p className="section-label">Relevant engine classes</p>
          <dl>
            {engines.map((engine) => (
              <div key={engine.slug}>
                <dt><Link href={`/en/products/${engine.slug}`}>{engine.name}</Link></dt>
                <dd>{engine.thrust}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="seo-inline-media">
          <Image src={page.image} alt={page.title} fill sizes="(max-width: 980px) 100vw, 45vw" />
        </div>
      </section>
      <SeoInternalLinks locale="en" />
    </SeoPageShell>
  );
}

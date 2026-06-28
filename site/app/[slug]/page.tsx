import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { engines, solutionAlternates, localizedSolutionPages } from "../lib/seo-data";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...localizedSolutionPages.map((page) => ({ slug: page.es.slug })),
  ];
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;


  const basePage = localizedSolutionPages.find((item) => item.es.slug === slug);
  
  if (!basePage) {
    return {};
  }
  
  const page = basePage.es;

  return buildMetadata({
    title: `${page.title} | JetsMunt`,
    description: page.description,
    path: `/${page.slug}`,
    image: page.image,
    keywords: page.keywords,
    locale: "es_ES",
    languages: solutionAlternates(basePage.baseSlug),
  });
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;


  const basePage = localizedSolutionPages.find((item) => item.es.slug === slug);

  if (!basePage) {
    notFound();
  }
  
  const page = basePage.es;

  return (
    <SeoPageShell
      kicker={page.label}
      title={`${page.title} para plataformas aeroespaciales compactas.`}
      description={page.description}
      image={page.image}
      breadcrumbPath={`/${page.slug}`}
    >
      <section className="section container seo-detail-grid">
        <div className="seo-copy-block">
          <h2>Adaptado a los requisitos del programa.</h2>
          <p>
            JetsMunt trabaja con la propulsión turbojet compacta como sistema de ingeniería: motor,
            ECU, telemetría, restricciones de instalación, ruta de ensayo y soporte técnico. El objetivo
            es ayudar a los equipos a reducir el riesgo de propulsión antes de que la plataforma llegue a validación.
          </p>
          <ul>
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link href="/contacto" className="btn btn-primary">
            Comentar requisitos
          </Link>
        </div>
        <div className="seo-spec-panel">
          <p className="section-label">Clases de motor relevantes</p>
          <dl>
            {engines.map((engine) => (
              <div key={engine.slug}>
                <dt><Link href={`/products/${engine.slug}`}>{engine.name}</Link></dt>
                <dd>{engine.thrust}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="seo-inline-media">
          <Image src={page.image} alt={page.title} fill sizes="(max-width: 980px) 100vw, 45vw" />
        </div>
      </section>
      <SeoInternalLinks />
    </SeoPageShell>
  );
}

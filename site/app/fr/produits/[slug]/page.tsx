/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { engines, productAlternates } from "../../../lib/seo-data";

type EnginePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return engines.map((engine) => ({ slug: engine.slug }));
}

export async function generateMetadata({ params }: EnginePageProps): Promise<Metadata> {
  const { slug } = await params;
  const engine = engines.find((item) => item.slug === slug);
  if (!engine) return {};
  return buildMetadata({
    title: `${engine.name} Moteur Turbojet Compact | JetsMunt`,
    description: `${engine.name} moteur turbojet compact avec ${engine.thrust} de poussée pour programmes UAV et drones cibles.`,
    path: `/fr/produits/${engine.slug}`,
    image: engine.img,
    locale: "fr_FR",
    languages: productAlternates(engine.slug),
  });
}

export default async function FrProductPage({ params }: EnginePageProps) {
  const { slug } = await params;
  const engine = engines.find((item) => item.slug === slug);
  if (!engine) notFound();

  return (
    <SeoPageShell locale="fr"
      kicker="Moteur turbojet compact"
      title={`Classe de propulsion ${engine.name}.`}
      description={engine.summaryFr || engine.summary}
      image={engine.img}
      primaryHref="/fr/contact"
      primaryLabel="Discuter ce moteur"
      secondaryHref="/fr/moteurs"
      secondaryLabel="Retour aux moteurs"
      breadcrumbPath={`/fr/produits/${engine.slug}`}
    >
      <section className="section container seo-detail-grid">
        <div className="seo-spec-panel">
          <p className="section-label">Spécifications principales</p>
          <dl>
            <div><dt>Poussée</dt><dd>{engine.thrust}</dd></div>
            <div><dt>Poids</dt><dd>{engine.weightFr || engine.weight}</dd></div>
            <div><dt>Diamètre</dt><dd>{engine.diameterFr || engine.diameter}</dd></div>
            <div><dt>Système</dt><dd>Moteur, ECU et support télémétrie</dd></div>
          </dl>
        </div>
        <div className="seo-copy-block">
          <h2>Conçu pour l'intégration, pas seulement pour le catalogue.</h2>
          <p>Le {engine.name} s'adresse aux équipes qui évaluent une propulsion turbojet compacte selon l'enveloppe de l'aéronef, l'architecture de contrôle, les contraintes d'installation et la route de validation.</p>
          <ul>
            <li>Études de propulsion pour UAV et plateformes cibles.</li>
            <li>Planification de l'intégration ECU, capteurs et télémétrie.</li>
            <li>Support de validation au banc et préparation des essais en vol.</li>
          </ul>
          <Link href="/fr/contact" className="btn btn-primary">Discuter ce moteur</Link>
        </div>
        <div className="seo-inline-media">
          <Image src={engine.img} alt={`${engine.name} moteur turbojet compact`} fill sizes="(max-width: 980px) 100vw, 45vw" />
        </div>
      </section>
    </SeoPageShell>
  );
}

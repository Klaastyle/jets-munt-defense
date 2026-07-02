import Image from "next/image";
import Link from "next/link";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { engines } from "../../lib/seo-data";

export default function OldEnginesPage() {
  return (
    <SeoPageShell
      kicker="Catálogo Original"
      title="Motores turbojet compactos (Versión Antigua)"
      description="Los motores JetsMunt XM se seleccionan por empuje, masa, diámetro, integración ECU y requisitos de validacion para plataformas aeroespaciales compactas."
      image="/media/turbina/m166ts-2.jpg"
      breadcrumbPath="/motores/otros"
      compact
    >
      <section className="section container">
        <div className="seo-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {engines.map((engine) => (
            <article className="seo-product-card" key={engine.slug} style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', overflow: 'hidden' }}>
              <div className="seo-card-media" style={{ position: 'relative', aspectRatio: '4/3', width: '100%', background: '#050505' }}>
                <Image src={engine.img} alt={`${engine.name} motor turbojet compacto`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 980px) 100vw, 25vw" />
              </div>
              <div className="seo-card-body" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>{engine.name}</h2>
                <p style={{ color: 'var(--text-soft)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{engine.summaryEs || engine.summary}</p>
                <div className="product-specs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem', marginTop: 'auto', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <small style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Empuje</small>
                    <strong style={{ color: '#fff', fontSize: '1.05rem' }}>{engine.thrust}</strong>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <small style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Peso</small>
                    <strong style={{ color: '#fff', fontSize: '1.05rem' }}>{engine.weightEs || engine.weight}</strong>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <small style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Diámetro</small>
                    <strong style={{ color: '#fff', fontSize: '1.05rem' }}>{engine.diameterEs || engine.diameter}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SeoInternalLinks locale="es" />
    </SeoPageShell>
  );
}

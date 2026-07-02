import Image from "next/image";
import Link from "next/link";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { engines } from "../../lib/seo-data";

export default function OldEnginesPage() {
  return (
    <SeoPageShell
      kicker="Catálogo"
      title="Otros motores"
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
        
        <div style={{ marginTop: '5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>Tabla Comparativa</h3>
          <p style={{ color: 'var(--text-soft)', fontSize: '1rem' }}>Comparación técnica de todos los motores de las series NG y PRO.</p>
        </div>
        <div style={{ overflowX: 'auto', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
                <th style={{ padding: '1rem', color: '#fff', fontWeight: 600 }}>Modelo</th>
                <th style={{ padding: '1rem', color: '#fff', fontWeight: 600 }}>Empuje</th>
                <th style={{ padding: '1rem', color: '#fff', fontWeight: 600 }}>Peso</th>
                <th style={{ padding: '1rem', color: '#fff', fontWeight: 600 }}>Diámetro</th>
                <th style={{ padding: '1rem', color: '#fff', fontWeight: 600 }}></th>
              </tr>
            </thead>
            <tbody>
              {[...engines, { name: "XM215 PRO", slug: "xm215-pro", thrust: "215 N", weight: "1.820 g", diameter: "73,9 mm" }, { name: "XM255 PRO", slug: "xm255-pro", thrust: "255 N", weight: "2.080 g", diameter: "122 mm" }].map((engine, index, array) => (
                <tr key={engine.slug} style={{ borderBottom: index === array.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.04)', transition: 'background 0.2s ease', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: '1rem', color: 'var(--accent)', fontWeight: 600 }}>{engine.name}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-soft)' }}>{engine.thrust}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-soft)' }}>{engine.weightEs || engine.weight}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-soft)' }}>{engine.diameterEs || engine.diameter}</td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <Link href={engine.slug.includes('pro') ? `/motores/${engine.slug}` : "/contacto"} style={{ fontSize: '0.8rem', color: '#fff', textDecoration: 'underline', opacity: 0.7 }}>
                      {engine.slug.includes('pro') ? 'Ver detalles' : 'Consultar'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <SeoInternalLinks locale="es" />
    </SeoPageShell>
  );
}

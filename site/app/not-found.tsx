import Link from "next/link";
import Nav from "./components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background glow effects */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(230, 92, 0, 0.08) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
          <h1 style={{
            fontSize: 'clamp(6rem, 15vw, 10rem)',
            fontWeight: 900,
            lineHeight: 1,
            margin: 0,
            background: 'linear-gradient(135deg, #fff 0%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.05em'
          }}>
            404
          </h1>
          
          <div style={{
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 800,
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            marginTop: '-0.5rem'
          }}>
            Página no encontrada
          </div>

          <p style={{
            color: 'var(--text-soft)',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            marginBottom: '3rem'
          }}>
            Lo sentimos, no hemos podido encontrar la página que buscas. 
            Es posible que el enlace sea incorrecto o que la página haya sido movida.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary" style={{ minWidth: '200px', display: 'inline-flex', justifyContent: 'center' }}>
              Volver al Inicio
            </Link>
            <Link href="/motores" className="btn btn-outline" style={{ minWidth: '200px', display: 'inline-flex', justifyContent: 'center' }}>
              Ver Catálogo de Motores
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

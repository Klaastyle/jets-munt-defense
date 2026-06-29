import type { Metadata } from "next";
import { SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Sobre JetsMunt | Más de Tres Décadas de Experiencia en Turbinas",
  description:
    "Conoce la historia, trayectoria y capacidades de desarrollo y fabricación de sistemas de propulsión turbojet compactos de JetsMunt.",
  path: "/sobre-jetsmunt",
  image: "/media/capabilities/manufacturing-spain.png",
  keywords: ["sobre JetsMunt", "historia JetsMunt", "ingenieria aeroespacial", "fabricante turbojet"],
  locale: "es_ES",
  languages: primaryAlternates("about"),
});

export default function SobreJetsMuntPage() {
  const timelineItems = [
    { year: "1994", title: "Inicio de Investigación", desc: "Comienzan las actividades de investigación técnica en tecnología de turbinas compactas." },
    { year: "1996", title: "Primer Vuelo Exitoso", desc: "Se logra realizar con éxito el primer vuelo propulsado por una turbina de desarrollo propio." },
    { year: "1998", title: "Fundación de la Empresa", desc: "Se constituye formalmente JetsMunt para la comercialización y desarrollo continuo de motores." },
    { year: "2025+", title: "Líder de Propulsión UAV", desc: "Más de 6.000 motores entregados en todo el mundo con operaciones y experiencia global acumulada." },
  ];

  const stats = [
    { value: "98 N - 255 N", label: "Rango de empuje" },
    { value: "50+ Países", label: "Presencia global" },
    { value: "30+ Años", label: "Experiencia técnica" },
  ];

  return (
    <SeoPageShell
      kicker="Sobre Nosotros"
      title="Tres décadas de innovación en propulsión turbojet compacta."
      description="JetsMunt es una empresa de ingeniería aeroespacial española dedicada al diseño, desarrollo y fabricación de sistemas de propulsión turbojet avanzados para plataformas no tripuladas modernas."
      image="/media/capabilities/manufacturing-spain.png"
      breadcrumbPath="/sobre-jetsmunt"
      locale="es"
    >
      <section className="section container" style={{ paddingBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Nuestra Trayectoria
            </h2>
            <p style={{ color: "var(--text-soft)", marginBottom: "1.2rem", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Los orígenes de JetsMunt se remontan a 1994, cuando comenzaron los primeros desarrollos e investigaciones teóricas y experimentales en la tecnología de microturbinas. La validación práctica en vuelo se alcanzó en 1996, sentando las bases para la posterior creación formal de la compañía en 1998.
            </p>
            <p style={{ color: "var(--text-soft)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Hoy en día, JetsMunt desarrolla soluciones de propulsión completas y robustas, integrando de extremo a extremo el diseño aerodinámico, el análisis termodinámico, el desarrollo de control electrónico (ECU) y software embebido de tiempo real, todo bajo un mismo techo en nuestras instalaciones de España.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Experiencia Operativa
            </h2>
            <p style={{ color: "var(--text-soft)", marginBottom: "1.2rem", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Con más de 6.000 motores entregados en todo el mundo, nuestras turbinas operan en diversas plataformas de defensa y UAV comerciales en más de 50 países. La robustez y fiabilidad de nuestros sistemas es el resultado de un riguroso proceso de pruebas y validaciones internas en bancos de ensayo especializados.
            </p>
            <p style={{ color: "var(--text-soft)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Al contar con una cadena de suministro íntegramente europea y libre de regulaciones ITAR, ofrecemos a nuestros clientes internacionales soluciones seguras, fiables y con cortos plazos de entrega.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ margin: "4rem 0" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2.5rem", color: "#fff", textAlign: "center" }}>
            Hitos Clave
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

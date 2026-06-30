import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Ingeniería y Desarrollo a Medida UAV | JetsMunt",
  description:
    "Desarrollo de propulsión a medida, optimización de empuje, calificación ambiental y soporte OEM para programas de defensa.",
  path: "/servicios/ingenieria-desarrollo",
  keywords: ["ingenieria aeroespacial", "desarrollo propulsión a medida", "calificacion ambiental", "propulsión ITAR-free"],
  locale: "es_ES",
  languages: primaryAlternates("services-development"),
});

export default function EngineeringDevelopmentPage() {
  const capabilities = [
    "Optimización de Empuje",
    "Adaptación Dimensional",
    "Personalización de ECU",
    "Integración de Telemetría",
    "Fabricación de Prototipos",
    "Calificación Ambiental",
    "Soporte de Pruebas de Vuelo",
    "Asistencia de Ingeniería OEM",
    "Validación de Sistemas de Combustible",
    "Redundancia de Electrónica de Vuelo",
    "Diseño de Góndolas Integradas",
  ];

  const processSteps = [
    { num: "01", name: "Requisitos de Vuelo", desc: "Definición de envolvente, restricciones físicas y perfiles de misión del UAV." },
    { num: "02", name: "Concepto y Diseño", desc: "Simulación termodinámica y modelado 3D preliminar del turborreactor." },
    { num: "03", name: "Ingeniería de Detalle", desc: "Desarrollo mecánico, aerodinámico y de tarjetas electrónicas a medida." },
    { num: "04", name: "Fabricación de Prototipos", desc: "Mecanizado CNC in-house de álabes, rotores y cámaras de combustión." },
    { num: "05", name: "Calificación y Ensayos", desc: "Validación en bancos de pruebas estáticos y cámaras climáticas." },
    { num: "06", name: "Integración en Vuelo", desc: "Acompañamiento técnico directo durante los primeros vuelos de prueba." },
  ];

  const areas = [
    { title: "Motores UAV Compactos", desc: "Adaptación y modificación rápida de nuestras plataformas de propulsión ya existentes." },
    { title: "Plataformas de Empuje Incrementado", desc: "Desarrollo de nuevas configuraciones de microturbinas optimizadas para mayores perfiles de empuje." },
    { title: "Sistemas de Propulsión Integrados", desc: "Soluciones completas 'llave en mano' que engloban motor, electrónica y telemetría en un solo kit." },
    { title: "Misiones Especiales", desc: "Configuraciones avanzadas de propulsión preparadas para tolerar fuerzas G extremas y reencendidos a gran altitud." },
  ];

  return (
    <SeoPageShell
      kicker="Desde la definición del concepto hasta sistemas listos para el vuelo."
      title="Ingeniería y Desarrollo a Medida"
      description="JetsMunt colabora con fabricantes OEM, centros de investigación aeroespacial y fuerzas de defensa proporcionando soporte de ingeniería directo para adaptar o desarrollar turborreactores específicos para misiones críticas."
      image="/media/services/Gemini_Generated_Image_xztybfxztybfxzty.png"
      breadcrumbPath="/servicios/ingenieria-desarrollo"
      locale="es"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Capabilities & Areas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>
          
          {/* Areas of Development */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
              Áreas de Desarrollo Disponibles
            </h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {areas.map((area) => (
                <div key={area.title} style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "1.2rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.4rem" }}>{area.title}</h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities List */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
              Capacidades de Desarrollo
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Nuestro equipo interno de ingeniería y producción domina todo el ciclo de diseño y validación de turborreactores compactos, ofreciendo capacidades específicas como:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
              {capabilities.map((cap) => (
                <div key={cap} style={{ fontSize: "0.85rem", color: "var(--text-soft)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent)" }}>✓</span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Development Cycle Process */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "2.5rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.5rem", color: "#fff", textAlign: "center" }}>
            El Proceso de Desarrollo
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", textAlign: "center", marginBottom: "2.5rem" }}>
            Un ciclo de desarrollo aeroespacial integrado bajo un mismo techo: de los requisitos iniciales a las soluciones probadas en vuelo.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {processSteps.map((step) => (
              <div key={step.num} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "rgba(242, 106, 33, 0.2)", fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", lineHeight: 1 }}>{step.num}</span>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff" }}>{step.name}</h4>
                <p style={{ color: "var(--text-soft)", fontSize: "0.8rem", lineHeight: "1.5" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* European Supply Chain Info */}
        <div
          style={{
            background: "linear-gradient(180deg, rgba(242, 106, 33, 0.05) 0%, rgba(242, 106, 33, 0.01) 100%)",
            border: "1px solid rgba(242, 106, 33, 0.15)",
            borderRadius: "6px",
            padding: "2.5rem",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Independencia Tecnológica y Exportación
            </span>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, margin: "0.5rem 0 1rem", color: "#fff" }}>
              Cadena de Suministro Europea 100% ITAR-Free
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "0rem" }}>
              Todos nuestros desarrollos in-house se benefician de una red de proveedores europea certificada, lo que excluye cualquier componente sujeto a las normas ITAR de EE. UU. Esto proporciona una excelente autonomía a nuestros clientes gubernamentales e internacionales y agiliza notablemente los trámites aduaneros de exportación militar.
            </p>
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="es" />
    </SeoPageShell>
  );
}

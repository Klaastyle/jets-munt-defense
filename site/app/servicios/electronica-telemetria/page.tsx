import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Electrónica y Telemetría UAV | Motores JetsMunt",
  description:
    "Soluciones avanzadas de electrónica de control, ECU redundantes, interfaces CAN Bus y fibra óptica para sistemas de propulsión de defensa.",
  path: "/servicios/electronica-telemetria",
  keywords: ["ECU turbojet", "FADEC UAV", "telemetria CAN Bus", "control orientacion campo FOC"],
  locale: "es_ES",
  languages: primaryAlternates("services-telemetry"),
});

export default function ElectronicsTelemetryPage() {
  const interfaces = [
    {
      title: "CAN Bus",
      desc: "Telemetría y control de motores de alta velocidad y máxima fiabilidad. Compatible con estándares aeronáuticos e industriales.",
    },
    {
      title: "Fibra Óptica (Opcional)",
      desc: "Interfaz física inmune a interferencias electromagnéticas (EMI) y pulsos de radiofrecuencia para fuselajes UAV avanzados.",
    },
    {
      title: "Protocolo Serie Abierto",
      desc: "UART estándar configurable para una integración directa con los principales sistemas de piloto automático del mercado.",
    },
    {
      title: "Expansión de Sensores (I2C)",
      desc: "Permite la conexión de telemetría de misión adicional como sensores de flujo de combustible externo y presión estática.",
    },
    {
      title: "Registro de Datos (SD)",
      desc: "Registro continuo a alta frecuencia (50 Hz) de todos los parámetros operativos y fallos para mantenimiento y análisis.",
    },
  ];

  const management = [
    { title: "Telemetría en Tiempo Real", desc: "Monitorización constante de revoluciones, temperatura de escape (EGT), estado de bombas y consumo." },
    { title: "Fusión de Sensores Inteligente", desc: "Algoritmos de filtrado Kalman integrados en el firmware para una lectura de sensores ultraestable." },
    { title: "Compensación Ambiental", desc: "Ajuste automático del mapa de inyección basándose en presión atmosférica, humedad y temperatura." },
    { title: "Funciones de Protección", desc: "Apagado automático preventivo ante anomalías de llama, sobrecorrientes o pérdidas de señal." },
    { title: "Control de RPM de Precisión", desc: "Control orientado al campo (FOC) con respuesta instantánea del acelerador y empuje predecible." },
    { title: "Monitoreo de Salud", desc: "Algoritmo predictivo de desgaste mecánico y fatiga de componentes basado en ciclos térmicos." },
  ];

  return (
    <SeoPageShell
      kicker="Propulsión Inteligente Integrada"
      title="Electrónica Avanzada y Telemetría"
      description="Nuestros motores incorporan una arquitectura electrónica avanzada de desarrollo propio que centraliza el control digital total del motor (FADEC) en un solo cuerpo blindado contra interferencias."
      image="/media/capabilities/uav-integration.png"
      breadcrumbPath="/servicios/electronica-telemetria"
      locale="es"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Architecture Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Arquitectura de Control Integrado
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              La ECU de JetsMunt actúa como el procesador central del sistema de propulsión. Gestiona la bomba de combustible brushless y el motor de arranque mediante tecnologías avanzadas de control por vectorización, enviando datos de telemetría de alta resolución al piloto automático en tiempo real.
            </p>
            <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-soft)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[GCS]</span>
                  <span>↔ Estación de control de tierra</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[Telemetría]</span>
                  <span>↔ Enlace inalámbrico de datos</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[Autopiloto]</span>
                  <span>↔ Aviónica y control de vuelo</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[JetsMunt ECU]</span>
                  <span>↔ FADEC inteligente y actuadores</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interfaces */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Interfaces de Comunicación
            </h2>
            <div style={{ display: "grid", gap: "1.2rem" }}>
              {interfaces.map((inf) => (
                <div key={inf.title} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.2rem" }}>{inf.title}</h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.82rem", lineHeight: "1.5" }}>{inf.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engine Management Block */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "2.5rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.8rem", color: "#fff", textAlign: "center" }}>
            Gestión Inteligente del Motor
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {management.map((mng) => (
              <div key={mng.title}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.4rem" }}>{mng.title}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{mng.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Software Suite */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Software de Configuración y Diagnóstico
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.2rem" }}>
              Nuestra suite de software multiplataforma permite realizar pruebas estáticas en banco, diagnósticos avanzados del motor y calibración de parámetros antes y después de cada misión.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>macOS</span>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>Linux</span>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>Windows</span>
            </div>
          </div>
          <div style={{ background: "rgba(242, 106, 33, 0.03)", border: "1px solid rgba(242, 106, 33, 0.15)", borderRadius: "6px", padding: "2rem", textAlign: "center" }}>
            <span style={{ fontSize: "2.5rem", color: "var(--accent)" }}>🛡️</span>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", margin: "1rem 0 0.5rem" }}>
              Sistemas ITAR-Free
            </h3>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Diseño electrónico, firmware y hardware desarrollado íntegramente en España y libre de restricciones.
            </p>
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="es" />
    </SeoPageShell>
  );
}

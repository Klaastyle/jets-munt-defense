import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Integración de Motores en UAV | JetsMunt",
  description:
    "Facilidades de integración física, interfaces de bus estándar y soporte técnico de acoplamiento de turborreactores en drones y misiles.",
  path: "/servicios/integracion-uav",
  keywords: ["integracion UAV", "acoplamiento motor drone", "aviónica UAV", "propulsión ala fija"],
  locale: "es_ES",
  languages: primaryAlternates("services-integration"),
});

export default function UavIntegrationPage() {
  const interfaces = [
    { name: "CAN Bus", desc: "Compatible con SAE J1939 para una fácil comunicación en buses de aviónica complejos." },
    { name: "I2C Bus", desc: "Diseñado para la interconexión con sensores ambientales periféricos y telemetría interna." },
    { name: "Enlaces Serie", desc: "Soporte de canales serie RS232, RS422 y RS485 para redundancia de comandos de aceleración." },
    { name: "PWM", desc: "Señal de modulación de ancho de pulso tradicional para entradas analógicas de aceleración de reserva." },
    { name: "Tarjeta SD", desc: "Interfaz local para la recuperación de logs de vuelo de alta frecuencia y actualización de firmware." },
  ];

  const applications = [
    { title: "UAVs de Ala Fija", desc: "Integración aerodinámica óptima en góndolas internas y externas para vuelos de larga duración." },
    { title: "Drones Blanco / Objetivos", desc: "Soluciones de montaje rápido preparadas para soportar altas aceleraciones y lanzamientos por catapulta." },
    { title: "Sistemas Lanzados desde Tierra", desc: "Integración en lanzadores y misiles tácticos con arranque fiable en menos de 30 segundos." },
    { title: "UAVs VTOL / Híbridos", desc: "Soporte para configuraciones de empuje vectorial y transición de vuelo vertical a horizontal." },
    { title: "Munición Merodeadora", desc: "Soluciones ultraligeras y de bajo perfil optimizadas para un coste mínimo por ciclo de misión." },
    { title: "Misiones Especiales", desc: "Desarrollos a medida para plataformas aeroespaciales en condiciones climáticas o de vuelo extremas." },
  ];

  const benefits = [
    { title: "Tiempo de Integración Reducido", desc: "Gracias a interfaces estandarizadas y software de configuración plug & play." },
    { title: "Rendimiento Optimizado", desc: "Maximiza la relación empuje-peso y optimiza el consumo específico de combustible (SFC)." },
    { title: "Fiabilidad de Misión", desc: "Sistemas electrónicos y de combustible validados para operaciones críticas y defensa." },
    { title: "Eficiencia de Costes", desc: "Reduce la inversión inicial en desarrollo e ingeniería y los costes operativos continuos." },
    { title: "Soporte Global", desc: "Soporte de ingeniería directa en el laboratorio y durante las pruebas de campo en todo el mundo." },
  ];

  return (
    <SeoPageShell
      kicker="Integración Transparente. Máximo Rendimiento."
      title="Capacidades de Integración en UAV"
      description="Los motores JetsMunt están diseñados desde su origen para facilitar la integración en la plataforma del cliente, reduciendo drásticamente el peso del cableado y las horas de desarrollo de ingeniería."
      image="/media/capabilities/uav-integration.png"
      breadcrumbPath="/servicios/integracion-uav"
      locale="es"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Applications Grid */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff", textAlign: "center" }}>
            Aplicaciones en Diversas Plataformas
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {applications.map((app) => (
              <div key={app.title} style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.5rem" }}>{app.title}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Architecture */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Arquitectura Típica de Integración
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              Nuestra arquitectura de control simplifica las conexiones a solo dos líneas principales: alimentación eléctrica redundante y bus de datos (CAN o RS485). La ECU gestiona directamente la electroválvula de arranque, la bujía de incandescencia y la bomba de combustible brushless, aislándolas del piloto automático.
            </p>
            <div style={{ padding: "1.2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", fontSize: "0.82rem", color: "var(--text-soft)" }}>
              <strong>Componentes Conectados a la ECU:</strong>
              <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem", display: "grid", gap: "0.3rem" }}>
                <li>• Bomba de Combustible Brushless Inteligente</li>
                <li>• Válvula Solenoide de Combustible de Respuesta Rápida</li>
                <li>• Sistema de Ignición de Alta Potencia</li>
                <li>• Sensores de Presión y Temperatura Ambiental</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Interfaces de Control de Vuelo
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {interfaces.map((inf) => (
                <div key={inf.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem" }}>
                  <strong style={{ color: "#fff", fontSize: "0.9rem", whiteSpace: "nowrap" }}>{inf.name}</strong>
                  <span style={{ color: "var(--text-soft)", fontSize: "0.85rem", textAlign: "right" }}>{inf.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
            Beneficios Clave para el Cliente
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {benefits.map((b) => (
              <div key={b.title}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--accent-2)", marginBottom: "0.4rem", textTransform: "uppercase" }}>{b.title}</h4>
                <p style={{ color: "var(--text-soft)", fontSize: "0.82rem", lineHeight: "1.5" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="es" />
    </SeoPageShell>
  );
}

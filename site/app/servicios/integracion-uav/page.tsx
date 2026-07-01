import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { TechnicalIcon, type TechnicalIconName } from "../../components/TechnicalIcon";
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
  const interfaces: Array<{name: string, desc: string, icon: TechnicalIconName}> = [
    { name: "CAN Bus", desc: "Compatible con SAE J1939 para una fácil comunicación en buses de aviónica complejos.", icon: "can-bus" },
    { name: "I2C Bus", desc: "Diseñado para la interconexión con sensores ambientales periféricos y telemetría interna.", icon: "i2c" },
    { name: "Enlaces Serie", desc: "Soporte de canales serie RS232, RS422 y RS485 para redundancia de comandos de aceleración.", icon: "code-serial" },
    { name: "PWM", desc: "Señal de modulación de ancho de pulso tradicional para entradas analógicas de aceleración de reserva.", icon: "sine-wave" },
    { name: "Tarjeta SD", desc: "Interfaz local para la recuperación de logs de vuelo de alta frecuencia y actualización de firmware.", icon: "sd-card" },
  ];

  const applications: Array<{title: string, desc: string, icon: TechnicalIconName}> = [
    { title: "UAVs de Ala Fija", desc: "Integración aerodinámica óptima en góndolas internas y externas para vuelos de larga duración.", icon: "aircraft" },
    { title: "Drones Blanco / Objetivos", desc: "Soluciones de montaje rápido preparadas para soportar altas aceleraciones y lanzamientos por catapulta.", icon: "target-crosshair" },
    { title: "Sistemas Lanzados desde Tierra", desc: "Integración en lanzadores y misiles tácticos con arranque fiable en menos de 30 segundos.", icon: "paper-plane" },
    { title: "UAVs VTOL / Híbridos", desc: "Soporte para configuraciones de empuje vectorial y transición de vuelo vertical a horizontal.", icon: "puzzle" },
    { title: "Munición Merodeadora", desc: "Soluciones ultraligeras y de bajo perfil optimizadas para un coste mínimo por ciclo de misión.", icon: "feather" },
    { title: "Misiones Especiales", desc: "Desarrollos a medida para plataformas aeroespaciales en condiciones climáticas o de vuelo extremas.", icon: "globe" },
  ];

  const benefits: Array<{title: string, desc: string, icon: TechnicalIconName}> = [
    { title: "Tiempo de Integración Reducido", desc: "Gracias a interfaces estandarizadas y software de configuración plug & play.", icon: "calendar" },
    { title: "Rendimiento Optimizado", desc: "Maximiza la relación empuje-peso y optimiza el consumo específico de combustible (SFC).", icon: "speedometer" },
    { title: "Fiabilidad de Misión", desc: "Sistemas electrónicos y de combustible validados para operaciones críticas y defensa.", icon: "shield-check" },
    { title: "Eficiencia de Costes", desc: "Reduce la inversión inicial en desarrollo e ingeniería y los costes operativos continuos.", icon: "chart-line" },
    { title: "Soporte Global", desc: "Soporte de ingeniería directa en el laboratorio y durante las pruebas de campo en todo el mundo.", icon: "globe" },
  ];

  return (
    <SeoPageShell
      kicker="Integración Transparente. Máximo Rendimiento."
      title="Capacidades de Integración en UAV"
      description="Los motores JetsMunt están diseñados desde su origen para facilitar la integración en la plataforma del cliente, reduciendo drásticamente el peso del cableado y las horas de desarrollo de ingeniería."
      image="/media/services/uav-integration.png"
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
                <div style={{ color: "var(--accent)", marginBottom: "1rem" }}>
                  <TechnicalIcon name={app.icon} size={32} />
                </div>
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
                <div key={inf.name} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ color: "var(--text-muted)", marginTop: "0.15rem" }}>
                    <TechnicalIcon name={inf.icon} size={24} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <strong style={{ color: "#fff", fontSize: "0.95rem" }}>{inf.name}</strong>
                    <span style={{ color: "var(--text-soft)", fontSize: "0.85rem" }}>{inf.desc}</span>
                  </div>
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
                <div style={{ color: "var(--accent-2)", marginBottom: "0.8rem" }}>
                  <TechnicalIcon name={b.icon} size={28} />
                </div>
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

 
import type { Metadata } from "next";
import Image from "next/image";
import { IconCard } from "../../../components/IconCard";
import { SeoInternalLinks, SeoPageShell } from "../../../components/SeoPage";
import { TechnicalFeatureList, type TechnicalFeatureItem } from "../../../components/TechnicalFeatureList";
import { TechnicalIcon, type TechnicalIconName } from "../../../components/TechnicalIcon";
import { buildMetadata } from "../../../lib/metadata";
import { proProductAlternates } from "../../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Motor Turbojet XM215 PRO | Propulsión Avanzada UAV",
  description:
    "Especificaciones completas y capacidades del turborreactor XM215 PRO de 215 N con electrónica integrada, control FOC y telemetría avanzada.",
  path: "/en/engines/xm215-pro",
  image: "/media/215/motor-turbojet-xm215-pro-1.png",
  keywords: ["XM215 PRO", "turbojet 215 N", "propulsión UAV defensa", "microturbinas JetsMunt"],
  locale: "en_US",
  languages: proProductAlternates("xm215-pro"),
});

const specs = [
  { label: "Empuje maximo", value: "215 N" },
  { label: "RPM maximas", value: "122,000 rpm" },
  { label: "Peso motor", value: "1,820 g" },
  { label: "Longitud", value: "265 mm" },
  { label: "Diametro max.", value: "112.5 mm" },
  { label: "Altura", value: "177.5 mm" },
  { label: "Alimentacion", value: "12 - 32 V DC" },
];

const proofCards: Array<{ icon: TechnicalIconName; title: string; description: string }> = [
  {
    icon: "speedometer",
    title: "High Performance",
    description: "215 N de empuje con consumo optimizado para perfiles UAV exigentes.",
  },
  {
    icon: "feather",
    title: "Lightweight Design",
    description: "Arquitectura compacta orientada a una relacion empuje-peso elevada.",
  },
  {
    icon: "shield-check",
    title: "Reliable & Robust",
    description: "Sistema robusto para entornos aeroespaciales y misiones especiales.",
  },
  {
    icon: "crossed-tools",
    title: "Easy Integration",
    description: "Formato compacto y electronica integrada para reducir complejidad.",
  },
];

const electronicsFeatures: TechnicalFeatureItem[] = [
  {
    icon: "microchip",
    title: "Electronica integrada",
    description: "ECU, control y diagnostico alojados dentro del conjunto del motor.",
  },
  {
    icon: "lightning",
    title: "Rango 12-32V DC",
    description: "Alimentacion flexible para plataformas con buses electricos diferentes.",
  },
  {
    icon: "shield-check",
    title: "Proteccion electrica",
    description: "Proteccion frente a sobrecorriente y sobretension integrada.",
  },
  {
    icon: "thermometer",
    title: "Rango termico",
    description: "Electronica preparada para operar entre -30 C y +80 C.",
  },
  {
    icon: "can-bus",
    title: "CAN Bus",
    description: "Interfaz opcional de control y telemetria para avionica avanzada.",
  },
  {
    icon: "fiber-optic",
    title: "Fibra optica",
    description: "Enlace opcional para instalaciones sensibles a interferencias EMI.",
  },
  {
    icon: "i2c",
    title: "Sensores I2C",
    description: "Entrada para sensores adicionales de flujo, velocidad del aire o telemetria.",
  },
];

const controlFeatures: TechnicalFeatureItem[] = [
  {
    icon: "sine-wave",
    title: "True sine wave FOC",
    description: "Control vectorial para starter y bomba brushless con onda senoidal real.",
  },
  {
    icon: "target-crosshair",
    title: "Control preciso",
    description: "Regulacion estable hasta variaciones muy bajas de RPM.",
  },
  {
    icon: "environment-sensor",
    title: "Sensor ambiental",
    description: "Lectura integrada de temperatura, presion y humedad.",
  },
  {
    icon: "sd-card",
    title: "Data logging SD",
    description: "Registro local de datos de vuelo y banco hasta 50 Hz.",
  },
  {
    icon: "kalman-filter",
    title: "Filtro Kalman",
    description: "Filtrado en tiempo real de sensores para un lazo de control preciso.",
  },
  {
    icon: "paper-plane",
    title: "Autopilot ready",
    description: "Integracion con pilotos automaticos mediante protocolo serie abierto.",
  },
];

const integrationFeatures: TechnicalFeatureItem[] = [
  {
    icon: "code-serial",
    title: "Protocolo abierto",
    description: "Interfaz serie documentada para integracion con avionica externa.",
  },
  {
    icon: "database",
    title: "Telemetria completa",
    description: "Acceso a datos de funcionamiento y parametros de configuracion.",
  },
  {
    icon: "monitor-settings",
    title: "Software de configuracion",
    description: "Monitorizacion y ajuste desde herramientas multiplataforma.",
  },
  {
    icon: "aircraft",
    title: "Aplicaciones UAV",
    description: "Pensado para UAV avanzados, target drones y misiones especiales.",
  },
];

const thrustData = [
  { rpm: "122,000", flow: 652, thrust: 215 },
  { rpm: "112,000", flow: 458, thrust: 161 },
  { rpm: "102,000", flow: 366, thrust: 125 },
  { rpm: "90,000", flow: 255, thrust: 85 },
  { rpm: "80,000", flow: 128, thrust: 68 },
  { rpm: "60,000", flow: 92, thrust: 30 },
  { rpm: "50,000", flow: 69, thrust: 22 },
  { rpm: "40,000", flow: 45, thrust: 14 },
  { rpm: "28,000", flow: 33, thrust: 8 },
];

const startConditions = [
  { icon: "speedometer", label: "Velocidad", value: "0 - 450 km/h" },
  { icon: "altitude", label: "Altitud", value: "0 - 6500 m" },
  { icon: "thermometer", label: "Temperatura", value: "-35 C a +50 C" },
] as const;

const runConditions = [
  { icon: "speedometer", label: "Velocidad", value: "0 - 850 km/h" },
  { icon: "altitude", label: "Altitud", value: "0 - 10,000 m" },
  { icon: "thermometer", label: "Temperatura", value: "-45 C a +50 C" },
] as const;

const supportedSystems: Array<{ icon: TechnicalIconName; label: string; detail: string }> = [
  { icon: "macos", label: "macOS", detail: "Field setup" },
  { icon: "linux", label: "Linux", detail: "Lab systems" },
  { icon: "windows", label: "Windows", detail: "Service bench" },
];

function PerformanceChart() {
  return (
    <div className="xm-performance-chart" aria-label="Grafica de empuje y consumo">
      <div className="xm-chart-legend">
        <span className="flow">Fuel flow</span>
        <span className="thrust">Thrust</span>
      </div>
      <svg viewBox="0 0 420 230" role="img" aria-label="Curvas de consumo de combustible y empuje por RPM">
        <line x1="42" y1="28" x2="354" y2="28" />
        <line x1="42" y1="70" x2="354" y2="70" />
        <line x1="42" y1="112" x2="354" y2="112" />
        <line x1="42" y1="154" x2="354" y2="154" />
        <line x1="42" y1="196" x2="354" y2="196" className="axis" />
        <line x1="42" y1="28" x2="42" y2="196" className="axis" />
        {[86, 130, 174, 218, 262, 306, 354].map((x) => (
          <line key={x} x1={x} y1="28" x2={x} y2="196" />
        ))}
        <path
          d="M60 187 L96 178 L132 173 L168 162 L204 153 L240 138 L276 117 L312 93 L348 49"
          className="flow-path"
        />
        <path
          d="M60 190 L96 181 L132 175 L168 166 L204 156 L240 132 L276 111 L312 86 L348 53"
          className="thrust-path"
        />
        <text x="42" y="218">RPM x1000</text>
        <text x="354" y="218" textAnchor="end">122</text>
      </svg>
    </div>
  );
}

function ConditionColumn({
  title,
  rows,
}: {
  title: string;
  rows: readonly { icon: TechnicalIconName; label: string; value: string }[];
}) {
  return (
    <article className="xm-condition-column">
      <h3>{title}</h3>
      <dl>
        {rows.map((row) => (
          <div key={`${title}-${row.label}`}>
            <dt>
              <TechnicalIcon name={row.icon} size={24} />
              <span>{row.label}</span>
            </dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function Xm215ProPage() {
  return (
    <SeoPageShell
      kicker="PRO Propulsion Systems"
      title="XM215 PRO"
      description="215 N turbojet with integrated full authority intelligent control (FADEC) and advanced telemetry."
      image="/xm215-hero.png"
      imageFit="contain"
      compact={true}
      showSpotlight={true}
      breadcrumbPath="/en/engines/xm215-pro"
      locale="en"
    >
      <section className="section xm-web-tech" aria-label="Ficha tecnica web XM215 PRO">
        <div className="container">
          <section className="xm-web-hero">
            <div className="xm-web-copy">
              <span className="xm-web-label">Ingeniería Avanzada</span>
              <h2>Diseñado para la integración exigente.</h2>
              <p>
                El XM215 PRO ofrece 215 N de empuje constante en una arquitectura ultra-compacta, integrando control FOC y telemetría avanzada.
              </p>
              <div className="xm-web-actions" aria-label="XM215 PRO resumen tecnico">
                <strong>215 N</strong>
                <span>122,000 rpm</span>
                <span>12 - 32 V DC</span>
              </div>
            </div>

            <div className="xm-web-media" style={{ background: 'transparent', border: 'none' }}>
              <Image
                src="/xm215-tech.png"
                alt="XM215 PRO turbojet engine"
                fill
                priority
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 980px) 100vw, 46vw"
              />
            </div>
          </section>

          <section className="xm-icon-proof" aria-label="XM215 PRO advantages">
            {proofCards.map((card) => (
              <IconCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </section>

          <section className="xm-web-grid" aria-label="XM215 PRO technical data">
            <article className="xm-spec-panel">
              <h2>Engine specifications</h2>
              <dl>
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </article>

            <TechnicalFeatureList title="Integrated electronics & control" items={electronicsFeatures} className="xm-feature-panel" />
            <TechnicalFeatureList title="Control logic & telemetry" items={controlFeatures} className="xm-feature-panel" />
          </section>

          <section className="xm-performance-section" aria-label="XM215 PRO thrust performance">
            <div className="xm-section-heading">
              <span className="xm-web-label">Rendimiento</span>
              <h2>Curva de empuje y consumo.</h2>
              <p>Performance data validated on test bench under standard atmosphere conditions (ISA).</p>
            </div>
            <div className="xm-performance-layout">
              <table className="xm-performance-table">
                <thead>
                  <tr>
                    <th>RPM</th>
                    <th>Fuel Flow</th>
                    <th>Thrust</th>
                  </tr>
                </thead>
                <tbody>
                  {thrustData.map((row) => (
                    <tr key={row.rpm}>
                      <td>{row.rpm}</td>
                      <td>{row.flow} ml/min</td>
                      <td>{row.thrust} N</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <PerformanceChart />
            </div>
          </section>

          <section className="xm-conditions" aria-label="Operating conditions">
            <ConditionColumn title="Starting conditions" rows={startConditions} />
            <ConditionColumn title="Running conditions" rows={runConditions} />
            <TechnicalFeatureList title="Integration features" items={integrationFeatures} className="xm-feature-panel" />
          </section>

          <section className="xm-software-band" aria-label="Configuration software" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="xm-software-copy">
              <span className="xm-web-label">Configuration software</span>
              <h2>Monitorizacion y ajuste multiplataforma.</h2>
              <p>
                Interfaz para configuracion, calibracion, operacion y diagnostico del motor. Compatible con
                macOS, Linux y Windows.
              </p>
              <div className="xm-os-support" aria-label="Sistemas operativos compatibles">
                {supportedSystems.map((system) => (
                  <article key={system.label}>
                    <TechnicalIcon name={system.icon} size={30} title={`${system.label} compatible`} />
                    <div>
                      <strong>{system.label}</strong>
                      <span>{system.detail}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <SeoInternalLinks locale="es" />
    </SeoPageShell>
  );
}


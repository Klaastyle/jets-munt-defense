import type { Metadata } from "next";
import Image from "next/image";
import { SeoInternalLinks, SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { proProductAlternates } from "../../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "XM255 PRO Turbojet Engine | UAV High Thrust",
  description:
    "Full technical specifications, operating envelope parameters, and integration details of the 255 N XM255 PRO compact turbojet engine.",
  path: "/en/engines/xm255-pro",
  image: "/media/255/Gemini_Generated_Image_a79y7wa79y7wa79y.png",
  keywords: ["XM255 PRO", "255 N turbojet", "military UAV propulsion", "operating envelope jet"],
  locale: "en_US",
  languages: proProductAlternates("xm255-pro"),
});

export default function Xm255ProPage() {
  const specs = [
    { label: "Max. Thrust", value: "255 N" },
    { label: "Max. RPM", value: "110,000 rpm" },
    { label: "Engine Weight", value: "2,080 g" },
    { label: "Length", value: "272.6 mm" },
    { label: "Body Diameter", value: "122 mm" },
    { label: "Height", value: "166.5 mm" },
    { label: "Power Supply Range", value: "12 - 32 VDC" },
  ];

  const electronicsList = [
    { text: "All electronics integrated inside the engine" },
    { text: "Extended power supply range: 12-32V DC" },
    { text: "Over current and over voltage protection" },
    { text: "Extended operating temperature range: -30 °C to +80 °C" },
    { text: "CAN Bus control and telemetry interface (optional)" },
    { text: "Fiber Optic control and telemetry interface (optional)" },
    { text: "I²C interface for additional sensors (fuel flow, airspeed, telemetry, etc.)" },
  ];

  const keyFeaturesList = [
    { text: "High reliability electronics" },
    { text: "True sine wave, Field Oriented Control of starter and pump brushless motors" },
    { text: "Ultra precise control down to a few RPM" },
    { text: "Ambient temperature, pressure and humidity sensor" },
    { text: "SD card interface for data logging up to 50 Hz" },
    { text: "Real Optic Kalman filtering of all sensor data for a more precise control loop" },
    { text: "Easy integration with most autopilots via open serial protocol" },
    { text: "Custom data protocol and configuration to customer requirements" },
    { text: "Full access to telemetry data and configuration parameters" },
  ];

  const startConditions = [
    { label: "Flight Speed", value: "0 - 450 km/h" },
    { label: "Max. Altitude", value: "0 - 6,500 m" },
    { label: "Ambient Temperature", value: "-35 °C to +50 °C" },
  ];

  const runConditions = [
    { label: "Flight Speed", value: "0 - 850 km/h" },
    { label: "Max. Altitude", value: "0 - 10,000 m" },
    { label: "Ambient Temperature", value: "-45 °C to +50 °C" },
  ];

  // Specific thrust performance data for XM255 PRO
  const thrustData = [
    { rpm: "110,000", flow: 820, thrust: 255 },
    { rpm: "100,000", flow: 610, thrust: 195 },
    { rpm: "90,000", flow: 440, thrust: 140 },
    { rpm: "80,000", flow: 320, thrust: 102 },
    { rpm: "70,000", flow: 210, thrust: 72 },
    { rpm: "60,000", flow: 150, thrust: 48 },
    { rpm: "50,000", flow: 110, thrust: 32 },
    { rpm: "40,000", flow: 80, thrust: 20 },
    { rpm: "28,000", flow: 45, thrust: 10 },
  ];

  const integrationFeatures = [
    {
      title: "Integrated Electronics",
      desc: "Simplified installation by housing the ECU and FADEC module in the engine chassis.",
      icon: (
        <svg style={{ width: "24px", height: "24px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5 }} viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      ),
    },
    {
      title: "CAN Bus Telemetry",
      desc: "Robust transmission and reception compatible with complex avionics buses.",
      icon: (
        <svg style={{ width: "24px", height: "24px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5 }} viewBox="0 0 24 24">
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9l-9 9M9 6h9v3" />
        </svg>
      ),
    },
    {
      title: "SD Data Logging",
      desc: "Full flight history recorded locally at a high frequency (50 Hz).",
      icon: (
        <svg style={{ width: "24px", height: "24px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5 }} viewBox="0 0 24 24">
          <path d="M4 2h10l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </svg>
      ),
    },
    {
      title: "Open Serial Protocol",
      desc: "Fast plug & play integration with commercial and military autopilots.",
      icon: (
        <svg style={{ width: "24px", height: "24px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5 }} viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
    },
    {
      title: "Fiber Optic Interface",
      desc: "Optional link immune to extreme electromagnetic interference and RF pulses.",
      icon: (
        <svg style={{ width: "24px", height: "24px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5 }} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Cross-Platform Software",
      desc: "Complete suite for engine configuration, diagnostics, and firmware updates.",
      icon: (
        <svg style={{ width: "24px", height: "24px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5 }} viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <SeoPageShell
      kicker="PRO Propulsion Systems"
      title="XM255 PRO"
      description="The highest thrust micro-turbine in the JetsMunt family, engineered for tactical unmanned systems, target drones, and cruise platforms."
      video="/media/255/PROMPT_VIDEO_—_XM_PRO_M.mp4"
      showSpotlight={true}
      breadcrumbPath="/en/engines/xm255-pro"
      locale="en"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Main Grid: Specs + Detailed Features */}
        <div style={{ gap: "2.5rem", marginBottom: "4rem" }} className="desktop-grid-35-65">
          
          {/* Engine Specs Column */}
          <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.8rem" }}>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
              ENGINE SPECIFICATIONS
            </h2>
            <div style={{ display: "grid", gap: "0.8rem" }}>
              {specs.map((spec) => (
                <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "0.4rem" }}>
                  <span style={{ color: "var(--text-soft)" }}>{spec.label}</span>
                  <span style={{ color: "#fff", fontWeight: 700 }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Double Column Features */}
          <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.8rem" }}>
            <div style={{ gap: "2rem" }} className="desktop-grid-2">
              
              {/* Electronics & Control */}
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--accent)", marginBottom: "1.2rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>⚙️</span> INTEGRATED ELECTRONICS & CONTROL
                </h3>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "grid", gap: "0.8rem" }}>
                  {electronicsList.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.82rem", color: "var(--text-soft)" }}>
                      <span style={{ color: "var(--accent)", fontWeight: "bold" }}>⚡</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--accent)", marginBottom: "1.2rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>🛡️</span> KEY FEATURES
                </h3>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "grid", gap: "0.8rem" }}>
                  {keyFeaturesList.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.82rem", color: "var(--text-soft)" }}>
                      <span style={{ color: "var(--accent)", fontWeight: "bold" }}>✓</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Operating Envelope Box */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.8rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
            OPERATING CONDITIONS & FLIGHT ENVELOPE
          </h2>
          <div style={{ gap: "2rem" }} className="desktop-grid-2">
            {/* Starting conditions */}
            <div style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 800, textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span>🛫</span> Inflight Starting Conditions
              </h3>
              <div style={{ display: "grid", gap: "0.8rem" }}>
                {startConditions.map((cond) => (
                  <div key={cond.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "0.4rem" }}>
                    <span style={{ color: "var(--text-soft)" }}>{cond.label}</span>
                    <strong style={{ color: "#fff" }}>{cond.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Running conditions */}
            <div style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 800, textTransform: "uppercase", color: "var(--accent-2)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span>🚀</span> Running Conditions
              </h3>
              <div style={{ display: "grid", gap: "0.8rem" }}>
                {runConditions.map((cond) => (
                  <div key={cond.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "0.4rem" }}>
                    <span style={{ color: "var(--text-soft)" }}>{cond.label}</span>
                    <strong style={{ color: "#fff" }}>{cond.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thrust Performance Dashboard: Table + SVG Chart */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.8rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
            THRUST PERFORMANCE
          </h2>
          <div style={{ gap: "3rem" }} className="desktop-grid-2">
            
            {/* Table */}
            <div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", color: "var(--text-soft)" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.1)", textAlign: "left" }}>
                    <th style={{ padding: "0.6rem" }}>RPM</th>
                    <th style={{ padding: "0.6rem" }}>Fuel Flow (ml/min)</th>
                    <th style={{ padding: "0.6rem" }}>Thrust (N)</th>
                  </tr>
                </thead>
                <tbody>
                  {thrustData.map((d, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: index % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                      <td style={{ padding: "0.6rem", fontWeight: 700, color: "#fff" }}>{d.rpm}</td>
                      <td style={{ padding: "0.6rem", color: "#4f92ff" }}>{d.flow}</td>
                      <td style={{ padding: "0.6rem", color: "var(--accent)" }}>{d.thrust}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SVG Graph specific to XM255 */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#4f92ff", fontWeight: 600 }}>● Fuel Flow (ml/min)</span>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>● Thrust (N)</span>
                </div>
                <svg viewBox="0 0 400 220" style={{ width: "100%", height: "auto" }}>
                  {/* Grid Lines */}
                  <line x1="40" y1="30" x2="340" y2="30" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                  <line x1="40" y1="70" x2="340" y2="70" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                  <line x1="40" y1="110" x2="340" y2="110" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                  <line x1="40" y1="150" x2="340" y2="150" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                  <line x1="40" y1="190" x2="340" y2="190" stroke="rgba(255,255,255,0.15)" />

                  <line x1="98" y1="30" x2="98" y2="190" stroke="rgba(255,255,255,0.05)" />
                  <line x1="156" y1="30" x2="156" y2="190" stroke="rgba(255,255,255,0.05)" />
                  <line x1="214" y1="30" x2="214" y2="190" stroke="rgba(255,255,255,0.05)" />
                  <line x1="272" y1="30" x2="272" y2="190" stroke="rgba(255,255,255,0.05)" />
                  <line x1="330" y1="30" x2="330" y2="190" stroke="rgba(255,255,255,0.05)" />

                  {/* Y Axis Labels (Flow left, Thrust right) */}
                  <text x="35" y="34" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="end">1000</text>
                  <text x="35" y="74" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="end">750</text>
                  <text x="35" y="114" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="end">500</text>
                  <text x="35" y="154" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="end">250</text>
                  <text x="35" y="194" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="end">0</text>

                  <text x="345" y="34" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="start">300</text>
                  <text x="345" y="74" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="start">220</text>
                  <text x="345" y="114" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="start">150</text>
                  <text x="345" y="154" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="start">75</text>
                  <text x="345" y="194" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="start">0</text>

                  {/* X Axis Labels */}
                  <text x="98" y="206" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">40</text>
                  <text x="156" y="206" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">60</text>
                  <text x="214" y="206" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">80</text>
                  <text x="272" y="206" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">100</text>
                  <text x="330" y="206" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">120</text>
                  <text x="190" y="218" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle" fontWeight="bold">RPM (x1000)</text>

                  {/* Fuel Flow Curve (Blue) */}
                  <path
                    d="M 63 182 L 98 178 L 127 172.6 L 156 162 L 214 148 L 243 124.6 L 278 101 L 307 72 L 330 45"
                    fill="none"
                    stroke="#4f92ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Thrust Curve (Red/Orange) */}
                  <path
                    d="M 63 184 L 98 179 L 127 174 L 156 163 L 214 150 L 243 131 L 278 108 L 307 75 L 330 42"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Flow dots */}
                  <circle cx="330" cy="45" r="3" fill="#4f92ff" />
                  <circle cx="278" cy="101" r="3" fill="#4f92ff" />
                  <circle cx="214" cy="148" r="3" fill="#4f92ff" />
                  <circle cx="98" cy="178" r="3" fill="#4f92ff" />

                  {/* Thrust dots */}
                  <circle cx="330" cy="42" r="3" fill="var(--accent)" />
                  <circle cx="278" cy="108" r="3" fill="var(--accent)" />
                  <circle cx="214" cy="150" r="3" fill="var(--accent)" />
                  <circle cx="98" cy="179" r="3" fill="var(--accent)" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Integration Features 3x2 Grid */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
            INTEGRATION FEATURES
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {integrationFeatures.map((item, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ flexShrink: 0, marginTop: "0.2rem" }}>{item.icon}</div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.3rem" }}>{item.title}</h4>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.8rem", lineHeight: "1.5" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Image Gallery Section */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "3rem 1.8rem", marginBottom: "4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ color: "var(--accent)", fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
              Hardware Details
            </p>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: "0.8rem" }}>
              Image Gallery
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", maxWidth: "600px", margin: "0 auto" }}>
              Examine the technical details, integration components, and finishes of the XM255 PRO turbojet.
            </p>
          </div>

          <div className="premium-bento-gallery">
            <div className="bento-item bento-large" style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <Image src="/media/255/Gemini_Generated_Image_onajxeonajxeonaj.png" alt="XM255 PRO casing side view" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="bento-item" style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <Image src="/media/255/Gemini_Generated_Image_q0loh8q0loh8q0lo.png" alt="XM255 PRO diffuser front view" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="bento-item" style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <Image src="/media/255/Gemini_Generated_Image_a79y7wa79y7wa79y.png" alt="XM255 PRO exhaust and nozzle system" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="bento-item" style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <Image src="/media/255/Gemini_Generated_Image_vs8tv5vs8tv5vs8t.png" alt="XM255 PRO internal electronics integration" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="bento-item" style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <video
                src="/media/255/PROMPT_VIDEO_—_XM_PRO_M.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Configuration Software Wide Panel */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "6px",
            padding: "2rem",
          }}
        >
          <div style={{ gap: "3rem" }} className="desktop-grid-2">
            
            {/* Visual software dashboard preview */}
            <div style={{ background: "#05070a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "1rem", fontFamily: "monospace", color: "#4f92ff" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", color: "#fff" }}>📡 JETSMUNT FADEC MONITORS V2.5</span>
                <span style={{ fontSize: "0.75rem" }}>CONNECTED</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ border: "1px solid rgba(255,255,255,0.05)", padding: "0.6rem", borderRadius: "4px" }}>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>TURBINE SPEED</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: "var(--accent)" }}>110,000 <span style={{ fontSize: "0.8rem" }}>RPM</span></div>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.05)", padding: "0.6rem", borderRadius: "4px" }}>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>EXHAUST TEMP</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff" }}>720 <span style={{ fontSize: "0.8rem" }}>°C</span></div>
                </div>
              </div>
              <div style={{ marginTop: "1rem", height: "60px", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", background: "#030406" }}>
                <svg viewBox="0 0 200 60" style={{ width: "100%", height: "100%" }}>
                  <path d="M 0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30" fill="none" stroke="rgba(79, 146, 255, 0.4)" strokeWidth="1" />
                  <path d="M 0 30 Q 15 20 30 30 T 60 30 T 90 30 T 120 30 T 150 30 T 180 30 T 200 30" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

            {/* Description and Logos */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                REAL-TIME MONITORING
              </span>
              <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.6rem", fontWeight: 800, margin: "0.5rem 0 1rem", color: "#fff" }}>
                CONFIGURATION & MONITORING SOFTWARE
              </h2>
              <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "1.8rem" }}>
                We provide a powerful and comprehensive graphical user interface for tuning, diagnostics, and real-time turbine monitoring.
              </p>
              
              <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg style={{ width: "18px", height: "18px", fill: "rgba(255,255,255,0.6)" }} viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.37-6.15-3.24-2.7-7.14-7.39-11.69-14.06-8.91-13.14-15.07-29.35-18.49-48.6-3.41-19.25-2.28-35.37 3.42-48.33 5.71-12.96 14.19-19.56 25.43-19.8 6.44-.12 12.8 2.01 19.08 6.41 6.28 4.4 11.2 6.59 14.77 6.59 3.58 0 8.2-2.1 13.88-6.3 5.68-4.2 11.83-6.2 18.45-6 10.05.35 18.25 4.02 24.58 11.04 6.34 7.02 10.3 15.01 11.9 23.95-18.52 7.74-27.46 20.3-26.8 37.66.66 13.1 5.92 23.79 15.77 32.06 9.86 8.28 21.36 12.63 34.52 13.06-.82 2.63-1.6 5.25-2.35 7.85zM119.22 35.24c0-7.72 2.76-14.88 8.28-21.49 5.52-6.61 12.35-10.45 20.5-11.5 1.05 8.12-1.83 15.79-8.64 22.99-6.8 7.2-13.91 10.97-20.14 10z" />
                  </svg>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-soft)", fontWeight: 600 }}>macOS</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ fontSize: "1.1rem" }}>🐧</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-soft)", fontWeight: 600 }}>Linux</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg style={{ width: "16px", height: "16px", fill: "rgba(255,255,255,0.6)" }} viewBox="0 0 88 88">
                    <path d="M0 12.402l35.687-4.858v33.456H0V12.402zM0 45.395h35.687v33.84L0 74.341V45.395zM39.652 7.013L88 0v40.999H39.652V7.013zM39.652 45.395H88v41.979l-48.348-7.054V45.395z" />
                  </svg>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-soft)", fontWeight: 600 }}>Windows</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
      <SeoInternalLinks locale="en" />
    </SeoPageShell>
  );
}

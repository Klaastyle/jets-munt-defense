import type { Metadata } from "next";
import Image from "next/image";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "About JetsMunt | Over Three Decades of Turbine Expertise",
  description:
    "Learn about the history, timeline, and custom design and manufacturing capabilities of compact turbojet propulsion systems at JetsMunt.",
  path: "/en/about-jetsmunt",
  image: "/media/about/Gemini_Generated_Image_9k9e7o9k9e7o9k9e.png",
  keywords: ["about JetsMunt", "JetsMunt history", "aerospace engineering", "turbojet manufacturer"],
  locale: "en_US",
  languages: primaryAlternates("about"),
});

export default function AboutJetsMuntPage() {
  const timelineItems = [
    { year: "1994", title: "Research Activities", desc: "Technical research and experimental activities in compact turbine technology begin." },
    { year: "1996", title: "First Successful Flight", desc: "First flight powered by an in-house developed compact turbine engine is successfully completed." },
    { year: "1998", title: "Company Founded", desc: "JetsMunt is formally founded for the commercialization and continuous development of turbojets." },
    { year: "2025+", title: "UAV Propulsion Leader", desc: "Over 6,000 engines delivered worldwide with extensive operational experience on global defense platforms." },
  ];

  const stats = [
    { value: "98 N - 255 N", label: "Thrust range" },
    { value: "50+ Countries", label: "Global reach" },
    { value: "30+ Years", label: "Engineering experience" },
  ];

  return (
    <SeoPageShell
      kicker="About Us"
      title="Three decades of innovation in compact turbojet propulsion."
      description="JetsMunt is a Spanish aerospace engineering company specialized in the design, development, and manufacturing of advanced turbojet systems for modern unmanned platforms."
      image="/media/about/Gemini_Generated_Image_9k9e7o9k9e7o9k9e.png"
      breadcrumbPath="/en/about-jetsmunt"
      locale="en"
    >
      <section className="section container" style={{ paddingBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Our Journey
            </h2>
            <p style={{ color: "var(--text-soft)", marginBottom: "1.2rem", fontSize: "0.98rem", lineHeight: "1.7" }}>
              The origins of JetsMunt date back to 1994, when initial theoretical and experimental research in micro-turbine technology began. Practical flight validation was reached in 1996, laying the foundation for the official incorporation of the company in 1998.
            </p>
            <p style={{ color: "var(--text-soft)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Today, JetsMunt designs complete, robust propulsion solutions, integrating aerodynamic design, thermodynamic analysis, electronic control units (ECU), and real-time embedded software under one roof at our facilities in Spain.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Operational Experience
            </h2>
            <p style={{ color: "var(--text-soft)", marginBottom: "1.2rem", fontSize: "0.98rem", lineHeight: "1.7" }}>
              With more than 6,000 engines delivered worldwide, our turbines operate on various defense platforms and commercial UAVs in over 50 countries. The robustness and reliability of our systems are the result of strict testing processes in specialized in-house test benches.
            </p>
            <p style={{ color: "var(--text-soft)", fontSize: "0.98rem", lineHeight: "1.7" }}>
              Featuring an entirely European supply chain that is completely ITAR-free, we provide international customers with secure, reliable propulsion packages and short lead times.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ margin: "4rem 0" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2.5rem", color: "#fff", textAlign: "center" }}>
            Key Milestones
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {timelineItems.map((item, index) => (
              <div key={item.year} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                {/* Timeline Line & Dot */}
                <div style={{ display: "flex", alignItems: "center", width: "100%", marginBottom: "1.5rem" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 0 4px rgba(242,106,33,0.15)", flexShrink: 0 }}></div>
                  <div style={{ height: "2px", flexGrow: 1, marginLeft: "1rem", background: index === timelineItems.length - 1 ? "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)" : "rgba(255,255,255,0.15)" }}></div>
                </div>
                {/* Timeline Card */}
                <div
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.03), transparent)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderTop: "3px solid var(--accent)",
                    borderRadius: "6px",
                    padding: "1.5rem",
                    flexGrow: 1
                  }}
                >
                  <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-soft)", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities & Development Gallery */}
        <div style={{ margin: "4rem 0" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2rem", color: "#fff", textAlign: "center" }}>
            Our Facilities & Development
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { src: "/media/about/Gemini_Generated_Image_c0guk1c0guk1c0gu.png", alt: "JetsMunt assembly facilities" },
              { src: "/media/about/Gemini_Generated_Image_mt2eermt2eermt2e.png", alt: "Blade and rotor design & engineering" },
              { src: "/media/about/Gemini_Generated_Image_n2rnkfn2rnkfn2rn.png", alt: "Turbine test bench cell" },
              { src: "/media/about/Gemini_Generated_Image_vnxrcxvnxrcxvnxr.png", alt: "Quality control and metrology lab" },
            ].map((img, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  height: "220px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1rem",
                  }}
                >
                  <p style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>{img.alt}</p>
                </div>
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

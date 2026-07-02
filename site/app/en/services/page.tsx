import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";
import { primaryAlternates } from "../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "UAV Propulsion Services & Development | JetsMunt",
  description:
    "Expert integration services, advanced control electronics, and customized OEM turbine engineering for UAV and defense aerospace platforms.",
  path: "/en/services",
  keywords: ["UAV propulsion services", "turbine integration support", "custom aerospace engineering"],
  locale: "en_US",
  languages: primaryAlternates("services"),
});

export default function EnServicesPage() {
  const serviceList = [
    {
      title: "Electronics & Telemetry",
      slug: "electronics-telemetry",
      kicker: "FADEC Control Systems",
      desc: "Design and integration of electronic engine control units (ECU), autopilot serial links, CAN Bus networks, fiber optic telemetry, and high-frequency SD card datalogging.",
      image: "/media/services/Gemini_Generated_Image_knhy4pknhy4pknhy.png",
    },
    {
      title: "UAV Integration",
      slug: "uav-integration",
      kicker: "Platform Engineering",
      desc: "Technical integration support and custom fuel, electrical, and mount adaptations to seamlessly install turbojets onto tactical drones and target platforms.",
      image: "/media/services/Gemini_Generated_Image_xztybfxztybfxzty.png",
    },
    {
      title: "Engineering & Development",
      slug: "engineering-development",
      kicker: "Custom OEM Solutions",
      desc: "End-to-end engineering from concept definition and simulation to in-house prototyping, qualification testing, and flight validation for defense programs.",
      image: "/media/services/Gemini_Generated_Image_saa7dvsaa7dvsaa7.png",
    },
  ];

  return (
    <SeoPageShell
      locale="en"
      kicker="Specialized Services"
      title="UAV Propulsion Integration & Development Support"
      description="We offer advanced aerospace engineering solutions ranging from firmware development and control telemetry to technical assistance for integration into aerial platforms."
      image="/servicios-hero.png"
      breadcrumbPath="/en/services"
      compact
    >
      <section className="section container">
        <div className="seo-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {serviceList.map((service) => (
            <article className="seo-product-card" key={service.slug} style={{ display: "flex", flexDirection: "column", height: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", overflow: "hidden" }}>
              <div className="seo-card-media" style={{ position: "relative", height: "200px", width: "100%" }}>
                <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 980px) 100vw, 33vw" />
              </div>
              <div className="seo-card-body" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{service.kicker}</span>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "0.8rem" }}>{service.title}</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>{service.desc}</p>
                
                <Link href={`/en/services/${service.slug}`} className="btn btn-ghost" style={{ textAlign: "center", width: "100%", padding: "0.6rem" }}>
                  View service details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SeoInternalLinks locale="en" />
    </SeoPageShell>
  );
}

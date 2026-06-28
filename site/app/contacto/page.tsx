import type { Metadata } from "next";
import ContactEnquiryForm from "../components/ContactEnquiryForm";
import GlobePulse from "../components/GlobePulse";
import { SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { distributors, primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Contacto JetsMunt | Consulta técnica de Propulsión",
  description:
    "Contacta con JetsMunt para selección de motor turbojet, accesorios, distribuidores, servicio técnico e integración de propulsión.",
  path: "/contacto",
  image: "/media/capabilities/uav-integration.png",
  keywords: ["JetsMunt contacto", "Consulta técnica JetsMunt", "servicio técnico JetsMunt"],
  locale: "es_ES",
  languages: primaryAlternates("contact"),
});

export default function ContactoPage() {
  const countries = Array.from(new Set(distributors.map((item) => item.country)));
  const serviceCenters = distributors.filter((item) => item.service).length;

  return (
    <SeoPageShell
      kicker="Contacto"
      title="Cuéntanos qué necesita tu plataforma."
      description="Comparte clase de motor, accesorios, necesidades de servicio o requisitos de distribución con el equipo de JetsMunt."
      image="/media/capabilities/uav-integration.png"
      breadcrumbPath="/contacto"
      compact
    >
      <section className="section container contact-enquiry">
        <div className="contact-intro">
          <p className="kicker">Consulta técnica</p>
          <h2>Empieza por las restricciones que importan.</h2>
          <p>
            Envía el contexto de propulsión, clase de motor, necesidad de servicio o accesorio.
            Cuanto más preciso sea el briefing, más rápido podrá JetsMunt dirigirlo a ingeniería, ventas o servicio.
          </p>
        </div>

        <ContactEnquiryForm />
      </section>

      <section className="section container contact-network">
        <div className="contact-details">
          <p className="kicker">Contacto directo</p>
          <h2>Jets Munt S.L.</h2>
          <p>
            Fabricante europeo de turbojets compactos con sede en Arenys de Munt, Barcelona,
            soporte directo y una red de distribuidores autorizados en mercados clave.
          </p>

          <div className="contact-methods">
            <a href="mailto:info@jets-munt.com">
              <span>Email</span>
              info@jets-munt.com
            </a>
            <a href="tel:+34937950113">
              <span>Teléfono</span>
              +34 937 950 113
            </a>
            <a href="https://wa.me/34722819250" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              +34 722 819 250
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Arenys%20de%20Munt%2008358%20Barcelona%20Spain" target="_blank" rel="noreferrer">
              <span>Ubicación</span>
              08358 Arenys de Munt, Barcelona, España
            </a>
          </div>
        </div>

        <div className="contact-globe-panel" aria-label="JetsMunt worldwide distributor presence">
          <GlobePulse />

          <div className="network-stats">
            <div>
              <strong>{countries.length}</strong>
              <span>países</span>
            </div>
            <div>
              <strong>{distributors.length}</strong>
              <span>partners</span>
            </div>
            <div>
              <strong>{serviceCenters}</strong>
              <span>centros de servicio</span>
            </div>
          </div>
        </div>
      </section>
    </SeoPageShell>
  );
}


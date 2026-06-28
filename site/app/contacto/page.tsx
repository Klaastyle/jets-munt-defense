import type { Metadata } from "next";
import ContactEnquiryForm from "../components/ContactEnquiryForm";
import GlobePulse from "../components/GlobePulse";
import { SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { distributors, primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Contacto JetsMunt | Consulta tÃ©cnica de Propulsion",
  description:
    "Contacta con JetsMunt para seleccion de motor turbojet, accesorios, distribuidores, servicio tecnico e integracion de propulsion.",
  path: "/contacto",
  image: "/media/capabilities/uav-integration.png",
  keywords: ["JetsMunt contacto", "Consulta tÃ©cnica JetsMunt", "servicio tecnico JetsMunt"],
  locale: "es_ES",
  languages: primaryAlternates("contact"),
});

export default function ContactoPage() {
  const countries = Array.from(new Set(distributors.map((item) => item.country)));
  const serviceCenters = distributors.filter((item) => item.service).length;

  return (
    <SeoPageShell
      kicker="Contacto"
      title="CuÃ©ntanos quÃ© necesita tu plataforma."
      description="Comparte clase de motor, accesorios, necesidades de servicio o requisitos de distribuciÃ³n con el equipo de JetsMunt."
      image="/media/capabilities/uav-integration.png"
      breadcrumbPath="/contacto"
      compact
    >
      <section className="section container contact-enquiry">
        <div className="contact-intro">
          <p className="kicker">Consulta tÃ©cnica</p>
          <h2>Empieza por las restricciones que importan.</h2>
          <p>
            Envia el contexto de propulsion, clase de motor, necesidad de servicio o accesorio.
            Cuanto mas preciso sea el briefing, mÃ¡s rÃ¡pido podrÃ¡ JetsMunt dirigirlo a ingenieria, ventas o servicio.
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
              <span>TelÃ©fono</span>
              +34 937 950 113
            </a>
            <a href="https://wa.me/34722819250" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              +34 722 819 250
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Arenys%20de%20Munt%2008358%20Barcelona%20Spain" target="_blank" rel="noreferrer">
              <span>UbicaciÃ³n</span>
              08358 Arenys de Munt, Barcelona, EspaÃ±a
            </a>
          </div>
        </div>

        <div className="contact-globe-panel" aria-label="JetsMunt worldwide distributor presence">
          <GlobePulse />

          <div className="network-stats">
            <div>
              <strong>{countries.length}</strong>
              <span>paÃ­ses</span>
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


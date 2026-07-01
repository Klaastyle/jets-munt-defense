import type { Metadata } from "next";
import { SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Aviso Legal | JetsMunt",
  description: "Información legal y condiciones de uso del sitio web de JetsMunt.",
  path: "/aviso-legal",
  locale: "es_ES",
});

export default function AvisoLegalPage() {
  return (
    <SeoPageShell
      kicker="Legal"
      title="Aviso Legal"
      description="Información legal y condiciones generales de uso del sitio web."
      breadcrumbPath="/aviso-legal"
      locale="es"
    >
      <section className="section container" style={{ paddingBottom: "4rem", color: "var(--text-soft)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, JETS MUNT SL le informa de que es titular de este sitio web. De acuerdo con la exigencia del artículo 10 de la citada Ley, JETS MUNT SL informa de los siguientes datos:
          </p>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Titular:</strong> JETS MUNT SL</li>
            <li><strong>CIF:</strong> B63532485</li>
            <li><strong>Domicilio social:</strong> POL. IND. TORRENT D EN PUIG, 31, 08358 ARENYS DE MUNT (Barcelona)</li>
            <li><strong>Registro Mercantil:</strong> Inscrita en el Registro Mercantil de Barcelona, tomo 36648, folio 191, hoja B 281424, inscripción primera.</li>
            <li><strong>Correo electrónico:</strong> info@jets-munt.com</li>
          </ul>

          <h2 style={{ color: "#fff", marginTop: "2rem" }}>Usuario y Régimen de Responsabilidades</h2>
          <p>
            La navegación, acceso y uso por el website de JETS MUNT SL confiere la condición de usuario, por la que se aceptan, desde la navegación por las páginas de JETS MUNT SL, todas las condiciones de uso aquí establecidas sin perjuicio de la aplicación de la correspondiente normativa de obligado cumplimiento legal según el caso.
          </p>
          <p>
            El usuario asume su responsabilidad en el uso correcto del website. Esta responsabilidad se extenderá a la veracidad y licitud de las informaciones aportadas por el usuario en los formularios extendidos por JETS MUNT SL para el acceso a ciertos contenidos o servicios ofrecidos por las webs.
          </p>

          <h2 style={{ color: "#fff", marginTop: "2rem" }}>Propiedad Intelectual e Industrial</h2>
          <p>
            Los derechos de propiedad intelectual e industrial derivados de todos los textos, imágenes, así como de los medios y formas de presentación y montaje de sus páginas pertenecen, por sí o como cesionaria, a JETS MUNT SL. Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico español.
          </p>
          <p>
            Todos los derechos reservados. En cumplimiento de la Ley de la Propiedad Intelectual se prohíbe expresamente la reproducción, distribución, comunicación pública y utilización, de la totalidad o parte de los contenidos de sus páginas web sin el consentimiento expreso de JETS MUNT SL.
          </p>

          <h2 style={{ color: "#fff", marginTop: "2rem" }}>Acciones Legales, Legislación Aplicable y Jurisdicción</h2>
          <p>
            JETS MUNT SL se reserva asimismo la facultad de presentar las acciones civiles o penales que considere oportunas por la utilización indebida de sus páginas web y contenidos o por el incumplimiento de las presentes condiciones.
          </p>
          <p>
            La relación entre el usuario y JETS MUNT SL se regirá por la normativa española vigente y serán competentes para decidir sobre cualquier controversia que se pudiera suscitar entre el usuario y JETS MUNT SL, los juzgados o tribunales de la localidad de Barcelona.
          </p>
        </div>
      </section>
    </SeoPageShell>
  );
}

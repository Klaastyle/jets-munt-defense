import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidad | JetsMunt",
  description: "Política de privacidad y protección de datos de JetsMunt.",
  path: "/politica-de-privacidad",
  locale: "es_ES",
});

export default function PrivacyPage() {
  return (
    <SeoPageShell
      kicker="Legal"
      title="Política de Privacidad"
      description="Compromiso de privacidad y protección de los datos de nuestros usuarios."
      breadcrumbPath="/politica-de-privacidad"
      locale="es"
    >
      <section className="section container" style={{ paddingBottom: "4rem", color: "var(--text-soft)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>
            JETS MUNT SL asegura que todos los datos de nuestros usuarios están sometidos al Compromiso de Privacidad, y que en ningún caso se destinarán a fines ajenos a los propios del sistema ni se entregarán a terceras partes, de acuerdo con los principios de la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales.
          </p>
          <p>
            En cumplimiento de la legislación vigente, todo usuario de JETS MUNT SL tiene derecho a solicitar, obtener, modificar o eliminar sus datos de carácter personal; para ello puede contactarnos solicitando dicha información, corrección o anulación a través de la dirección de correo electrónico info@jets-munt.com.
          </p>

          <h2 style={{ color: "#fff", marginTop: "2rem" }}>Condiciones de Uso</h2>
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, JETS MUNT SL le informa de que es titular del website jetsmunt.com. De acuerdo con la exigencia del artículo 10 de la citada Ley, JETS MUNT SL informa de los siguientes datos: El titular de esta página web es JETS MUNT SL, con domicilio social en POL. IND. TORRENT D EN PUIG, 31, 08358 ARENYS DE MUNT. La dirección de correo electrónico de contacto con la empresa es info@jets-munt.com.
          </p>

          <h2 style={{ color: "#fff", marginTop: "2rem" }}>Política de Enlaces y Exenciones de Responsabilidad</h2>
          <p>
            JETS MUNT SL no se hace responsable del contenido de las páginas web a las que el usuario pueda acceder a través de los enlaces establecidos en su website y declara que en ningún caso procederá a examinar o ejercitar ningún tipo de control sobre el contenido de otras páginas de la red. Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o legalidad de páginas ajenas a su propiedad a las que se pueda acceder por medio de los enlaces.
          </p>
          <p>
            JETS MUNT SL declara haber adoptado todas las medidas necesarias para evitar cualesquiera daños que, a los usuarios de su website, pudieran derivarse de la navegación por sus páginas web. En consecuencia, JETS MUNT SL no se hace responsable, en ningún caso, de los eventuales daños que por la navegación por Internet pudiera sufrir el usuario.
          </p>
          
          <h2 style={{ color: "#fff", marginTop: "2rem" }}>Modificaciones</h2>
          <p>
            JETS MUNT SL se reserva el derecho a realizar las modificaciones que considere oportunas, sin aviso previo, en el contenido de su website. Tanto en lo referente a los contenidos de la website, como en las condiciones de uso de la misma o en las condiciones generales de contratación. Dichas modificaciones podrán realizarse, a través de su website, de cualquier forma admisible en derecho y serán de obligado cumplimiento durante el tiempo en que se encuentren publicadas en la web y hasta que no sean modificadas válidamente por otras posteriores.
          </p>
        </div>
      </section>
    </SeoPageShell>
  );
}

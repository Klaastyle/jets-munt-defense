# Fix language mixing and spelling errors across all site pages
# Run from: c:\Users\Administrator\Desktop\Antigravity\Jets-Munt

function Fix-File($path, $replacements) {
    if (-not (Test-Path $path)) { Write-Host "SKIP (not found): $path"; return }
    $content = Get-Content $path -Raw -Encoding UTF8
    $original = $content
    foreach ($pair in $replacements) {
        $content = $content -replace [regex]::Escape($pair[0]), $pair[1]
    }
    if ($content -ne $original) {
        Set-Content $path $content -Encoding UTF8
        Write-Host "FIXED: $path"
    } else {
        Write-Host "NO CHANGES: $path"
    }
}

$base = "c:\Users\Administrator\Desktop\Antigravity\Jets-Munt\site\app"

# --- Nav.tsx ---
Fix-File "$base\components\Nav.tsx" @(
    @("Servicio tecnico", "Servicio técnico"),
    @("Toggle navigation menu", "Abrir menú de navegación"),
    @("Seleccionar idioma", "Seleccionar idioma")  # already correct, keep
)

# --- Footer.tsx ---
Fix-File "$base\components\Footer.tsx" @(
    @("Catalogo", "Catálogo"),
    @("Soporte tecnico", "Soporte técnico"),
    @("Ingenieria", "Ingeniería"),
    @("Fabricacion en Espana", "Fabricación en España"),
    @("ECU y telemetria", "ECU y telemetría"),
    @("Ensayo y validacion", "Ensayo y validación"),
    @("Propulsion UAV", "Propulsión UAV"),
    @("Desarrollo a medida", "Desarrollo a medida"),  # already correct
    @("Sistemas turbojet compactos europeos", "Sistemas turbojet compactos europeos"),  # ok
    @("accesorios, distribuidores y servicio tecnico", "accesorios, distribuidores y servicio técnico"),
    @("Todos los derechos reservados", "Todos los derechos reservados")  # ok
)

# --- motores/page.tsx ---
Fix-File "$base\motores\page.tsx" @(
    @("diametro, integracion ECU", "diámetro, integración ECU"),
    @("Portfolio de motores XM", "Portfolio de motores XM"),  # ok
    @("para UAV y plataformas target", "para UAV y plataformas target"),  # ok
    @("se seleccionan por empuje, masa, diametro", "se seleccionan por empuje, masa, diámetro"),
    @("integracion ECU y requisitos de validacion", "integración ECU y requisitos de validación"),
    @("plataformas aeroespaciales compactas", "plataformas aeroespaciales compactas"),  # ok
    @("compact turbojet engine", "motor turbojet compacto"),
    @('"Empuje"', '"Empuje"'),  # ok
    @('"Diametro"', '"Diámetro"'),
    @('<small>Diametro</small>', '<small>Diámetro</small>')
)

# --- accesorios/page.tsx ---
Fix-File "$base\accesorios\page.tsx" @(
    @("JetsMunt accessories", "JetsMunt accesorios"),
    @("para una seleccion tecnica rapida", "para una selección técnica rápida"),
    @("Accesorios de combustible, telemetria", "Accesorios de combustible, telemetría"),
    @("IVA no incluido cuando aplica", "IVA no incluido cuando aplica")  # ok
)

# --- distribuidores/page.tsx ---
Fix-File "$base\distribuidores\page.tsx" @(
    @("JetsMunt distributor network", "Red de distribuidores JetsMunt"),
    @("filtra solo centros de servicio. La lista se basa en el directorio oficial", "filtra solo centros de servicio. La lista se basa en el directorio oficial")  # ok
)

# --- servicio-tecnico/page.tsx ---
Fix-File "$base\servicio-tecnico\page.tsx" @(
    @("Servicio Tecnico", "Servicio Técnico"),
    @("tecnico para sistemas", "técnico para sistemas"),
    @("horas de uso si estan disponibles", "horas de uso si están disponibles"),
    @("inspeccion, reparacion o validacion", "inspección, reparación o validación"),
    @("preferido si ya se conoce", "preferido si ya se conoce")  # ok
)

# --- contacto/page.tsx ---
Fix-File "$base\contacto\page.tsx" @(
    @("Cuentanos que necesita tu plataforma", "Cuéntanos qué necesita tu plataforma"),
    @("Comparte clase de motor, accesorios, necesidades de servicio o requisitos de distribucion", "Comparte clase de motor, accesorios, necesidades de servicio o requisitos de distribución"),
    @("Consulta tecnica", "Consulta técnica"),
    @("Empieza por las restricciones que importan", "Empieza por las restricciones que importan"),  # ok
    @("mas rapido podra JetsMunt", "más rápido podrá JetsMunt"),
    @("paises", "países"),
    @("Espana", "España"),
    @("Telefono", "Teléfono"),
    @("Ubicacion", "Ubicación")
)

# --- [slug]/page.tsx (solution pages in ES but with EN content) ---
Fix-File "$base\[slug]\page.tsx" @(
    @("for compact aerospace platforms.", "para plataformas aeroespaciales compactas."),
    @("Built around program requirements.", "Adaptado a los requisitos del programa."),
    @("JetsMunt works with compact turbojet propulsion as an engineering system: engine hardware,
            ECU, telemetry, installation constraints, testing route and technical support. The objective
            is to help teams reduce propulsion risk before the platform reaches validation.", "JetsMunt trabaja con la propulsión turbojet compacta como sistema de ingeniería: motor, ECU, telemetría, restricciones de instalación, ruta de ensayo y soporte técnico. El objetivo es ayudar a los equipos a reducir el riesgo de propulsión antes de que la plataforma llegue a validación."),
    @("Relevant engine classes", "Clases de motor relevantes")
)

# --- products/[slug]/page.tsx (EN metadata on ES product pages) ---
Fix-File "$base\products\[slug]\page.tsx" @(
    @("Compact Turbojet Engine | JetsMunt", "Motor Turbojet Compacto | JetsMunt"),
    @("compact turbojet engine with", "motor turbojet compacto con"),
    @("thrust for UAV, target drone and advanced aerospace propulsion programs.", "de empuje para UAV, target drones y programas de propulsión aeroespacial avanzada."),
    @('"compact UAV turbojet engine"', '"motor turbojet compacto UAV"'),
    @('"target drone engine"', '"motor para target drone"'),
    @("Disenado para integracion real, no solo para catalogo.", "Diseñado para integración real, no solo para catálogo."),
    @("El {engine.name} esta orientado a equipos", "El {engine.name} está orientado a equipos"),
    @("en funcion de envolvente de aeronave, arquitectura de control, restricciones de instalacion", "en función de envolvente de aeronave, arquitectura de control, restricciones de instalación"),
    @("y ruta de validacion. JetsMunt acompana la seleccion mas alla del empuje", "y ruta de validación. JetsMunt acompaña la selección más allá del empuje"),
    @("incluyendo ECU,
              telemetria, combustible y necesidades de ensayo.", "incluyendo ECU, telemetría, combustible y necesidades de ensayo."),
    @("para UAV y plataformas target.", "para UAV y plataformas target."),
    @("Planificacion de integracion ECU", "Planificación de integración ECU"),
    @("Soporte de validacion en banco y preparacion de pruebas de vuelo.", "Soporte de validación en banco y preparación de pruebas de vuelo."),
    @("Disenado para integracion", "Diseñado para integración"),
    @("Especificaciones principales", "Especificaciones principales"),  # ok
    @("<dt>Diametro</dt>", "<dt>Diámetro</dt>"),
    @("Motor, ECU y soporte de telemetria", "Motor, ECU y soporte de telemetría"),
    @('"engine hardware"', '"motor turbojet"')
)

# --- ContactEnquiryForm.tsx ---
Fix-File "$base\components\ContactEnquiryForm.tsx" @(
    @("respondera usando los datos", "responderá usando los datos"),
    @("Pais", "País"),
    @("Telefono / WhatsApp", "Teléfono / WhatsApp"),
    @("Selecciona una opcion", "Selecciona una opción"),
    @("Seleccion de motor", "Selección de motor"),
    @("Servicio tecnico", "Servicio técnico"),
    @("Integracion de ingenieria", "Integración de ingeniería"),
    @("Tipo de consulta", "Tipo de consulta"),  # ok
    @("consulta tecnica", "consulta técnica"),
    @("Notas del proyecto", "Notas del proyecto"),  # ok
    @("Enviando consulta", "Enviando consulta")  # ok
)

Write-Host "`n✅ All fixes applied."

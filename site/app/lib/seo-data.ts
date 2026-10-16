 
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jetsmuntdefense.com";

export interface Engine {
  name: string;
  slug: string;
  thrust: string;
  weight: string;
  diameter: string;
  img: string;
  summary: string;
  summaryEs: string;
  summaryFr: string;
  weightEs?: string;
  weightFr?: string;
  diameterEs?: string;
  diameterFr?: string;
}

export const engines: Engine[] = [
  {
    name: "XM98NG",
    slug: "xm98ng",
    thrust: "98 N",
    weight: "968 g",
    diameter: "88 mm",
    img: "/media/turbina/m166ts-0.jpg",
    summary: "Compact turbojet engine for small UAV, target drone and experimental aerospace platforms.",
    summaryEs: "Motor turbojet compacto para UAV pequeños, target drones y plataformas aeroespaciales experimentales.",
    summaryFr: "Moteur turboréacteur compact pour petits UAV, drones cibles et plateformes aérospatiales expérimentales.",
  },
  {
    name: "XM122NG",
    slug: "xm122ng",
    thrust: "122 N",
    weight: "978 g",
    diameter: "88 mm",
    img: "/media/turbina/m166ts-1.jpg",
    summary: "Lightweight propulsion class for UAV programs that need a compact thrust step with controlled installation mass.",
    summaryEs: "Clase de propulsión ligera para programas UAV que necesitan un escalón de empuje compacto con masa de instalación controlada.",
    summaryFr: "Classe de propulsion légère pour les programmes UAV nécessitant un palier de poussée compact avec une masse d'installation contrôlée.",
  },
  {
    name: "XM166NG",
    slug: "xm166ng",
    thrust: "166 N",
    weight: "1,420 g",
    diameter: "112 mm",
    img: "/media/turbina/m166ts-2.jpg",
    summary: "Mid-range compact turbojet platform for demanding unmanned aircraft integration and validation work.",
    summaryEs: "Plataforma turbojet compacta de rango medio para trabajos exigentes de integración y validación de aeronaves no tripuladas.",
    summaryFr: "Plateforme turboréacteur compacte de milieu de gamme pour les travaux d'intégration et de validation d'aéronefs sans pilote exigeants.",
  },
  {
    name: "XM182NG",
    slug: "xm182ng",
    thrust: "182 N",
    weight: "1.435 g",
    diameter: "102 mm",
    img: "/media/turbina/m166ts-2.jpg",
    summary: "Compact XM turbojet class for UAV programs requiring a thrust step above the XM166NG range.",
    summaryEs: "Clase turbojet XM compacta para programas UAV que requieren un escalón de empuje por encima del rango del XM166NG.",
    summaryFr: "Classe turboréacteur XM compacte pour les programmes UAV nécessitant un palier de poussée supérieur à la gamme XM166NG.",
  },
  {
    name: "XM210NG",
    slug: "xm210ng",
    thrust: "210 N",
    weight: "1.785 g",
    diameter: "110,9 mm",
    img: "/media/turbina/m166ts-3.jpg",
    summary: "Higher-thrust XM propulsion class for compact unmanned aircraft and target platform integration studies.",
    summaryEs: "Clase de propulsión XM de mayor empuje para estudios de integración de aeronaves no tripuladas compactas y plataformas target.",
    summaryFr: "Classe de propulsion XM à plus forte poussée pour les études d'intégration d'aéronefs sans pilote compacts et de plateformes cibles.",
  },
  {
    name: "XM222NG",
    slug: "xm222ng",
    thrust: "222 N",
    weight: "1.800 g",
    diameter: "110,9 mm",
    img: "/media/turbina/m166ts-3.jpg",
    summary: "Compact turbojet engine class for advanced UAV programs that need increased thrust margin.",
    summaryEs: "Clase de motor turbojet compacto para programas UAV avanzados que necesitan mayor margen de empuje.",
    summaryFr: "Classe de moteur turboréacteur compact pour les programmes UAV avancés qui nécessitent une plus grande marge de poussée.",
  },
  {
    name: "XM250NG",
    slug: "xm250ng",
    thrust: "250 N",
    weight: "2.080 g",
    diameter: "122 mm",
    img: "/media/turbina/m166ts-3.jpg",
    summary: "250 N compact turbojet propulsion class for demanding UAV and special mission platform requirements.",
    summaryEs: "Clase de propulsión turbojet compacta de 250 N para requerimientos exigentes de UAV y plataformas de misiones especiales.",
    summaryFr: "Classe de propulsion turboréacteur compacte de 250 N pour les exigences des UAV et plateformes de missions spéciales.",
  },
  {
    name: "XM255NG",
    slug: "xm255ng",
    thrust: "255 N",
    weight: "2,080 g",
    diameter: "132 mm",
    img: "/media/turbina/m166ts-3.jpg",
    summary: "High-thrust XM engine class for advanced UAV and target platform propulsion requirements.",
    summaryEs: "Clase de motor XM de alto empuje para requisitos de propulsión de UAV avanzados y plataformas target.",
    summaryFr: "Classe de moteur XM à forte poussée pour les exigences de propulsion des UAV avancés et des plateformes cibles.",
  },
  {
    name: "XM262NG",
    slug: "xm262ng",
    thrust: "262 N",
    weight: "2.095 g",
    diameter: "122 mm",
    img: "/media/turbina/m166ts-3.jpg",
    summary: "Highest thrust compact turbojet propulsion package for advanced and high-payload unmanned aircraft.",
    summaryEs: "Paquete de propulsión turbojet compacto de máximo empuje para aeronaves no tripuladas avanzadas y de alta carga de pago.",
    summaryFr: "Ensemble de propulsion turboréacteur compact à poussée maximale pour les aéronefs sans pilote avancés et à forte charge utile.",
  },
];

export const proEngines: Engine[] = [
  {
    name: "XM215 PRO",
    slug: "xm215-pro",
    thrust: "215 N",
    weight: "1.820 g",
    diameter: "73.9 mm",
    img: "/media/215/motor-turbojet-xm215-pro-1.png",
    summary: "Professional compact turbojet propulsion class for programs requiring engineering support, telemetry and validation depth.",
    summaryEs: "Clase de propulsión turbojet compacta profesional para programas que requieren soporte de ingeniería, telemetría y profundidad de validación.",
    summaryFr: "Classe de propulsion turboréacteur compacte professionnelle pour les programmes nécessitant un support d'ingénierie, de la télémétrie et une validation approfondie.",
  },
  {
    name: "XM255 PRO",
    slug: "xm255-pro",
    thrust: "255 N",
    weight: "2.080 g",
    diameter: "122 mm",
    img: "/media/255/motor-turbojet-xm255-pro-7.png",
    summary: "Professional high-thrust compact turbojet package for advanced UAV and target platform propulsion programs.",
    summaryEs: "Paquete turbojet compacto profesional de alto empuje para programas avanzados de propulsión de UAV y plataformas target.",
    summaryFr: "Pack turboréacteur compact professionnel à forte poussée pour les programmes avancés de propulsion d'UAV et de plateformes cibles.",
  },
];

export const solutionPages = [
  {
    title: "UAV Propulsion Systems",
    slug: "uav-propulsion",
    label: "UAV Propulsion",
    image: "/media/capabilities/uav-integration.png",
    description:
      "European ITAR-free compact turbojet propulsion systems (98 N - 255 N) engineered for industrial UAVs, target drones, and tactical unmanned aerospace platforms.",
    keywords: [
      "uav propulsion systems",
      "small turbojet engine for uav",
      "compact turbojet propulsion",
      "itar-free uav engines",
      "target drone propulsion systems",
      "european turbojet oem",
      "compact turbojet engines"
    ],
    points: [
      "100% European design and manufacturing in Spain: ITAR-free supply chain for global defense and civilian aerospace contractors.",
      "High power-to-weight microturbines delivering 98 N to 255 N of axial thrust for tactical UAVs and high-speed target drones.",
      "Integrated digital ECU with real-time CAN Bus & serial telemetry for platform avionics synchronization and in-flight health monitoring.",
      "Brushless starter-generator and multi-fuel compatibility (Jet A-1, Diesel, Kerosene) engineered for rapid deployment and austere field operations.",
      "Full engineering integration support: 3D CAD modeling (.STEP), bench validation, and custom mounting envelopes."
    ],
  },
  {
    title: "UAV Integration",
    slug: "uav-integration",
    label: "UAV integration",
    image: "/media/capabilities/uav-integration.png",
    description:
      "Integration support for compact turbojet engines, fuel architecture, control interfaces and platform validation.",
    keywords: ["UAV integration", "turbojet UAV integration", "UAV engine installation"],
    points: [
      "Installation review around airframe volume, intake, exhaust, fuel and service access.",
      "Control interface alignment for ECU, telemetry and platform avionics.",
      "Validation planning from bench setup to flight-test readiness.",
    ],
  },
  {
    title: "Target Drone Propulsion",
    slug: "target-drone-propulsion",
    label: "Target drones",
    image: "/media/capabilities/target-drones.png",
    description:
      "Compact turbojet engines and engineering support for target drone and special mission platforms.",
    keywords: ["target drone propulsion", "target UAV engine", "compact turbojet target drone"],
    points: [
      "Compact thrust density for constrained airframes and repeatable mission profiles.",
      "Telemetry-ready engine control for test, training and validation programs.",
      "European manufacturing and technical support from the propulsion team.",
    ],
  },
  {
    title: "Loitering Munition Propulsion",
    slug: "loitering-munition-propulsion",
    label: "Special mission propulsion",
    image: "/media/capabilities/target-drones.png",
    description:
      "Compact turbojet propulsion considerations for special mission unmanned platforms with constrained envelopes.",
    keywords: ["loitering munition propulsion", "special mission UAV propulsion", "compact turbojet UAV"],
    points: [
      "Propulsion class review around compact airframes and mission duty cycle.",
      "Telemetry and control data for validation-focused unmanned programs.",
      "European engineering support for technical evaluation and integration planning.",
    ],
  },
  {
    title: "Compact Turbojet Engines",
    slug: "compact-turbojet-engines",
    label: "Compact turbojets",
    image: "/media/turbina/m166ts-2.jpg",
    description:
      "Small and compact turbojet engine classes for UAV, target drone, research and advanced aerospace platforms.",
    keywords: ["compact turbojet engines", "small turbojet engines", "small jet engine for UAV"],
    points: [
      "Engine classes from 98 N to 255 N for compact platform studies.",
      "Selection around thrust, mass, diameter, operating profile and validation needs.",
      "System view covering engine, ECU, telemetry and support route.",
    ],
  },
  {
    title: "Propulsion Architecture",
    slug: "propulsion-architecture",
    label: "Architecture",
    image: "/media/photos/jetsmunt-galeria-motores-24.png",
    description:
      "Engine, ECU, telemetry, sensors, fuel system and support architecture designed as one propulsion stack.",
    keywords: ["turbojet propulsion architecture", "UAV engine ECU", "telemetry turbojet engine"],
    points: [
      "Engine hardware, control electronics and telemetry treated as one integrated system.",
      "CAN Bus, serial interfaces, sensors and data logging aligned to platform needs.",
      "Architecture review for installation, operation, diagnostics and serviceability.",
    ],
  },
  {
    title: "Electronics and Telemetry",
    slug: "electronics-telemetry",
    label: "ECU telemetry",
    image: "/media/capabilities/electronics-telemetry.png",
    description:
      "Control electronics, sensors, telemetry interfaces and data logging for compact turbojet programs.",
    keywords: ["turbojet ECU", "UAV engine telemetry", "CAN Bus engine control"],
    points: [
      "ECU, sensor and telemetry configuration for unmanned aircraft applications.",
      "Data capture for bench testing, flight testing and engineering analysis.",
      "Control interfaces prepared for integration with platform avionics.",
    ],
  },
  {
    title: "ECU Control Systems",
    slug: "ecu-control-systems",
    label: "ECU control",
    image: "/media/capabilities/electronics-telemetry.png",
    description:
      "Turbojet ECU control systems, sensor inputs, telemetry interfaces and data paths for UAV propulsion programs.",
    keywords: ["turbojet ECU control", "UAV engine ECU", "compact turbojet control system"],
    points: [
      "ECU configuration aligned with engine class and platform requirements.",
      "Sensor and telemetry data available for diagnostics, validation and support.",
      "Control interface planning for program-level integration.",
    ],
  },
  {
    title: "Engineering Development",
    slug: "engineering-development",
    label: "Engineering",
    image: "/media/capabilities/custom-development.png",
    description:
      "Custom development, prototype adaptation and propulsion engineering support for advanced programs.",
    keywords: ["custom turbojet development", "UAV propulsion engineering", "turbojet prototype support"],
    points: [
      "Mission profile review and propulsion class recommendation.",
      "Dimensional, control and support adaptation for program constraints.",
      "Engineering feedback loop from concept through bench and flight validation.",
    ],
  },
  {
    title: "Engineering Custom Development",
    slug: "engineering-custom-development",
    label: "Custom development",
    image: "/media/capabilities/custom-development.png",
    description:
      "Custom compact turbojet development support for platform constraints, prototype adaptation and validation planning.",
    keywords: ["engineering custom development", "custom UAV propulsion", "custom turbojet engine development"],
    points: [
      "Technical review of mission profile, airframe constraints and target thrust.",
      "Prototype support around hardware, electronics and integration interfaces.",
      "Engineering feedback during bench, flight-test and program validation phases.",
    ],
  },
  {
    title: "Testing and Validation",
    slug: "testing-validation",
    label: "Testing",
    image: "/media/capabilities/testing-validation.png",
    description:
      "Bench setup, performance analysis and validation support for compact turbojet propulsion systems.",
    keywords: ["turbojet testing", "UAV engine validation", "propulsion bench testing"],
    points: [
      "Bench testing preparation for thrust, thermal and control behavior.",
      "Performance data review before platform-level testing.",
      "Support for flight-test readiness and post-test engineering analysis.",
    ],
  },
  {
    title: "Manufacturing in Spain",
    slug: "manufacturing-in-spain",
    label: "Spain manufacturing",
    image: "/media/capabilities/manufacturing-spain.png",
    description:
      "European compact turbojet design, manufacturing, assembly and technical support from Spain.",
    keywords: ["Spanish turbojet manufacturer", "European turbojet engines", "compact turbine manufacturing"],
    points: [
      "European design and manufacturing control for compact turbojet systems.",
      "Assembly, service and support connected to the engineering team.",
      "B2B supply conversations built around program requirements.",
    ],
  },
  {
    title: "ITAR-Free European Propulsion Systems",
    slug: "itar-free-propulsion",
    label: "ITAR-Free Propulsion",
    image: "/media/capabilities/manufacturing-spain.png",
    description:
      "100% European sovereign ITAR-free compact turbojet propulsion systems (98 N - 255 N) designed and manufactured in Spain for defense, civil UAVs, and special aerospace programs.",
    keywords: [
      "itar-free turbojet engines",
      "itar free uav propulsion",
      "european microturbojet manufacturer",
      "sovereign uav propulsion europe",
      "european compact jet engines oem",
      "itar-free drone engines"
    ],
    points: [
      "100% European design, firmware and precision manufacturing in Arenys de Munt (Barcelona, Spain): Sovereign ITAR-free supply chain.",
      "Zero export licensing delays from the US State Department: Unrestricted civilian and defense aerospace program timelines.",
      "Technical exemption under EU Dual-Use Regulation 2021/821 (Control Entry 9A101) operating under 1 kN thrust and exceeding 0.018 kg/(N·h) SFC.",
      "Full traceability and supply chain compliance meeting NATO and European procurement sovereignty standards.",
      "Direct OEM engineering collaboration: 3D CAD modeling (.STEP), CAN Bus telemetry integration, and custom airframe adaptation."
    ],
  },
  {
    title: "Aerospace Research & Academic Propulsion",
    slug: "aerospace-research-propulsion",
    label: "Aerospace Research",
    image: "/media/capabilities/testing-validation.png",
    description:
      "Precision axial-flow compact microturbines engineered for university aerospace laboratories, high-speed wind tunnels, test benches, and SAF alternative fuel research.",
    keywords: [
      "micro gas turbine wind tunnel testing",
      "axial flow turbine academic research",
      "aerospace r&d microturbojet",
      "saf alternative fuel microturbine testing",
      "test bench micro jet engine",
      "university aerospace propulsion"
    ],
    points: [
      "Precision axial-flow microturbines optimized for aerodynamic wind tunnels and thermodynamic test benches.",
      "High-speed real-time telemetry output directly to university DAQ and dataloggers via CAN Bus and RS232 serial interfaces.",
      "Extensive validation for Sustainable Aviation Fuels (SAF), bio-kerosene, and Jet A-1 blends with full EGT and emissions logging.",
      "Integrated barometric and ambient temperature sensors for automated atmospheric compensation during indoor testing.",
      "Academic engineering partnership: CAD models, integration guidelines, and direct factory technical support for research departments."
    ],
  },
];

export const localizedSolutionPages = solutionPages.map((page) => {
  const localizedEs: Record<string, {
    slug: string;
    title: string;
    label: string;
    description: string;
    points: string[];
    keywords: string[];
  }> = {
    "uav-propulsion": {
        "slug": "propulsion-uav",
        "title": "Sistemas de Propulsión UAV",
        "label": "Propulsión UAV",
        "description": "Sistemas de propulsión turbojet compactos (98 N - 255 N) 100% europeos y libres de ITAR para UAV industriales, target drones y plataformas aeroespaciales avanzadas.",
        "keywords": [
            "sistemas de propulsión UAV",
            "motores turbojet para UAV",
            "propulsión turbojet compacta",
            "motores uav libres de itar",
            "propulsión target drones",
            "fabricante europeo de microturbinas"
        ],
        "points": [
            "Diseño y fabricación 100% en España: Cadena de suministro europea libre de restricciones ITAR.",
            "Microturbinas compactas de alta densidad de empuje (98 N a 255 N) para misiones críticas y aeronaves tácticas.",
            "ECU digital integrada con telemetría en tiempo real por CAN Bus y bus serie para integración con aviónica de abordo.",
            "Arranque brushless de respuesta inmediata y compatibilidad multicombustible (Jet A-1, Diésel, Queroseno).",
            "Soporte directo de integración de ingeniería: archivos 3D CAD (.STEP), validación en banco de pruebas y envolventes a medida."
        ]
    },
    "uav-integration": {
        "slug": "integracion-uav",
        "title": "Integración UAV",
        "label": "Integración UAV",
        "description": "Soporte de integración para motores turbojet compactos, arquitectura de combustible, interfaces de control y validación de plataforma.",
        "keywords": [
            "integración UAV",
            "integración turbojet UAV",
            "instalación motor UAV"
        ],
        "points": [
            "Revisión de instalación de volumen, admisión, escape, combustible y acceso de servicio.",
            "Alineación de interfaces de control para ECU, telemetría y aviónica de plataforma.",
            "Planificación de validación desde el banco hasta la preparación para ensayos en vuelo."
        ]
    },
    "target-drone-propulsion": {
        "slug": "propulsion-target-drone",
        "title": "Propulsión Target Drone",
        "label": "Target drones",
        "description": "Motores turbojet compactos y soporte de ingeniería para target drones y plataformas de misiones especiales.",
        "keywords": [
            "propulsión target drone",
            "motor target UAV",
            "turbojet compacto target drone"
        ],
        "points": [
            "Densidad de empuje compacta para fuselajes restringidos y perfiles de misión repetibles.",
            "Control de motor preparado para telemetría, pruebas, entrenamiento y validación.",
            "Fabricación europea y soporte técnico del equipo de propulsión."
        ]
    },
    "loitering-munition-propulsion": {
        "slug": "propulsion-misiones-especiales",
        "title": "Propulsión para Misiones Especiales",
        "label": "Misiones especiales",
        "description": "Consideraciones de propulsión turbojet compacta para plataformas no tripuladas de misiones especiales con envolventes limitadas.",
        "keywords": [
            "propulsión misiones especiales",
            "propulsión UAV compacta",
            "turbojet UAV compacto"
        ],
        "points": [
            "Revisión de la clase de propulsión en torno a fuselajes compactos y ciclos de misión.",
            "Datos de telemetría y control para programas no tripulados enfocados en validación.",
            "Soporte de ingeniería europeo para evaluación técnica y planificación de integración."
        ]
    },
    "compact-turbojet-engines": {
        "slug": "motores-turbojet-compactos",
        "title": "Motores Turbojet Compactos",
        "label": "Turbojets compactos",
        "description": "Clases de motores turbojet pequeños y compactos para UAV, target drones, investigación y plataformas aeroespaciales avanzadas.",
        "keywords": [
            "motores turbojet compactos",
            "motores turbojet pequeños",
            "motor jet UAV"
        ],
        "points": [
            "Clases de motores desde 98 N hasta 255 N para estudios de plataformas compactas.",
            "Selección por empuje, masa, diámetro, perfil operativo y necesidades de validación.",
            "Visión de sistema que cubre motor, ECU, telemetría y ruta de soporte."
        ]
    },
    "propulsion-architecture": {
        "slug": "arquitectura-propulsion",
        "title": "Arquitectura de Propulsión",
        "label": "Arquitectura",
        "description": "Motor, ECU, telemetría, sensores, sistema de combustible y arquitectura de soporte diseñados como un único sistema de propulsión.",
        "keywords": [
            "arquitectura propulsión turbojet",
            "ECU motor UAV",
            "telemetría motor turbojet"
        ],
        "points": [
            "Hardware del motor, electrónica de control y telemetría tratados como un sistema integrado.",
            "CAN Bus, interfaces en serie, sensores y registro de datos alineados a la plataforma.",
            "Revisión de arquitectura para instalación, operación, diagnóstico y mantenimiento."
        ]
    },
    "electronics-telemetry": {
        "slug": "electronica-telemetria",
        "title": "Electrónica y Telemetría",
        "label": "ECU telemetría",
        "description": "Electrónica de control, sensores, interfaces de telemetría y registro de datos para programas de turbojets compactos.",
        "keywords": [
            "ECU turbojet",
            "telemetría motor UAV",
            "control motor CAN Bus"
        ],
        "points": [
            "Configuración de ECU, sensores y telemetría para aplicaciones de aeronaves no tripuladas.",
            "Captura de datos para pruebas de banco, ensayos en vuelo y análisis de ingeniería.",
            "Interfaces de control preparadas para integración con la aviónica de la plataforma."
        ]
    },
    "ecu-control-systems": {
        "slug": "sistemas-control-ecu",
        "title": "Sistemas de Control ECU",
        "label": "Control ECU",
        "description": "Sistemas de control ECU de turbojet, sensores, interfaces de telemetría y rutas de datos para programas de propulsión UAV.",
        "keywords": [
            "control ECU turbojet",
            "ECU motor UAV",
            "sistema control turbojet compacto"
        ],
        "points": [
            "Configuración de ECU alineada con la clase de motor y requisitos de plataforma.",
            "Datos de sensores y telemetría disponibles para diagnósticos, validación y soporte.",
            "Planificación de interfaces de control para integración a nivel de programa."
        ]
    },
    "engineering-development": {
        "slug": "desarrollo-ingenieria",
        "title": "Desarrollo de Ingeniería",
        "label": "Ingeniería",
        "description": "Desarrollo personalizado, adaptación de prototipos y soporte de ingeniería de propulsión para programas avanzados.",
        "keywords": [
            "desarrollo turbojet",
            "ingeniería propulsión UAV",
            "soporte prototipo turbojet"
        ],
        "points": [
            "Revisión de perfil de misión y recomendación de clase de propulsión.",
            "Adaptación dimensional, de control y soporte para restricciones del programa.",
            "Retroalimentación de ingeniería desde el concepto hasta la validación en banco y en vuelo."
        ]
    },
    "engineering-custom-development": {
        "slug": "desarrollo-medida",
        "title": "Desarrollo a Medida",
        "label": "Desarrollo a medida",
        "description": "Soporte de desarrollo de turbojets compactos a medida para restricciones de plataforma, adaptación de prototipos y validación.",
        "keywords": [
            "desarrollo a medida",
            "propulsión UAV personalizada",
            "desarrollo motor turbojet"
        ],
        "points": [
            "Revisión técnica de la misión, restricciones del fuselaje y empuje objetivo.",
            "Soporte de prototipo para hardware, electrónica e interfaces de integración.",
            "Retroalimentación durante el banco, ensayos en vuelo y fases de validación."
        ]
    },
    "testing-validation": {
        "slug": "ensayos-validacion",
        "title": "Ensayos y Validación",
        "label": "Ensayos",
        "description": "Configuración de banco, análisis de rendimiento y soporte de validación para sistemas de propulsión turbojet compactos.",
        "keywords": [
            "ensayos turbojet",
            "validación motor UAV",
            "ensayos banco propulsión"
        ],
        "points": [
            "Preparación de pruebas de banco para empuje, térmica y comportamiento de control.",
            "Revisión de datos de rendimiento antes de pruebas a nivel de plataforma.",
            "Soporte para la preparación de ensayos en vuelo y análisis de ingeniería."
        ]
    },
    "manufacturing-in-spain": {
        "slug": "fabricacion-espana",
        "title": "Fabricación en España",
        "label": "Fabricación España",
        "description": "Diseño, fabricación, montaje y soporte técnico europeo de turbojets compactos desde España.",
        "keywords": [
            "fabricante turbojet español",
            "motores turbojet europeos",
            "fabricación turbina compacta"
        ],
        "points": [
            "Diseño europeo y control de fabricación para sistemas de turbojet compactos.",
            "Montaje, servicio y soporte conectados al equipo de ingeniería.",
            "Conversaciones de suministro B2B estructuradas en torno a requisitos del programa."
        ]
    },
    "itar-free-propulsion": {
        "slug": "propulsion-libre-itar",
        "title": "Sistemas de Propulsión Soberanos Libres de ITAR",
        "label": "Propulsión sin ITAR",
        "description": "Sistemas de propulsión microturbojet (98 N - 255 N) 100% europeos y libres de ITAR/EAR. Fabricación española en Barcelona para programas de defensa y UAV tácticos.",
        "keywords": [
            "propulsión libre de itar",
            "motores turbojet sin itar",
            "fabricante europeo microturbinas",
            "propulsión soberana uav",
            "motores uav defensa europa",
            "motores a reacción libres de itar"
        ],
        "points": [
            "Diseño, firmware y fabricación de precisión 100% en España (Arenys de Munt, Barcelona): Cadena de suministro soberana europea.",
            "Cero retrasos burocráticos del Departamento de Estado de EE. UU.: Plazos de entrega y exportación predecibles para programas civiles y de defensa.",
            "Exención técnica bajo el Reglamento de Doble Uso de la UE (UE 2021/821, control 9A101) al operar bajo 1 kN de empuje y superar 0,018 kg/(N·h) de SFC.",
            "Trazabilidad completa de materiales y certificación de origen para cumplimiento en adquisiciones OTAN y comunitarias.",
            "Soporte directo de ingeniería: Modelos 3D CAD (.STEP), integración de telemetría CAN Bus y adaptación a envolventes mecánicas a medida."
        ]
    },
    "aerospace-research-propulsion": {
        "slug": "propulsion-investigacion-aeroespacial",
        "title": "Propulsión para Investigación Aeroespacial y Universidades",
        "label": "Investigación aeroespacial",
        "description": "Microturbinas axiales de alta precisión para laboratorios aeroespaciales universitarios, túneles de viento, bancos de ensayo y experimentación con combustibles sostenibles SAF.",
        "keywords": [
            "turbina para túnel de viento",
            "microturbojet para investigación universitaria",
            "banco de ensayo de turbinas pequeñas",
            "experimentación con combustible saf uav",
            "propulsión aeroespacial académica",
            "microturbina flujo axial laboratorio"
        ],
        "points": [
            "Microturbinas de flujo axial optimizadas para ensayos aerodinámicos en túneles de viento y bancos dinamométricos de precisión.",
            "Telemetría digital de alta frecuencia con volcado directo a sistemas DAQ universitarios mediante CAN Bus y bus serie RS232.",
            "Validación exhaustiva para combustibles sostenibles de aviación (SAF), bioqueroseno y mezclas Jet A-1 con registro continuo de EGT y emisiones.",
            "Sensores barométricos y térmicos ambientales integrados para compensación atmosférica automática en ensayos de laboratorio cerrado.",
            "Acuerdos de colaboración académica: modelos CAD, manuales de integración avanzados y soporte técnico directo de fábrica para departamentos de I+D."
        ]
    }
};

  const localized: Record<string, {
    slug: string;
    title: string;
    label: string;
    description: string;
    points: string[];
    keywords: string[];
  }> = {
    "uav-propulsion": {
      slug: "propulsion-uav",
      title: "Systèmes de Propulsion UAV",
      label: "Propulsion UAV",
      description: "Systèmes de propulsion turboréacteur compacts (98 N - 255 N) 100% européens et exempts d'ITAR pour drones industriels, drones cibles et plateformes aérospatiales avancées.",
      keywords: [
        "systèmes de propulsion UAV",
        "moteurs turboréacteurs pour drones",
        "propulsion turboréacteur compacte",
        "moteurs UAV sans ITAR",
        "propulsion drones cibles",
        "fabricant européen de microturbines"
      ],
      points: [
        "Conception et fabrication 100% en Espagne : chaîne d'approvisionnement européenne sans contraintes ITAR.",
        "Microturbines compactes à haute densité de poussée (98 N à 255 N) pour missions tactiques et drones d'entraînement haute vitesse.",
        "ECU numérique intégrée avec télémétrie temps réel via bus CAN et liaison série pour interconnexion avec l'avionique de bord.",
        "Démarrage brushless immédiat et compatibilité multi-carburants (Jet A-1, Diesel, Kérosène).",
        "Support technique d'intégration direct : modèles 3D CAD (.STEP), validation au banc et adaptation des enveloppes sur mesure."
      ],
    },
    "uav-integration": {
      slug: "integration-uav",
      title: "Integration UAV",
      label: "Integration UAV",
      description: "Support d'integration pour moteurs turbojet compacts, architecture carburant, interfaces de controle et validation plateforme.",
      keywords: ["integration UAV", "integration turbojet UAV", "installation moteur UAV"],
      points: [
        "Revue installation autour du volume, admission, echappement, carburant et acces service.",
        "Alignement ECU, telemetrie et avionique plateforme.",
        "Planification validation du banc jusqu'a la preparation des essais en vol.",
      ],
    },
    "target-drone-propulsion": {
      slug: "propulsion-drone-cible",
      title: "Propulsion Drone Cible",
      label: "Drones cibles",
      description: "Moteurs turbojet compacts et support ingenierie pour drones cibles et plateformes mission speciale.",
      keywords: ["propulsion drone cible", "moteur drone cible", "turbojet compact drone cible"],
      points: [
        "Densite de poussee compacte pour cellules contraintes et profils repetables.",
        "Controle moteur pret pour telemetrie, essais, entrainement et validation.",
        "Fabrication europeenne et support technique par l'equipe propulsion.",
      ],
    },
    "loitering-munition-propulsion": {
      slug: "propulsion-uav-mission-speciale",
      title: "Propulsion UAV Mission Speciale",
      label: "Mission speciale",
      description: "Considerations de propulsion turbojet compacte pour plateformes UAV de mission speciale a enveloppe contrainte.",
      keywords: ["propulsion UAV mission speciale", "propulsion UAV compacte", "turbojet compact UAV"],
      points: [
        "Revue de classe de propulsion selon cellule compacte et cycle mission.",
        "Donnees de telemetrie et controle pour programmes orientes validation.",
        "Support ingenierie europeen pour evaluation technique et integration.",
      ],
    },
    "compact-turbojet-engines": {
      slug: "moteurs-turbojet-compacts",
      title: "Moteurs Turbojet Compacts",
      label: "Turbojets compacts",
      description: "Classes de moteurs turbojet petits et compacts pour UAV, drones cibles, recherche et plateformes aerospatiales avancees.",
      keywords: ["moteurs turbojet compacts", "petit moteur turbojet", "moteur jet UAV"],
      points: [
        "Classes moteur de 98 N a 255 N pour etudes de plateformes compactes.",
        "Selection selon poussee, masse, diametre, profil d'operation et validation.",
        "Vision systeme: moteur, ECU, telemetrie et route de support.",
      ],
    },
    "propulsion-architecture": {
      slug: "architecture-propulsion",
      title: "Architecture Propulsion",
      label: "Architecture",
      description: "Moteur, ECU, telemetrie, capteurs, systeme carburant et support concus comme une pile propulsion integree.",
      keywords: ["architecture propulsion turbojet", "ECU moteur UAV", "telemetrie moteur turbojet"],
      points: [
        "Materiel moteur, electronique de controle et telemetrie traites comme un systeme.",
        "CAN Bus, interfaces serie, capteurs et datalogging alignes aux besoins plateforme.",
        "Revue architecture pour installation, operation, diagnostic et maintenance.",
      ],
    },
    "electronics-telemetry": {
      slug: "electronique-telemetrie",
      title: "Electronique et Telemetrie",
      label: "ECU telemetrie",
      description: "Electronique de controle, capteurs, interfaces telemetrie et datalogging pour programmes turbojet compacts.",
      keywords: ["ECU turbojet", "telemetrie moteur UAV", "controle moteur CAN Bus"],
      points: [
        "Configuration ECU, capteurs et telemetrie pour applications UAV.",
        "Capture de donnees pour banc, essais en vol et analyse ingenierie.",
        "Interfaces de controle preparees pour avionique plateforme.",
      ],
    },
    "ecu-control-systems": {
      slug: "systemes-controle-ecu",
      title: "Systemes de Controle ECU",
      label: "Controle ECU",
      description: "Systemes de controle ECU turbojet, entrees capteurs, interfaces telemetrie et chemins de donnees pour propulsion UAV.",
      keywords: ["controle ECU turbojet", "ECU moteur UAV", "systeme controle turbojet compact"],
      points: [
        "Configuration ECU alignee avec classe moteur et exigences plateforme.",
        "Donnees capteurs et telemetrie disponibles pour diagnostic, validation et support.",
        "Planification interfaces de controle pour integration programme.",
      ],
    },
    "engineering-development": {
      slug: "developpement-ingenierie",
      title: "Developpement Ingenierie",
      label: "Ingenierie",
      description: "Developpement specifique, adaptation prototype et support ingenierie propulsion pour programmes avances.",
      keywords: ["developpement turbojet", "ingenierie propulsion UAV", "support prototype turbojet"],
      points: [
        "Revue profil mission et recommandation de classe propulsion.",
        "Adaptation dimensionnelle, controle et support selon contraintes programme.",
        "Boucle feedback ingenierie du concept a la validation banc et vol.",
      ],
    },
    "engineering-custom-development": {
      slug: "developpement-sur-mesure",
      title: "Developpement Sur Mesure",
      label: "Sur mesure",
      description: "Support developpement turbojet compact sur mesure pour contraintes plateforme, adaptation prototype et validation.",
      keywords: ["developpement sur mesure", "propulsion UAV sur mesure", "developpement moteur turbojet"],
      points: [
        "Revue technique mission, contraintes cellule et poussee cible.",
        "Support prototype autour du materiel, electronique et interfaces.",
        "Feedback ingenierie pendant banc, essais en vol et validation programme.",
      ],
    },
    "testing-validation": {
      slug: "essais-validation",
      title: "Essais et Validation",
      label: "Essais",
      description: "Banc d'essai, analyse performance et support validation pour systemes de propulsion turbojet compacts.",
      keywords: ["essais turbojet", "validation moteur UAV", "banc propulsion"],
      points: [
        "Preparation banc pour poussee, thermique et comportement controle.",
        "Revue donnees performance avant essais plateforme.",
        "Support preparation vol et analyse ingenierie apres essai.",
      ],
    },
    "manufacturing-in-spain": {
      slug: "fabrication-espagne",
      title: "Fabrication en Espagne",
      label: "Fabrication Espagne",
      description: "Conception, fabrication, assemblage et support technique europeens de turbojets compacts depuis l'Espagne.",
      keywords: ["fabricant turbojet espagnol", "moteurs turbojet europeens", "fabrication turbine compacte"],
      points: [
        "Controle conception et fabrication europeen pour systemes turbojet compacts.",
        "Assemblage, service et support connectes a l'equipe ingenierie.",
        "Conversations B2B basees sur exigences programme.",
      ],
    },
    "itar-free-propulsion": {
      slug: "propulsion-sans-itar",
      title: "Systèmes de Propulsion Souverains Sans ITAR",
      label: "Propulsion sans ITAR",
      description: "Systèmes de propulsion microturboréacteur (98 N - 255 N) 100% européens et exempts d'ITAR/EAR. Fabrication espagnole à Barcelone pour drones tactiques et programmes de défense.",
      keywords: [
        "propulsion sans itar",
        "turboréacteurs uav sans itar",
        "fabricant européen microturbines",
        "propulsion souveraine europe",
        "moteurs drones défense europe",
        "microturboréacteurs libres d'itar"
      ],
      points: [
        "Conception, firmware et usinage de précision 100% en Espagne (Arenys de Munt, Barcelone) : Chaîne d'approvisionnement européenne souveraine.",
        "Zéro blocage administratif du Département d'État américain : Calendriers de déploiement et d'exportation garantis.",
        "Exemption technique sous le Règlement Double Usage de l'UE (UE 2021/821, contrôle 9A101) : poussée sous 1 kN et SFC supérieur à 0,018 kg/(N·h).",
        "Traçabilité rigoureuse des matériaux et certification d'origine conforme aux standards d'acquisition de l'OTAN et de l'UE.",
        "Collaboration directe avec nos ingénieurs : fichiers 3D CAD (.STEP), intégration télémétrique bus CAN et adaptation sur mesure."
      ]
    },
    "aerospace-research-propulsion": {
      slug: "propulsion-recherche-aerospatiale",
      title: "Propulsion pour Recherche Aérospatiale et Universités",
      label: "Recherche aérospatiale",
      description: "Microturbines axiales de haute précision pour laboratoires universitaires, souffleries aérodynamiques, bancs d'essai et recherche sur carburants durables SAF.",
      keywords: [
        "microturbine soufflerie aérodynamique",
        "turboréacteur recherche universitaire",
        "banc d'essai microturbine",
        "recherche carburant saf microturboréacteur",
        "propulsion aérospatiale académique",
        "turbine axiale laboratoire"
      ],
      points: [
        "Microturbines à flux axial de précision optimisées pour souffleries aérodynamiques et bancs de mesure thermodynamique.",
        "Télémétrie haute fréquence exportable vers les systèmes d'acquisition (DAQ) universitaires via bus CAN et liaison série RS232.",
        "Validation complète pour les carburants durables d'aviation (SAF), bio-kérosène et mélanges Jet A-1 avec suivi en temps réel de l'EGT.",
        "Capteurs barométriques et de température ambiante intégrés pour compensation atmosphérique automatique en milieu clos.",
        "Partenariats académiques dédiés : modèles CAO complets, guides d'expérimentation et assistance technique directe du fabricant."
      ]
    },
  };

  return {
    baseSlug: page.slug,
    en: {
      slug: page.slug,
      title: page.title,
      label: page.label,
      description: page.description,
      image: page.image,
      keywords: page.keywords,
      points: page.points,
    },
    fr: {
      ...localized[page.slug],
      image: page.image,
    },
    es: {
      ...localizedEs[page.slug],
      image: page.image,
    },
  };
});

export function solutionAlternates(baseSlug: string) {
  const localized = localizedSolutionPages.find((page) => page.baseSlug === baseSlug);

  return {
    "x-default": localized ? `/${localized.es.slug}` : `/${baseSlug}`,
    es: localized ? `/${localized.es.slug}` : `/${baseSlug}`,
    en: localized ? `/en/${localized.en.slug}` : `/${baseSlug}`,
    fr: localized ? `/fr/${localized.fr.slug}` : `/${baseSlug}`,
  };
}

export function homeAlternates() {
  return {
    "x-default": "/",
    es: "/",
    en: "/en",
    fr: "/fr",
  };
}

export function primaryAlternates(section: "engines" | "accessories" | "distributors" | "service" | "contact" | "about" | "services" | "services-telemetry" | "services-integration" | "services-development") {
  const routes = {
    engines: { es: "/motores", en: "/en/engines", fr: "/fr/moteurs" },
    accessories: { es: "/accesorios", en: "/en/accessories", fr: "/fr/accessoires" },
    distributors: { es: "/distribuidores", en: "/en/distributors", fr: "/fr/distributeurs" },
    service: { es: "/servicio-tecnico", en: "/en/technical-service", fr: "/fr/service-technique" },
    contact: { es: "/contacto", en: "/en/contact", fr: "/fr/contact" },
    about: { es: "/sobre-jetsmunt", en: "/en/about-jetsmunt", fr: "/fr/a-propos-jetsmunt" },
    services: { es: "/servicios", en: "/en/services", fr: "/fr/services" },
    "services-telemetry": { es: "/servicios/electronica-telemetria", en: "/en/services/electronics-telemetry", fr: "/fr/services/electronique-telemetrie" },
    "services-integration": { es: "/servicios/integracion-uav", en: "/en/services/uav-integration", fr: "/fr/services/integration-uav" },
    "services-development": { es: "/servicios/ingenieria-desarrollo", en: "/en/services/engineering-development", fr: "/fr/services/ingenierie-developpement" },
  }[section];

  return {
    "x-default": routes.es,
    ...routes,
  };
}

export function productAlternates(slug: string) {
  return {
    "x-default": `/products/${slug}`,
    es: `/products/${slug}`,
    en: `/en/products/${slug}`,
    fr: `/fr/produits/${slug}`,
  };
}

export function proProductAlternates(slug: "xm215-pro" | "xm255-pro") {
  return {
    "x-default": `/motores/${slug}`,
    es: `/motores/${slug}`,
    en: `/en/engines/${slug}`,
    fr: `/fr/moteurs/${slug}`,
  };
}

export const supportPages = [
  { title: "Support", slug: "support", description: "Technical support, service coordination and documentation routes for JetsMunt propulsion programs." },
  { title: "Downloads", slug: "support/downloads", description: "Documentation, technical references and downloadable material for JetsMunt engine programs." },
  { title: "Manuals", slug: "support/manuals", description: "Manuals and technical guidance routes for compact turbojet engine programs." },
  { title: "Service Request", slug: "support/service-request", description: "Share service, maintenance or technical support requirements with the JetsMunt team." },
  { title: "FAQ", slug: "support/faq", description: "Technical questions about compact turbojet engines, ECU, telemetry, integration and validation." },
  { title: "Maintenance", slug: "support/maintenance", description: "Maintenance planning and service considerations for JetsMunt compact turbojet propulsion systems." },
];

export const accessories = [
  {
    name: "Deposito UAT",
    slug: "deposito-uat",
    price: "50 EUR",
    image: "https://jets-munt.com/wp-content/uploads/2021/12/IMG_20211202_120803-600x450.jpg",
    summary: "Anti-bubble UAT tank for jets 125 ml.",
    summaryEs: "Depósito UAT anti-burbujas para jets de 125 ml.",
    summaryFr: "Réservoir UAT anti-bulles pour jets de 125 ml.",
    compatibility: "Jet fuel system",
  },
  {
    name: "FOD Guard V2",
    slug: "fod-guard-v2",
    price: "35 EUR",
    image: "https://jets-munt.com/wp-content/uploads/2020/03/20190729_131905-1-600x450.jpg",
    summary: "FOD Guard designed exclusively by and for Jets Munt.",
    summaryEs: "FOD Guard diseñado exclusivamente por y para Jets Munt.",
    summaryFr: "FOD Guard conçu exclusivement par et pour Jets Munt.",
    compatibility: "M250XBL, M210TS, M166TS",
  },
  {
    name: "FOD Guard V2 XS",
    slug: "fod-guard-v2-xs",
    price: "35 EUR",
    image: "https://jets-munt.com/wp-content/uploads/2020/03/20191125_213531-600x450.jpg",
    summary: "FOD Guard designed exclusively by and for Jets Munt.",
    summaryEs: "FOD Guard diseñado exclusivamente por y para Jets Munt.",
    summaryFr: "FOD Guard conçu exclusivement par et pour Jets Munt.",
    compatibility: "M100XBL, VT98NG, M122NG",
  },
  {
    name: "Fuel Station",
    slug: "fuel-station",
    price: "199 EUR",
    image: "https://jets-munt.com/wp-content/uploads/2021/06/IMG_20210618_121232-600x450.jpg",
    summary: "XM Aviation fuel station for kerosene, gasoline, diesel, smoke fluid or glow refuelling.",
    summaryEs: "Estación de combustible XM Aviation para repostaje de queroseno, gasolina, diésel, líquido de humo o glow.",
    summaryFr: "Station de carburant XM Aviation pour le ravitaillement en kérosène, essence, diesel, liquide fumigène ou glow.",
    compatibility: "Fuel service equipment",
  },
  {
    name: "JETI",
    slug: "jeti",
    price: "On request",
    image: "https://jets-munt.com/wp-content/uploads/2026/05/descarga-300x121.png",
    summary: "JETI telemetry and control accessory for JetsMunt systems.",
    summaryEs: "Accesorio de telemetría y control JETI para sistemas JetsMunt.",
    summaryFr: "Accessoire de télémétrie et de contrôle JETI pour les systèmes JetsMunt.",
    compatibility: "Telemetry integration",
  },
  {
    name: "Pack de vuelo",
    slug: "pack-de-vuelo",
    price: "332 EUR",
    image: "https://jets-munt.com/wp-content/uploads/2021/06/IMG_20210618_121232-1-600x450.jpg",
    summary: "Flight pack for larger JetsMunt turbine classes.",
    summaryEs: "Pack de vuelo para las clases de turbinas JetsMunt de mayor tamaño.",
    summaryFr: "Pack de vol pour les plus grandes classes de turbines JetsMunt.",
    compatibility: "M140XBL, M166TS, M182NG, M200XBL, M210TS, M250XBL",
  },
  {
    name: "Pack de vuelo XS",
    slug: "pack-de-vuelo-xs",
    price: "319 EUR",
    image: "https://jets-munt.com/wp-content/uploads/2021/06/IMG_20210618_121354-600x450.jpg",
    summary: "Compact flight pack for smaller JetsMunt turbine classes.",
    summaryEs: "Pack de vuelo compacto para las clases de turbinas JetsMunt más pequeñas.",
    summaryFr: "Pack de vol compact pour les plus petites classes de turbines JetsMunt.",
    compatibility: "VT98NG, M100XBL, M122NG",
  },
  {
    name: "Smart data terminal",
    slug: "smart-data-terminal",
    price: "65 EUR",
    image: "https://jets-munt.com/wp-content/uploads/2021/01/IMG_20210105_094838_1-300x225.jpg",
    summary: "Smart data terminal for JetsMunt FADEC and ECU systems.",
    summaryEs: "Terminal de datos inteligente para sistemas FADEC y ECU de JetsMunt.",
    summaryFr: "Terminal de données intelligent pour les systèmes FADEC et ECU JetsMunt.",
    compatibility: "FADEC AU107K, AU108K, BL130, BL180",
  },
  {
    name: "Telemetria V-Speak",
    slug: "telemetria-v-speak",
    price: "70 EUR",
    image: "https://jets-munt.com/wp-content/uploads/2021/01/29103938_1807570502639933_5625823609143427072_o-300x225.jpg",
    summary: "V-Speak telemetry accessory compatible with JetsMunt ECU families.",
    summaryEs: "Accesorio de telemetría V-Speak compatible con las familias ECU de JetsMunt.",
    summaryFr: "Accessoire de télémétrie V-Speak compatible avec les familles d'ECU JetsMunt.",
    compatibility: "BL180, BL130, X120, AU108K, AU107K, VT80/90",
  },
];

export const distributors = [
  { name: "Sergio Testa", slug: "sergio-testa", region: "Americas", country: "Argentina", city: "Buenos Aires", phone: "054 911 5570-1652", email: "compuestos@gmail.com", website: "https://www.testa.com.ar/", service: false },
  { name: "Jet Products Australia", slug: "jet-products-australia", region: "Asia Pacific", country: "Australia", postalCode: "NSW 2763", phone: "+640405767764", email: "phil@jetproductsaustralia.com", website: "http://www.jetproductsaustralia.com", service: true },
  { name: "Berger Modellbau", slug: "berger-modellbau", region: "Europe", country: "Austria", city: "Altheim", postalCode: "4950", email: "office@modellbau-berger.at", website: "http://www.modellbau-berger.at", service: false },
  { name: "Akatec", slug: "akatec", region: "Europe", country: "Austria", city: "Leonding", postalCode: "4060", phone: "+43 (0) 664 / 41 27 227", email: "office@akatec.at", website: "http://www.akatec.at/", service: false },
  { name: "ZN Line.be - JP Zardini", slug: "zn-line-be-jp-zardini", region: "Europe", country: "Belgium", city: "Mons", postalCode: "7022", phone: "+32 65 334466", email: "jp.zardini@skynet.be", website: "http://www.znline.com", service: false },
  { name: "Altecare RC", slug: "altecare-rc", region: "Americas", country: "Canada", city: "Mississauga", postalCode: "6086", email: "peterayache5@gmail.com", website: "http://www.altecarerc.com", service: false },
  { name: "Rui Rui Aviation", slug: "rui-rui-aviation", region: "Asia Pacific", country: "China", city: "Shanghai", phone: "+8613564539954", email: "rr_aviation@163.com", website: "https://www.ruiruiaviation.cn", service: false },
  { name: "Hobbycol", slug: "hobbycol", region: "Americas", country: "Colombia", city: "Medellin, Antioquia", postalCode: "5CX6+72", phone: "+573104340854", email: "rchobbycol@gmail.com", website: "http://www.hobbycol.com", service: false },
  { name: "SECRAFT", slug: "secraft", region: "Asia Pacific", country: "South Korea", city: "Asan-si, Chungcheongnam-do", postalCode: "31407", phone: "82-70-8225-6125", email: "sales@secraft.net", website: "http://www.secraft.net", service: false },
  { name: "KRILL Model", slug: "krill-model", region: "Europe", country: "Czech Republic", city: "Kunovice", postalCode: "68604", phone: "+420 572 508 556", email: "sales@krill-model.com", website: "http://www.krill-model.com", service: false },
  { name: "Grumania Jets", slug: "grumania-jets", region: "Europe", country: "Germany", city: "Metzingen", postalCode: "72555", phone: "00497123-380 988", email: "order@grumania.com", website: "http://www.grumania.com", service: false },
  { name: "Final Modellbau", slug: "final-modellbau", region: "Europe", country: "Germany", city: "Niedenstein", postalCode: "34305", phone: "+4905624-922486", email: "info@final-modellbau.de", website: "http://www.final-modellbau.de", service: false },
  { name: "Ultimate Jets Middle-East", slug: "ultimate-jets-middle-east", region: "Middle East", country: "United Arab Emirates", city: "Dubai", postalCode: "341240", phone: "+971 50 768 74 16", email: "sales@ultimate-jets.me", website: "http://www.ultimate-jets.me", service: false },
  { name: "Jets Munt S.L.", slug: "jets-munt", region: "Europe", country: "Spain", city: "Arenys de Munt", postalCode: "08358", phone: "0034 937950113", email: "info@jets-munt.com", website: "https://www.jets-munt.com", service: true },
  { name: "Bad Boyz RC", slug: "bad-boyz-rc", region: "Americas", country: "United States", city: "Waddell, AZ", postalCode: "85355", phone: "(602) 881-1042", email: "badboyzrc@cox.net", service: true },
  { name: "Aero-Passion", slug: "aero-passion", region: "Europe", country: "France", city: "Cannes", postalCode: "06150", phone: "+33 04 92 19 62 31", email: "contact@rc-aeropassion.com", website: "http://www.rc-aeropassion.com", service: false },
  { name: "Aviation Design", slug: "aviation-design", region: "Europe", country: "France", city: "Milly-la-Foret", postalCode: "91490", phone: "+33 01 64 98 93 93", email: "aviation.design@wanadoo.fr", website: "http://www.aviation-design.fr", service: false },
  { name: "Christen Diffusion", slug: "christen-diffusion", region: "Europe", country: "France", city: "Amillis", postalCode: "77120", phone: "(+33/0) 1.64.04.67.82", email: "christen.diffusion@online.fr", website: "http://christen.diffusion.online.fr/", service: false },
  { name: "Shalat Rachok RC Ltd", slug: "shalat-rachok-rc-ltd", region: "Middle East", country: "Israel", city: "Herzliya, Tel Aviv", postalCode: "46785", phone: "+972-9-9563176", email: "moshe.avishai@gmail.com", website: "http://www.shalat.co.il", service: false },
  { name: "SkyToysRC", slug: "skytoysrc", region: "Middle East", country: "Israel", city: "Modiin / Petah Tikva", phone: "+972542211886", email: "info@SkyToysRC.com", website: "http://www.skytoysrc.com/", service: false },
  { name: "Pirotti s.n.c", slug: "pirotti-s-n-c", region: "Europe", country: "Italy", city: "Alessandria", postalCode: "15121", email: "pirottimodels@pirottimodels.com", website: "https://www.pirottimodels.com/", service: false },
  { name: "SG-Composite", slug: "sg-composite", region: "Europe", country: "Italy", city: "Chiusa", email: "info@sg-composite.com", website: "https://sg-composite.com/", service: false },
  { name: "JetSetJapan", slug: "jetsetjapan", region: "Asia Pacific", country: "Japan", city: "Osaka", postalCode: "590-0004", phone: "+81 072-224-3200", email: "info@jetsetj.com", website: "http://www.jetsetj.com/", service: false },
  { name: "RC DEPOT", slug: "rc-depot", region: "Asia Pacific", country: "Japan", city: "Chiba", postalCode: "270-0239", phone: "+81 471972958", email: "order.rcdepot@leaf.ocn.ne.jp", website: "http://www.rcdepot-jp.com/", service: false },
  { name: "JeRo fuel ans", slug: "jero-fuel-ans", region: "Europe", country: "Norway", email: "jerofuel@online.no", website: "http://www.jerofuel.no/", service: false },
  { name: "Nuno Miguel", slug: "nuno-miguel", region: "Europe", country: "Portugal", city: "Charneca da Caparica", postalCode: "2820-558", phone: "351 917265050", email: "nunospmiguel@gmail.com", service: false },
  { name: "NexusModel", slug: "nexusmodel", region: "Europe", country: "United Kingdom", city: "Northampton", postalCode: "NN1 1TD", phone: "01604 627 616", email: "info@nexusmodels.co.uk", website: "https://www.nexusmodels.co.uk/", service: false },
  { name: "ZedJet", slug: "zedjet", region: "Europe", country: "United Kingdom", city: "Kingston upon Hull", postalCode: "HU5 4QQ", phone: "07792338351", email: "zedjet@outlook.com", website: "http://www.zedjet.com", service: false },
  { name: "Jettstream UK", slug: "jettstream-uk", region: "Europe", country: "United Kingdom", city: "Leeds", phone: "07947523270", email: "jettstreamuk@gmail.com", website: "http://www.jettstreamuk.co.uk", service: false },
  { name: "TZ Import", slug: "tz-import", region: "Europe", country: "Sweden", city: "Tumba", email: "tzimport@comhem.se", website: "http://www.tzimport.com", service: false },
  { name: "C-S Turbine Service", slug: "c-s-turbine-service", region: "Europe", country: "Sweden", city: "Nodinge", postalCode: "449 36", phone: "0705-696950", email: "christer@csturbine.se", website: "http://www.csturbine.se", service: true },
  { name: "Modellmarkt24 GmbH", slug: "modellmarkt24-gmbh", region: "Europe", country: "Switzerland", city: "Frutigen", postalCode: "3714", phone: "0041337338030", email: "info@modellmarkt24.ch", website: "https://www.modellmarkt24.ch/", service: false },
  { name: "Ozone Spor ve Hobi Urunleri", slug: "ozone-spor-ve-hobi-urunleri", region: "Europe", country: "Turkey", city: "Menemen, Izmir", postalCode: "35660", phone: "+90 532 615 07 33", email: "info@ozonehobby.com", website: "http://www.ozonehobby.com", service: false },
];

export const allSeoRoutes = [
  "",
  "motores",
  ...engines.map((engine) => `products/${engine.slug}`),
  "accesorios",
  "distribuidores",
  "servicio-tecnico",
  "contacto",
  "en",
  "en/engines",
  ...engines.map((engine) => `en/products/${engine.slug}`),
  "en/accessories",
  "en/distributors",
  "en/technical-service",
  "en/contact",
  ...localizedSolutionPages.map((page) => `en/${page.en.slug}`),
  "fr",
  "fr/moteurs",
  ...engines.map((engine) => `fr/produits/${engine.slug}`),
  "fr/accessoires",
  "fr/distributeurs",
  "fr/service-technique",
  "fr/contact",
  ...localizedSolutionPages.map((page) => `fr/${page.fr.slug}`),
  "pro-series",
  ...proEngines.map((engine) => `pro-series/${engine.slug}`),
  ...localizedSolutionPages.map((page) => page.es.slug),
  ...supportPages.map((page) => page.slug),
];

export interface TechnicalFaq {
  question: string;
  answer: string;
}

const faqsByBaseSlug: Record<string, Record<"es" | "en" | "fr", TechnicalFaq[]>> = {
  "itar-free-propulsion": {
    es: [
      {
        question: "¿Por qué los motores de JetsMunt están 100% libres de regulaciones ITAR?",
        answer: "Todos nuestros motores turbojet, su electrónica de control (ECU), firmware y componentes mecánicos se diseñan y fabrican íntegramente en nuestras instalaciones de Arenys de Munt (Barcelona, España). Al no emplear componentes ni propiedad intelectual de origen estadounidense sujeta a ITAR/EAR, nuestros clientes internacionales y contratistas de defensa operan con total soberanía y sin depender de licencias de exportación del Departamento de Estado de EE. UU.",
      },
      {
        question: "¿Cómo se clasifica esta propulsión según el Reglamento de Doble Uso de la Unión Europea (UE 2021/821)?",
        answer: "Los motores turbojet compactos de JetsMunt desarrollan empujes entre 98 N y 262 N con un consumo específico de combustible (SFC) superior a 0,018 kg/(N·h) y un empuje inferior a 1 kN. Por lo tanto, quedan exentos de la categoría de control 9A101 para misiles y grandes vectores, facilitando su exportación y empleo en plataformas no tripuladas tácticas y de prueba tanto civiles como de seguridad europea.",
      },
      {
        question: "¿Qué garantía de suministro y soberanía ofrece JetsMunt a los contratistas de defensa europeos?",
        answer: "Al mantener el 100% del ciclo productivo en España dentro de la UE, aseguramos cadenas de suministro cortas, trazabilidad de aleaciones aeroespaciales, soporte de ingeniería directo de fábrica y disponibilidad continua de repuestos sin riesgos de embargo geopolítico externo.",
      },
      {
        question: "¿Cómo se gestiona la documentación técnica y confidencialidad en programas gubernamentales?",
        answer: "Trabajamos bajo acuerdos de confidencialidad estrictos (NDA), suministrando modelos CAD 3D (.STEP), curvas de rendimiento dinamométricas y protocolos de comunicación a medida para facilitar la integración en plataformas gubernamentales y programas de defensa clasificados.",
      },
    ],
    en: [
      {
        question: "Why are JetsMunt microturbines 100% ITAR-free?",
        answer: "All our turbojet engines, electronic control units (ECU), proprietary firmware, and precision mechanical components are designed and manufactured entirely in Arenys de Munt (Barcelona, Spain). Without any US-origin components or intellectual property subject to ITAR or EAR, our global aerospace clients and defense contractors enjoy complete sovereignty and freedom from US export licensing delays.",
      },
      {
        question: "How are these engines treated under EU Dual-Use Regulation (EU 2021/821)?",
        answer: "JetsMunt compact turbojets operate in the 98 N to 262 N thrust range with specific fuel consumption (SFC) exceeding 0.018 kg/(N·h) and thrust well below 1 kN. Consequently, they fall outside the 9A101 dual-use missile proliferation control thresholds, significantly streamlining export licensing for NATO and allied partners.",
      },
      {
        question: "What supply chain security does JetsMunt provide to European defense programs?",
        answer: "With 100% in-house manufacturing in Spain within the European Union, we guarantee short supply routes, complete aerospace material traceability, direct OEM engineering support, and ongoing spare parts availability insulated from external geopolitical restrictions.",
      },
      {
        question: "What integration data is supplied for secure defense projects?",
        answer: "We operate under stringent NDAs, providing comprehensive 3D CAD (.STEP) geometry, dynamometer performance envelopes, and serial/CAN Bus communication protocols to ensure seamless avionics integration.",
      },
    ],
    fr: [
      {
        question: "Pourquoi les moteurs JetsMunt sont-ils 100% sans ITAR ?",
        answer: "Tous nos turboréacteurs, unités de contrôle moteur (ECU), firmwares et pièces mécaniques de précision sont conçus et fabriqués dans nos installations d'Arenys de Munt (Barcelone, Espagne). Sans aucun composant ni propriété intellectuelle américaine soumise aux règles ITAR ou EAR, nos clients et intégrateurs de défense opèrent en toute souveraineté sans les délais de licence d'exportation américains.",
      },
      {
        question: "Quel est le statut au titre du Règlement Européen sur les Biens à Double Usage (UE 2021/821) ?",
        answer: "Avec une poussée de 98 N à 262 N et une consommation spécifique (SFC) supérieure à 0,018 kg/(N·h) pour une poussée inférieure à 1 kN, les moteurs JetsMunt ne relèvent pas du contrôle 9A101, simplifiant considérablement les procédures d'exportation vers les pays alliés et partenaires de l'OTAN.",
      },
      {
        question: "Quelle sécurité d'approvisionnement offrez-vous aux programmes de souveraineté européens ?",
        answer: "La maîtrise totale de la production en Espagne au sein de l'UE garantit des circuits courts, une traçabilité complète des alliages aéronautiques, une assistance directe du constructeur et une pérennité des pièces de rechange à l'abri des restrictions géopolitiques extérieures.",
      },
      {
        question: "Quels éléments techniques sont transmis aux intégrateurs de défense ?",
        answer: "Nous fournissons sous accord de confidentialité (NDA) des modèles 3D CAO (.STEP), des courbes de poussée au banc et les protocoles de télémétrie CAN Bus pour une intégration immédiate avec l'avionique de bord.",
      },
    ],
  },
  "aerospace-research-propulsion": {
    es: [
      {
        question: "¿Son adecuados los microturbojets de JetsMunt para túneles de viento y bancos de prueba universitarios?",
        answer: "Sí. Gracias a su arquitectura de flujo axial compacta, baja inercia de rotor y calibración de fábrica, nuestros motores proporcionan datos repetibles y fiables para estudios aerodinámicos, acústicos y termodinámicos en instalaciones universitarias y centros tecnológicos.",
      },
      {
        question: "¿Cómo se exportan los datos de telemetría a los sistemas de adquisición de datos (DAQ) del laboratorio?",
        answer: "La ECU digital de 32 bits dispone de interfaces de telemetría nativas por CAN Bus de alta velocidad y bus serie RS232. Proporciona lecturas en tiempo real de RPM de turbina, temperatura de gases de escape (EGT), consumo instantáneo de combustible, tensión de batería, estado de la bomba y presión barométrica.",
      },
      {
        question: "¿Se pueden utilizar con biocombustibles y combustibles sostenibles de aviación (SAF)?",
        answer: "Absolutamente. Los motores JetsMunt han sido ensayados con éxito con queroseno estándar Jet A-1, JP-8, diésel comercial y diversos combustibles sostenibles (SAF / bioqueroseno) mezclados con 4% de aceite sintético para turbinas, lo que los convierte en una plataforma idónea para la investigación en descarbonización de la propulsión aérea.",
      },
      {
        question: "¿Dispone la ECU de compensación automática por altitud y condiciones atmosféricas?",
        answer: "Sí. La electrónica incorpora sensores de presión atmosférica y temperatura ambiente integrados, recalculando automáticamente las curvas de inyección y límites de aceleración para garantizar arranques y aceleraciones estables bajo diferentes condiciones ambientales del laboratorio o cámara climática.",
      },
    ],
    en: [
      {
        question: "Are JetsMunt microturbines suitable for wind tunnel and academic test bench applications?",
        answer: "Yes. Their compact axial-flow architecture, low rotor inertia, and precision factory balancing make them ideal for repeatable aerodynamic, acoustic, and thermodynamic research in university aerospace departments and propulsion laboratories.",
      },
      {
        question: "How is engine telemetry interfaced with laboratory Data Acquisition (DAQ) systems?",
        answer: "The integrated 32-bit digital ECU provides native high-speed CAN Bus and RS232 serial telemetry streams. Real-time parameters include turbine RPM, Exhaust Gas Temperature (EGT), fuel flow rate, battery voltage, pump duty cycle, and barometric pressure.",
      },
      {
        question: "Can these engines operate with Sustainable Aviation Fuels (SAF) and alternative blends?",
        answer: "Yes. JetsMunt turbojets are validated with Jet A-1, JP-8, automotive diesel, and various Sustainable Aviation Fuels (SAF / bio-kerosene) blends with 4% turbine oil, making them an excellent test platform for academic research into low-carbon aviation.",
      },
      {
        question: "Does the ECU feature automated ambient and barometric compensation?",
        answer: "Yes. Integrated barometric pressure and ambient temperature sensors allow the digital ECU to automatically adapt fuel scheduling and acceleration ramps for indoor test cells and varying climatic chamber conditions.",
      },
    ],
    fr: [
      {
        question: "Les microturbines JetsMunt sont-elles adaptées aux souffleries et bancs d'essai universitaires ?",
        answer: "Oui. Leur conception axiale compacte, leur faible inertie de rotor et leur étalonnage rigoureux offrent une répétabilité et une fiabilité idéales pour la recherche en aérodynamique, acoustique et thermodynamique en milieu universitaire.",
      },
      {
        question: "Comment la télémétrie moteur s'interface-t-elle avec les systèmes DAQ du laboratoire ?",
        answer: "L'ECU numérique 32 bits dispose de sorties natives en bus CAN haute vitesse et liaison série RS232, diffusant en temps réel les régimes (RPM), la température des gaz d'échappement (EGT), le débit de carburant et la pression barométrique.",
      },
      {
        question: "Peut-on tester des carburants alternatifs et carburants durables d'aviation (SAF) ?",
        answer: "Tout à fait. Nos moteurs fonctionnent parfaitement avec le Jet A-1, le JP-8, le diesel et les carburants d'aviation durables (SAF / bio-kérosène) avec 4% d'huile de turbine de synthèse, offrant une plateforme d'expérimentation idéale pour la recherche sur la décarbonation.",
      },
      {
        question: "L'ECU compense-t-elle automatiquement les variations atmosphériques ?",
        answer: "Oui. Des capteurs intégrés de pression atmosphérique et de température permettent à l'ECU d'ajuster automatiquement les lois d'injection et de démarrage selon les conditions de la cellule d'essai ou de la chambre climatique.",
      },
    ],
  },
};

const defaultFaqs: Record<"es" | "en" | "fr", TechnicalFaq[]> = {
  es: [
    {
      question: "¿Qué tipo de combustibles son compatibles con los motores turbojet JetsMunt?",
      answer: "Nuestros motores están homologados para operar con Jet A-1, JP-8, queroseno comercial y gasóleo diésel de automoción estándar, siempre mezclados con un 4% de aceite lubricante 100% sintético para turbinas o fluido Dextron III.",
    },
    {
      question: "¿Cómo se realiza el arranque del motor en plataformas no tripuladas?",
      answer: "Incorporan de serie nuestro sistema Kerostart de inyección directa de queroseno mediante bujía incandescente y motor de arranque brushless integrado, eliminando la necesidad de gas propano auxiliar y permitiendo reinicios automáticos en vuelo supervisados por la ECU.",
    },
    {
      question: "¿Qué protocolo de comunicación utiliza la ECU para conectarse al autopiloto?",
      answer: "La ECU cuenta con bus CAN estándar configurable y puerto serie RS232 bidireccional, facilitando la integración con los principales sistemas de aviónica (Pixhawk, UAV Navigation, autopilotos propietarios) para recibir consignas de empuje y emitir telemetría completa.",
    },
    {
      question: "¿Qué documentación y modelos proporciona JetsMunt para la integración física?",
      answer: "Facilitamos a los equipos de ingeniería modelos 3D CAD completos en formato .STEP, planos de cotas de instalación, envolventes térmicas recomendadas y diagramas de conexionado eléctrico y de combustible.",
    },
  ],
  en: [
    {
      question: "What fuel types are supported by JetsMunt compact turbojets?",
      answer: "Our engines are certified to run on Jet A-1, JP-8, commercial kerosene, and standard automotive diesel, mixed with 4% synthetic turbine oil or Dextron III.",
    },
    {
      question: "How is the engine started in unmanned aircraft installations?",
      answer: "Engines feature our integrated Kerostart system with internal kerosene pre-heating and a brushless starter motor, eliminating external propane gas bottles and supporting autonomous in-flight restart routines controlled by the ECU.",
    },
    {
      question: "What communication protocols connect the engine ECU to platform avionics?",
      answer: "The ECU features high-speed CAN Bus and bidirectional RS232 serial interfaces, seamlessly connecting to leading UAV autopilots (Pixhawk, MicroPilot, custom flight controllers) for throttle control and telemetry streaming.",
    },
    {
      question: "What CAD and mechanical files are provided to engineering integrators?",
      answer: "We deliver native 3D CAD models (.STEP format), envelope dimension drawings, center of gravity data, thermal clearance guidance, and electrical/fuel schematics.",
    },
  ],
  fr: [
    {
      question: "Quels types de carburants peuvent être utilisés avec les réacteurs JetsMunt ?",
      answer: "Nos réacteurs sont homologués pour fonctionner avec le Jet A-1, le JP-8, le kérosène et le carburant diesel automobile standard, mélangé à 4% d'huile de synthèse pour turbine ou fluide Dextron III.",
    },
    {
      question: "Comment s'effectue la mise à feu et le démarrage sur drone ?",
      answer: "Les moteurs intègrent le système Kerostart à injection directe de kérosène et démarreur brushless, supprimant le recours au gaz propane auxiliaire et autorisant les procédures de rallumage automatique en vol sous contrôle de l'ECU.",
    },
    {
      question: "Quels protocoles de communication relient l'ECU à l'avionique de bord ?",
      answer: "L'ECU intègre un bus CAN rapide et une liaison série bidirectionnelle RS232, permettant un interfaçage direct avec les principaux pilotes automatiques pour la commande de poussée et la télémétrie complète.",
    },
    {
      question: "Quels fichiers techniques et modèles CAO sont mis à disposition des intégrateurs ?",
      answer: "Nous fournissons des modèles 3D CAO (.STEP), les plans d'encombrement mécanique, les données de centre de gravité et les schémas de câblage et d'alimentation carburant.",
    },
  ],
};

export function getSolutionFaqs(slugOrBaseSlug: string, locale: "es" | "en" | "fr"): TechnicalFaq[] {
  const found = localizedSolutionPages.find(
    (p) =>
      p.baseSlug === slugOrBaseSlug ||
      p.es.slug === slugOrBaseSlug ||
      p.en.slug === slugOrBaseSlug ||
      p.fr.slug === slugOrBaseSlug
  );
  const baseSlug = found ? found.baseSlug : slugOrBaseSlug;
  const specific = faqsByBaseSlug[baseSlug]?.[locale];
  return specific ?? defaultFaqs[locale];
}


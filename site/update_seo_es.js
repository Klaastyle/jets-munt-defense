const fs = require('fs');

let content = fs.readFileSync('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/lib/seo-data.ts', 'utf8');

const translations = {
  "uav-propulsion": {
    es: {
      slug: "propulsion-uav",
      title: "Sistemas de Propulsión UAV",
      label: "Propulsión UAV",
      description: "Propulsión turbojet compacta, ECU, telemetría y soporte de integración para programas de aeronaves no tripuladas.",
      keywords: ["sistemas de propulsión UAV", "motores turbojet para UAV", "turbojet UAV compacto"],
      points: [
        "Selección de clase de empuje basada en masa, perfil de misión y envolvente de instalación.",
        "Revisión de interfaces de control, eléctricas y de combustible para equipos de integración UAV.",
        "Soporte de validación en banco y preparación para ensayos en vuelo."
      ]
    }
  },
  "uav-integration": {
    es: {
      slug: "integracion-uav",
      title: "Integración UAV",
      label: "Integración UAV",
      description: "Soporte de integración para motores turbojet compactos, arquitectura de combustible, interfaces de control y validación de plataforma.",
      keywords: ["integración UAV", "integración turbojet UAV", "instalación motor UAV"],
      points: [
        "Revisión de instalación de volumen, admisión, escape, combustible y acceso de servicio.",
        "Alineación de interfaces de control para ECU, telemetría y aviónica de plataforma.",
        "Planificación de validación desde el banco hasta la preparación para ensayos en vuelo."
      ]
    }
  },
  "target-drone-propulsion": {
    es: {
      slug: "propulsion-target-drone",
      title: "Propulsión Target Drone",
      label: "Target drones",
      description: "Motores turbojet compactos y soporte de ingeniería para target drones y plataformas de misiones especiales.",
      keywords: ["propulsión target drone", "motor target UAV", "turbojet compacto target drone"],
      points: [
        "Densidad de empuje compacta para fuselajes restringidos y perfiles de misión repetibles.",
        "Control de motor preparado para telemetría, pruebas, entrenamiento y validación.",
        "Fabricación europea y soporte técnico del equipo de propulsión."
      ]
    }
  },
  "loitering-munition-propulsion": {
    es: {
      slug: "propulsion-misiones-especiales",
      title: "Propulsión para Misiones Especiales",
      label: "Misiones especiales",
      description: "Consideraciones de propulsión turbojet compacta para plataformas no tripuladas de misiones especiales con envolventes limitadas.",
      keywords: ["propulsión misiones especiales", "propulsión UAV compacta", "turbojet UAV compacto"],
      points: [
        "Revisión de la clase de propulsión en torno a fuselajes compactos y ciclos de misión.",
        "Datos de telemetría y control para programas no tripulados enfocados en validación.",
        "Soporte de ingeniería europeo para evaluación técnica y planificación de integración."
      ]
    }
  },
  "compact-turbojet-engines": {
    es: {
      slug: "motores-turbojet-compactos",
      title: "Motores Turbojet Compactos",
      label: "Turbojets compactos",
      description: "Clases de motores turbojet pequeños y compactos para UAV, target drones, investigación y plataformas aeroespaciales avanzadas.",
      keywords: ["motores turbojet compactos", "motores turbojet pequeños", "motor jet UAV"],
      points: [
        "Clases de motores desde 98 N hasta 255 N para estudios de plataformas compactas.",
        "Selección por empuje, masa, diámetro, perfil operativo y necesidades de validación.",
        "Visión de sistema que cubre motor, ECU, telemetría y ruta de soporte."
      ]
    }
  },
  "propulsion-architecture": {
    es: {
      slug: "arquitectura-propulsion",
      title: "Arquitectura de Propulsión",
      label: "Arquitectura",
      description: "Motor, ECU, telemetría, sensores, sistema de combustible y arquitectura de soporte diseñados como un único sistema de propulsión.",
      keywords: ["arquitectura propulsión turbojet", "ECU motor UAV", "telemetría motor turbojet"],
      points: [
        "Hardware del motor, electrónica de control y telemetría tratados como un sistema integrado.",
        "CAN Bus, interfaces en serie, sensores y registro de datos alineados a la plataforma.",
        "Revisión de arquitectura para instalación, operación, diagnóstico y mantenimiento."
      ]
    }
  },
  "electronics-telemetry": {
    es: {
      slug: "electronica-telemetria",
      title: "Electrónica y Telemetría",
      label: "ECU telemetría",
      description: "Electrónica de control, sensores, interfaces de telemetría y registro de datos para programas de turbojets compactos.",
      keywords: ["ECU turbojet", "telemetría motor UAV", "control motor CAN Bus"],
      points: [
        "Configuración de ECU, sensores y telemetría para aplicaciones de aeronaves no tripuladas.",
        "Captura de datos para pruebas de banco, ensayos en vuelo y análisis de ingeniería.",
        "Interfaces de control preparadas para integración con la aviónica de la plataforma."
      ]
    }
  },
  "ecu-control-systems": {
    es: {
      slug: "sistemas-control-ecu",
      title: "Sistemas de Control ECU",
      label: "Control ECU",
      description: "Sistemas de control ECU de turbojet, sensores, interfaces de telemetría y rutas de datos para programas de propulsión UAV.",
      keywords: ["control ECU turbojet", "ECU motor UAV", "sistema control turbojet compacto"],
      points: [
        "Configuración de ECU alineada con la clase de motor y requisitos de plataforma.",
        "Datos de sensores y telemetría disponibles para diagnósticos, validación y soporte.",
        "Planificación de interfaces de control para integración a nivel de programa."
      ]
    }
  },
  "engineering-development": {
    es: {
      slug: "desarrollo-ingenieria",
      title: "Desarrollo de Ingeniería",
      label: "Ingeniería",
      description: "Desarrollo personalizado, adaptación de prototipos y soporte de ingeniería de propulsión para programas avanzados.",
      keywords: ["desarrollo turbojet", "ingeniería propulsión UAV", "soporte prototipo turbojet"],
      points: [
        "Revisión de perfil de misión y recomendación de clase de propulsión.",
        "Adaptación dimensional, de control y soporte para restricciones del programa.",
        "Retroalimentación de ingeniería desde el concepto hasta la validación en banco y en vuelo."
      ]
    }
  },
  "engineering-custom-development": {
    es: {
      slug: "desarrollo-medida",
      title: "Desarrollo a Medida",
      label: "Desarrollo a medida",
      description: "Soporte de desarrollo de turbojets compactos a medida para restricciones de plataforma, adaptación de prototipos y validación.",
      keywords: ["desarrollo a medida", "propulsión UAV personalizada", "desarrollo motor turbojet"],
      points: [
        "Revisión técnica de la misión, restricciones del fuselaje y empuje objetivo.",
        "Soporte de prototipo para hardware, electrónica e interfaces de integración.",
        "Retroalimentación durante el banco, ensayos en vuelo y fases de validación."
      ]
    }
  },
  "testing-validation": {
    es: {
      slug: "ensayos-validacion",
      title: "Ensayos y Validación",
      label: "Ensayos",
      description: "Configuración de banco, análisis de rendimiento y soporte de validación para sistemas de propulsión turbojet compactos.",
      keywords: ["ensayos turbojet", "validación motor UAV", "ensayos banco propulsión"],
      points: [
        "Preparación de pruebas de banco para empuje, térmica y comportamiento de control.",
        "Revisión de datos de rendimiento antes de pruebas a nivel de plataforma.",
        "Soporte para la preparación de ensayos en vuelo y análisis de ingeniería."
      ]
    }
  },
  "manufacturing-in-spain": {
    es: {
      slug: "fabricacion-espana",
      title: "Fabricación en España",
      label: "Fabricación España",
      description: "Diseño, fabricación, montaje y soporte técnico europeo de turbojets compactos desde España.",
      keywords: ["fabricante turbojet español", "motores turbojet europeos", "fabricación turbina compacta"],
      points: [
        "Diseño europeo y control de fabricación para sistemas de turbojet compactos.",
        "Montaje, servicio y soporte conectados al equipo de ingeniería.",
        "Conversaciones de suministro B2B estructuradas en torno a requisitos del programa."
      ]
    }
  }
};

let modified = content;

// Replace `fr: { ...localized[page.slug], ... }` with `fr: { ...localized[page.slug], ... }, es: { ...localized[page.slug], ... }` inside localizedSolutionPages map.
// Actually it's easier to modify the generation.

// Insert `localizedEs: Record<...>` right before `const localized: Record<...>`
modified = modified.replace(
  /const localized: Record<string, \{/g,
  `const localizedEs: Record<string, {
    slug: string;
    title: string;
    label: string;
    description: string;
    points: string[];
    keywords: string[];
  }> = ${JSON.stringify(Object.fromEntries(Object.entries(translations).map(([k, v]) => [k, v.es])), null, 4)};\n\n  const localized: Record<string, {`
);

// Inject ES into the return of `localizedSolutionPages.map`
modified = modified.replace(
  /fr: \{\n\s+\.\.\.localized\[page\.slug\],\n\s+image: page\.image,\n\s+\},/g,
  `fr: {\n      ...localized[page.slug],\n      image: page.image,\n    },\n    es: {\n      ...localizedEs[page.slug],\n      image: page.image,\n    },`
);

fs.writeFileSync('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/lib/seo-data.ts', modified);
console.log("Updated seo-data.ts with ES localized pages");

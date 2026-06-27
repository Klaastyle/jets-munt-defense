const fs = require('fs');

let content = fs.readFileSync('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/lib/seo-data.ts', 'utf8');

// Update engines summaries
content = content.replace(
  'summary: "Compact turbojet engine for small UAV, target drone and experimental aerospace platforms.",',
  'summary: "Compact turbojet engine for small UAV, target drone and experimental aerospace platforms.",\n    summaryEs: "Motor turbojet compacto para UAV pequeños, target drones y plataformas aeroespaciales experimentales.",\n    summaryFr: "Moteur turboréacteur compact pour petits UAV, drones cibles et plateformes aérospatiales expérimentales.",'
);

content = content.replace(
  'summary: "Lightweight propulsion class for UAV programs that need a compact thrust step with controlled installation mass.",',
  'summary: "Lightweight propulsion class for UAV programs that need a compact thrust step with controlled installation mass.",\n    summaryEs: "Clase de propulsión ligera para programas UAV que necesitan un escalón de empuje compacto con masa de instalación controlada.",\n    summaryFr: "Classe de propulsion légère pour les programmes UAV nécessitant un palier de poussée compact avec une masse d\'installation contrôlée.",'
);

content = content.replace(
  'summary: "Mid-range compact turbojet platform for demanding unmanned aircraft integration and validation work.",',
  'summary: "Mid-range compact turbojet platform for demanding unmanned aircraft integration and validation work.",\n    summaryEs: "Plataforma turbojet compacta de rango medio para trabajos exigentes de integración y validación de aeronaves no tripuladas.",\n    summaryFr: "Plateforme turboréacteur compacte de milieu de gamme pour les travaux d\'intégration et de validation d\'aéronefs sans pilote exigeants.",'
);

content = content.replace(
  'summary: "Compact XM turbojet class for UAV programs requiring a thrust step above the XM166NG range.",',
  'summary: "Compact XM turbojet class for UAV programs requiring a thrust step above the XM166NG range.",\n    summaryEs: "Clase turbojet XM compacta para programas UAV que requieren un escalón de empuje por encima del rango del XM166NG.",\n    summaryFr: "Classe turboréacteur XM compacte pour les programmes UAV nécessitant un palier de poussée supérieur à la gamme XM166NG.",'
);

content = content.replace(
  'summary: "Higher-thrust XM propulsion class for compact unmanned aircraft and target platform integration studies.",',
  'summary: "Higher-thrust XM propulsion class for compact unmanned aircraft and target platform integration studies.",\n    summaryEs: "Clase de propulsión XM de mayor empuje para estudios de integración de aeronaves no tripuladas compactas y plataformas target.",\n    summaryFr: "Classe de propulsion XM à plus forte poussée pour les études d\'intégration d\'aéronefs sans pilote compacts et de plateformes cibles.",'
);

content = content.replace(
  'summary: "Compact turbojet engine class for advanced UAV programs that need increased thrust margin.",',
  'summary: "Compact turbojet engine class for advanced UAV programs that need increased thrust margin.",\n    summaryEs: "Clase de motor turbojet compacto para programas UAV avanzados que necesitan mayor margen de empuje.",\n    summaryFr: "Classe de moteur turboréacteur compact pour les programmes UAV avancés qui nécessitent une plus grande marge de poussée.",'
);

content = content.replace(
  'summary: "250 N compact turbojet propulsion class for demanding UAV and special mission platform requirements.",',
  'summary: "250 N compact turbojet propulsion class for demanding UAV and special mission platform requirements.",\n    summaryEs: "Clase de propulsión turbojet compacta de 250 N para requerimientos exigentes de UAV y plataformas de misiones especiales.",\n    summaryFr: "Classe de propulsion turboréacteur compacte de 250 N pour les exigences des UAV et plateformes de missions spéciales.",'
);

content = content.replace(
  'summary: "High-thrust XM engine class for advanced UAV and target platform propulsion requirements.",',
  'summary: "High-thrust XM engine class for advanced UAV and target platform propulsion requirements.",\n    summaryEs: "Clase de motor XM de alto empuje para requisitos de propulsión de UAV avanzados y plataformas target.",\n    summaryFr: "Classe de moteur XM à forte poussée pour les exigences de propulsion des UAV avancés et des plateformes cibles.",'
);

content = content.replace(
  'summary: "Professional compact turbojet propulsion class for programs requiring engineering support, telemetry and validation depth.",',
  'summary: "Professional compact turbojet propulsion class for programs requiring engineering support, telemetry and validation depth.",\n    summaryEs: "Clase de propulsión turbojet compacta profesional para programas que requieren soporte de ingeniería, telemetría y profundidad de validación.",\n    summaryFr: "Classe de propulsion turboréacteur compacte professionnelle pour les programmes nécessitant un support d\'ingénierie, de la télémétrie et une validation approfondie.",'
);

content = content.replace(
  'summary: "Professional high-thrust compact turbojet package for advanced UAV and target platform propulsion programs.",',
  'summary: "Professional high-thrust compact turbojet package for advanced UAV and target platform propulsion programs.",\n    summaryEs: "Paquete turbojet compacto profesional de alto empuje para programas avanzados de propulsión de UAV y plataformas target.",\n    summaryFr: "Pack turboréacteur compact professionnel à forte poussée pour les programmes avancés de propulsion d\'UAV et de plateformes cibles.",'
);

// For accessories
content = content.replace(
  'summary: "Deposito UAT anti-burbujas para jets de 125 ml.",',
  'summary: "Anti-bubble UAT tank for jets 125 ml.",\n    summaryEs: "Depósito UAT anti-burbujas para jets de 125 ml.",\n    summaryFr: "Réservoir UAT anti-bulles pour jets de 125 ml.",'
);

content = content.replace(
  /summary: "FOD Guard diseñado exclusivamente por y para Jets Munt.",/g,
  'summary: "FOD Guard designed exclusively by and for Jets Munt.",\n    summaryEs: "FOD Guard diseñado exclusivamente por y para Jets Munt.",\n    summaryFr: "FOD Guard conçu exclusivement par et pour Jets Munt.",'
);

content = content.replace(
  'summary: "XM Aviation fuel station for kerosene, gasoline, diesel, smoke fluid or glow refuelling.",',
  'summary: "XM Aviation fuel station for kerosene, gasoline, diesel, smoke fluid or glow refuelling.",\n    summaryEs: "Estación de combustible XM Aviation para repostaje de queroseno, gasolina, diésel, líquido de humo o glow.",\n    summaryFr: "Station de carburant XM Aviation pour le ravitaillement en kérosène, essence, diesel, liquide fumigène ou glow.",'
);

content = content.replace(
  'summary: "JETI telemetry and control accessory for JetsMunt systems.",',
  'summary: "JETI telemetry and control accessory for JetsMunt systems.",\n    summaryEs: "Accesorio de telemetría y control JETI para sistemas JetsMunt.",\n    summaryFr: "Accessoire de télémétrie et de contrôle JETI pour les systèmes JetsMunt.",'
);

content = content.replace(
  'summary: "Flight pack for larger JetsMunt turbine classes.",',
  'summary: "Flight pack for larger JetsMunt turbine classes.",\n    summaryEs: "Pack de vuelo para las clases de turbinas JetsMunt de mayor tamaño.",\n    summaryFr: "Pack de vol pour les plus grandes classes de turbines JetsMunt.",'
);

content = content.replace(
  'summary: "Compact flight pack for smaller JetsMunt turbine classes.",',
  'summary: "Compact flight pack for smaller JetsMunt turbine classes.",\n    summaryEs: "Pack de vuelo compacto para las clases de turbinas JetsMunt más pequeñas.",\n    summaryFr: "Pack de vol compact pour les plus petites classes de turbines JetsMunt.",'
);

content = content.replace(
  'summary: "Smart data terminal for JetsMunt FADEC and ECU systems.",',
  'summary: "Smart data terminal for JetsMunt FADEC and ECU systems.",\n    summaryEs: "Terminal de datos inteligente para sistemas FADEC y ECU de JetsMunt.",\n    summaryFr: "Terminal de données intelligent pour les systèmes FADEC et ECU JetsMunt.",'
);

content = content.replace(
  'summary: "V-Speak telemetry accessory compatible with JetsMunt ECU families.",',
  'summary: "V-Speak telemetry accessory compatible with JetsMunt ECU families.",\n    summaryEs: "Accesorio de telemetría V-Speak compatible con las familias ECU de JetsMunt.",\n    summaryFr: "Accessoire de télémétrie V-Speak compatible avec les familles d\'ECU JetsMunt.",'
);

fs.writeFileSync('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/lib/seo-data.ts', content);

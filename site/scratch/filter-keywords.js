const fs = require('fs');

const kws = fs.readFileSync('C:/Users/Albert/Desktop/Antigravity/Jets-Munt/site/scratch/real_keywords.txt', 'utf8').split('\n').map(k => k.trim()).filter(k => k);

const bannedTerms = [
    'military', 'defense', 'tactical', 'weapon', 'combat', 'missile', 'war', 'target drone', 'uav target', 'kamikaze', 'reconnaissance', 'surveillance', 'air force', 'ordnance', 'navy', 'army', 'weaponized', 'projectile', 'air strike', 'bomb', 'munition', 'interceptor', 'patrol', 'border patrol', 'loitering',
    'rc', 'hobby', 'juguete', 'toy', 'model', 'cheap', 'barato', 'used', 'usado', 'repair', 'diy', 'how to build', 'homemade', '3d printed', 'jetcat', 'kingtech', 'pbs'
];

let banned = [];
let safe = [];

kws.forEach(kw => {
    let isBanned = false;
    for (const term of bannedTerms) {
        if (kw.includes(term)) {
            isBanned = true;
            banned.push(kw);
            break;
        }
    }
    if (!isBanned) safe.push(kw);
});

// Clusters for Safe
let clusterUAV = [];
let clusterTelemetry = [];
let clusterResearch = [];
let clusterGeneric = [];

safe.forEach(kw => {
    if (kw.includes('uav') || kw.includes('propulsion') || kw.includes('uavs')) {
        clusterUAV.push(kw);
    } else if (kw.includes('ecu') || kw.includes('telemetry') || kw.includes('pump') || kw.includes('starter') || kw.includes('fadec') || kw.includes('can bus') || kw.includes('sbus')) {
        clusterTelemetry.push(kw);
    } else if (kw.includes('experimental') || kw.includes('research') || kw.includes('university') || kw.includes('laboratory') || kw.includes('testing')) {
        clusterResearch.push(kw);
    } else {
        clusterGeneric.push(kw);
    }
});

let md = `# Listado Exhaustivo de Palabras Clave (Google Ads)\n\n`;

md += `## 🚫 PALABRAS CLAVE PROHIBIDAS (Keywords Negativas)\n`;
md += `*Términos militares, RC barato o competidores. Añadir como negativas.*\n\n`;
banned.forEach(k => md += `- -${k}\n`);

md += `\n## ✅ PALABRAS CLAVE APROBADAS (Agrupadas por Clústeres)\n`;
md += `*Pujar SIEMPRE en [Concordancia Exacta] o "Concordancia de Frase" para evitar desbordamiento semántico.*\n\n`;

md += `### 🎯 Clúster A: Propulsión de UAVs Comerciales (B2B Puro)\n`;
clusterUAV.forEach(k => md += `- "${k}"\n`);

md += `\n### 🎯 Clúster B: Telemetría y Aviónica (Ingenieros de Sistemas)\n`;
clusterTelemetry.forEach(k => md += `- "${k}"\n`);

md += `\n### 🎯 Clúster C: Investigación y Laboratorios (Universidades / R&D)\n`;
clusterResearch.forEach(k => md += `- "${k}"\n`);

md += `\n### 🎯 Clúster D: Aviación Civil y Términos Industriales\n`;
clusterGeneric.forEach(k => md += `- "${k}"\n`);

fs.writeFileSync('C:/Users/Albert/.gemini/antigravity/brain/5bd28051-a96d-40af-8a0a-5512916ea1a6/listado-completo-keywords.md', md);
console.log('Done');

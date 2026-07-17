const fs = require('fs');
const xlsx = require('xlsx');

const kws = fs.readFileSync('C:/Users/Albert/Desktop/Antigravity/Jets-Munt/site/scratch/real_keywords.txt', 'utf8').split('\n').map(k => k.trim()).filter(k => k);

// Categorías estrictas
const dangerTerms = [
    'military', 'defense', 'tactical', 'weapon', 'combat', 'missile', 'war', 'target drone', 'uav target', 'kamikaze', 'reconnaissance', 'surveillance', 'air force', 'ordnance', 'navy', 'army', 'weaponized', 'projectile', 'air strike', 'bomb', 'munition', 'interceptor', 'patrol', 'border patrol', 'loitering'
];

const trashTerms = [
    'rc', 'hobby', 'juguete', 'toy', 'model', 'cheap', 'barato', 'used', 'usado', 'repair', 'diy', 'how to build', 'homemade', '3d printed', 'sale'
];

const competitorTerms = [
    'jetcat', 'kingtech', 'pbs', 'swiwin', 'amt', 'wren', 'zofitech', 'kratos',
    'p220', 'p250', 'p300', 'p400', 'p1000', 'k45', 'k210', 'k235', 'sw240', 'olympus'
];

let dangerList = [];
let trashList = [];
let competitorList = [];
let clusterUAV = [];
let clusterTelemetry = [];
let clusterResearch = [];
let clusterGeneric = [];

kws.forEach(kw => {
    // 1. Filtrar Baneo Google
    let isDanger = false;
    for (const term of dangerTerms) {
        if (kw.includes(term)) {
            isDanger = true;
            dangerList.push({ 'Keyword (Negativa)': `-${kw}`, 'Riesgo': 'ALTO (Baneo Cuenta)', 'Motivo': `Contiene término militar/peligroso: "${term}"` });
            break;
        }
    }
    if (isDanger) return;

    // 2. Filtrar Basura / Hobby
    let isTrash = false;
    for (const term of trashTerms) {
        // match exact word or part
        if (kw.includes(term)) {
            isTrash = true;
            trashList.push({ 'Keyword (Negativa)': `-${kw}`, 'Riesgo': 'Bajo (Pérdida de Dinero)', 'Motivo': `Término de aficionado/barato: "${term}"` });
            break;
        }
    }
    if (isTrash) return;

    // 3. Filtrar Competencia (Modelos y Marcas)
    let isCompetitor = false;
    for (const term of competitorTerms) {
        if (kw.includes(term)) {
            isCompetitor = true;
            competitorList.push({ 'Keyword': kw, 'Uso': 'Solo para campañas agresivas de "Robo de Clientes", sino NEGATIVIZAR', 'Competidor': term });
            break;
        }
    }
    if (isCompetitor) return;

    // 4. Asignar a Clústeres (Solo si pasaron todos los filtros)
    if (kw.includes('uav') || kw.includes('propulsion') || kw.includes('uavs')) {
        clusterUAV.push({ 'Keyword': kw, 'Match Type': 'Exact/Phrase', 'Intención': 'Integración Comercial' });
    } else if (kw.includes('ecu') || kw.includes('telemetry') || kw.includes('pump') || kw.includes('starter') || kw.includes('fadec') || kw.includes('can bus') || kw.includes('sbus') || kw.includes('electronics')) {
        clusterTelemetry.push({ 'Keyword': kw, 'Match Type': 'Exact/Phrase', 'Intención': 'Ingeniería Aviónica' });
    } else if (kw.includes('experimental') || kw.includes('research') || kw.includes('university') || kw.includes('laboratory') || kw.includes('testing') || kw.includes('aerodynamic')) {
        clusterResearch.push({ 'Keyword': kw, 'Match Type': 'Exact/Phrase', 'Intención': 'Laboratorios I+D' });
    } else {
        clusterGeneric.push({ 'Keyword': kw, 'Match Type': 'Exact/Phrase', 'Intención': 'Genérica B2B' });
    }
});

const wb = xlsx.utils.book_new();

// Hojas Negativas Claras
xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(dangerList), '00_RIESGO_BANEO_GOOGLE');
xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(trashList), '01_BASURA_HOBBY_RC');
xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(competitorList), '02_COMPETENCIA_MARCAS');

// Hojas Positivas B2B
xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(clusterUAV), '03_UAV_Propulsion_B2B');
xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(clusterTelemetry), '04_Telemetria_Avionica');
xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(clusterResearch), '05_I+D_Universidades');
xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(clusterGeneric), '06_Aviacion_Industrial');

xlsx.writeFile(wb, 'C:/Users/Albert/Desktop/Antigravity/Jets-Munt/SEO/ADS/Google_Ads_Keywords_JetsMunt_V2.xlsx');
console.log('Excel file updated.');

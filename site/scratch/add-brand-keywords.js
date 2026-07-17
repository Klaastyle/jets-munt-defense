const xlsx = require('xlsx');

// Load existing V2 workbook
const wbPath = 'C:/Users/Albert/Desktop/Antigravity/Jets-Munt/SEO/ADS/Google_Ads_Keywords_JetsMunt_V2.xlsx';
const wb = xlsx.readFile(wbPath);

const brandTerms = [
    { 'Keyword': 'jetsmunt', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda Directa de Marca' },
    { 'Keyword': 'jets munt', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda Directa de Marca' },
    { 'Keyword': 'jets-munt', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda Directa de Marca' },
    { 'Keyword': 'jetsmunt defense', 'Match Type': 'Exact/Phrase', 'Intención': 'Protección de Marca Corporativa' },
    { 'Keyword': 'jets munt turbines', 'Match Type': 'Exact/Phrase', 'Intención': 'Intención de Compra de Producto' },
    { 'Keyword': 'jetsmunt engines', 'Match Type': 'Exact/Phrase', 'Intención': 'Intención de Compra de Producto' }
];

const productTerms = [
    { 'Keyword': 'm250xbl', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'jetsmunt m250xbl', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm98ng', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm122ng', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm166ng', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm182ng', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm210ng', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm222ng', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm250ng', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm255ng', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Modelo Específico' },
    { 'Keyword': 'xm215-pro', 'Match Type': 'Exact/Phrase', 'Intención': 'Gama Profesional B2B' },
    { 'Keyword': 'xm255-pro', 'Match Type': 'Exact/Phrase', 'Intención': 'Gama Profesional B2B' },
    { 'Keyword': 'merlin 140 turbine', 'Match Type': 'Exact/Phrase', 'Intención': 'Búsqueda de Legado / Soporte' }
];

const combined = [...brandTerms, ...productTerms];

// Add new sheet to the workbook
const wsBrand = xlsx.utils.json_to_sheet(combined);
xlsx.utils.book_append_sheet(wb, wsBrand, '07_BRAND_JetsMunt_Productos');

xlsx.writeFile(wb, 'C:/Users/Albert/Desktop/Antigravity/Jets-Munt/SEO/ADS/Google_Ads_Keywords_JetsMunt_V3.xlsx');
console.log('V3 created with brand keywords.');

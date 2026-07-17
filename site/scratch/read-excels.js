const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const dir = 'C:\\Users\\Albert\\Desktop\\Antigravity\\Jets-Munt\\SEO\\Competidores\\_procesado';
const outPath = 'C:\\Users\\Albert\\Desktop\\Antigravity\\Jets-Munt\\site\\scratch\\all_keywords.txt';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.xlsx'));
let allKeywords = new Set();

files.forEach(file => {
    try {
        const filePath = path.join(dir, file);
        const workbook = xlsx.readFile(filePath);
        
        workbook.SheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            const data = xlsx.utils.sheet_to_json(sheet);
            
            data.forEach(row => {
                // Usually the keyword is in a column named 'Keyword', 'keyword', or 'Search Term'
                // We'll just look for a string property that might be the keyword.
                const kw = row['Keyword'] || row['keyword'] || row['Search Term'] || row['Termino'];
                if (kw && typeof kw === 'string') {
                    allKeywords.add(kw.toLowerCase().trim());
                } else {
                    // fallback: grab the first string value in the row if 'Keyword' isn't explicitly named
                    const vals = Object.values(row);
                    if(vals.length > 0 && typeof vals[0] === 'string') {
                         allKeywords.add(vals[0].toLowerCase().trim());
                    }
                }
            });
        });
    } catch(e) {
        console.error(`Error processing ${file}:`, e.message);
    }
});

fs.writeFileSync(outPath, Array.from(allKeywords).sort().join('\n'));
console.log(`Extracted ${allKeywords.size} unique keywords.`);

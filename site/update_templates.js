const fs = require('fs');

function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = content;
    replacements.forEach(([search, replace]) => {
        modified = modified.split(search).join(replace);
    });
    if (modified !== content) {
        fs.writeFileSync(filePath, modified);
        console.log("Updated", filePath);
    }
}

// Spanish pages
replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/page.tsx', [
    ['description: engine.summary', 'description: engine.summaryEs || engine.summary'],
    ['<p>{engine.summary}</p>', '<p>{engine.summaryEs || engine.summary}</p>'],
]);

replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/motores/page.tsx', [
    ['<p>{engine.summary}</p>', '<p>{engine.summaryEs || engine.summary}</p>'],
]);

replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/products/[slug]/page.tsx', [
    ['description: engine.summary', 'description: engine.summaryEs || engine.summary'],
    ['description={engine.summary}', 'description={engine.summaryEs || engine.summary}'],
]);

replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/pro-series/page.tsx', [
    ['<p>{engine.summary}</p>', '<p>{engine.summaryEs || engine.summary}</p>'],
]);

replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/pro-series/[slug]/page.tsx', [
    ['description: engine.summary', 'description: engine.summaryEs || engine.summary'],
    ['description={engine.summary}', 'description={engine.summaryEs || engine.summary}'],
]);

replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/accesorios/page.tsx', [
    ['description: item.summary', 'description: item.summaryEs || item.summary'],
    ['<p>{item.summary}</p>', '<p>{item.summaryEs || item.summary}</p>'],
]);

// French pages
replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/fr/moteurs/page.tsx', [
    ['<p>{engine.summary}</p>', '<p>{engine.summaryFr || engine.summary}</p>'],
]);

replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/fr/produits/[slug]/page.tsx', [
    ['description={engine.summary}', 'description={engine.summaryFr || engine.summary}'],
    ['description: engine.summary', 'description: engine.summaryFr || engine.summary'],
]);

replaceInFile('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/fr/accessoires/page.tsx', [
    ['<p>{item.summary}</p>', '<p>{item.summaryFr || item.summary}</p>'],
    ['description: item.summary', 'description: item.summaryFr || item.summary'],
]);

console.log("Done");

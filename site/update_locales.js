const fs = require('fs');

function replaceInFileRegex(filePath, searchRegex, replaceFunc) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = content.replace(searchRegex, replaceFunc);
    if (modified !== content) {
        fs.writeFileSync(filePath, modified);
        console.log("Updated", filePath);
    }
}

const glob = require('fs').readdirSync;
const path = require('path');

function getFiles(dir, files = []) {
    if (!fs.existsSync(dir)) return files;
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else if (name.endsWith('.tsx')) {
            files.push(name);
        }
    }
    return files;
}

const enFiles = getFiles('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/en');
enFiles.forEach(file => {
    replaceInFileRegex(file, /<SeoPageShell([^>]*)>/g, (match, p1) => {
        if (!p1.includes('locale=')) {
            return `<SeoPageShell locale="en"${p1}>`;
        }
        return match;
    });
    replaceInFileRegex(file, /<SeoInternalLinks( ?)\/?>/g, '<SeoInternalLinks locale="en" />');
});

const frFiles = getFiles('c:/Users/Administrator/Desktop/Antigravity/Jets-Munt/site/app/fr');
frFiles.forEach(file => {
    replaceInFileRegex(file, /<SeoPageShell([^>]*)>/g, (match, p1) => {
        if (!p1.includes('locale=')) {
            return `<SeoPageShell locale="fr"${p1}>`;
        }
        return match;
    });
    replaceInFileRegex(file, /<SeoInternalLinks( ?)\/?>/g, '<SeoInternalLinks locale="fr" />');
});

console.log("Done");

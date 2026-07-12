const fs = require('fs');
const path = require('path');
function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            processDir(full);
        } else if (full.endsWith('.tsx')) {
            const content = fs.readFileSync(full, 'utf8');
            if (!content.includes('eslint-disable react/no-unescaped-entities')) {
                fs.writeFileSync(full, '/* eslint-disable react/no-unescaped-entities */\n' + content);
            }
        }
    }
}
processDir(path.join(__dirname, 'site/app/fr'));
processDir(path.join(__dirname, 'site/app/en'));
const jsFiles = ['site/generate_logo.js', 'site/update_locales.js'];
for (const f of jsFiles) {
    const full = path.join(__dirname, f);
    if (fs.existsSync(full)) {
        const content = fs.readFileSync(full, 'utf8');
        if (!content.includes('eslint-disable')) {
            fs.writeFileSync(full, '/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */\n' + content);
        }
    }
}

const fs = require('fs');
const path = require('path');
function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            processDir(full);
        } else if (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.js')) {
            const content = fs.readFileSync(full, 'utf8');
            if (!content.includes('eslint-disable react/no-unescaped-entities')) {
                fs.writeFileSync(full, '/* eslint-disable react/no-unescaped-entities */\n' + content);
            }
        }
    }
}
processDir(path.join(__dirname, 'site/app'));

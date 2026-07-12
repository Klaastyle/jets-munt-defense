const fs = require('fs');
const path = require('path');

const publicMedia = path.join(__dirname, 'site/public/media');
const siteDir = path.join(__dirname, 'site');

// Map to keep track of renames: oldPath -> newPath
const renameMap = {};
let counter = 1;

function processMediaDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            processMediaDir(full);
        } else if (file.includes('Gemini_Generated_Image_')) {
            const folderName = path.basename(dir);
            let prefix = 'imagen';
            if (folderName === '215') prefix = 'motor-turbojet-xm215-pro';
            if (folderName === '255') prefix = 'motor-turbojet-xm255-pro';
            if (folderName === 'about') prefix = 'jetsmunt-empresa-instalaciones';
            if (folderName === 'capabilities') prefix = 'sistemas-propulsion-uav';
            if (folderName === 'photos') prefix = 'jetsmunt-galeria-motores';
            if (folderName === 'services') prefix = 'servicio-tecnico-mantenimiento';
            
            const newName = prefix + '-' + counter + '.png';
            counter++;
            
            const newFull = path.join(dir, newName);
            fs.renameSync(full, newFull);
            
            // The path as it appears in code is e.g. /media/215/Gemini...
            const relOldPath = full.split('site\\public')[1].replace(/\\/g, '/');
            const relNewPath = newFull.split('site\\public')[1].replace(/\\/g, '/');
            
            renameMap[relOldPath] = relNewPath;
        }
    }
}

function processCodeDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory() && !full.includes('.next') && !full.includes('node_modules')) {
            processCodeDir(full);
        } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
            let content = fs.readFileSync(full, 'utf8');
            let changed = false;
            for (const [oldP, newP] of Object.entries(renameMap)) {
                if (content.includes(oldP)) {
                    content = content.split(oldP).join(newP);
                    changed = true;
                }
            }
            if (changed) {
                fs.writeFileSync(full, content);
            }
        }
    }
}

processMediaDir(publicMedia);
console.log('Renamed files:', renameMap);
processCodeDir(siteDir);
console.log('Updated references in code.');

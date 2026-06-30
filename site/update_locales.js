const fs = require('fs');

function updateFile(file, locale, pathPrefix) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/locale: "es_ES"/, `locale: "${locale}"`);
  content = content.replace(/locale="es"/, `locale="${locale.split('_')[0]}"`);
  content = content.replace(/path: "\/motores\//g, `path: "${pathPrefix}/`);
  content = content.replace(/breadcrumbPath="\/motores\//g, `breadcrumbPath="${pathPrefix}/`);
  fs.writeFileSync(file, content);
}

updateFile('app/en/engines/xm215-pro/page.tsx', 'en_US', '/en/engines');
updateFile('app/en/engines/xm255-pro/page.tsx', 'en_US', '/en/engines');
updateFile('app/fr/moteurs/xm215-pro/page.tsx', 'fr_FR', '/fr/moteurs');
updateFile('app/fr/moteurs/xm255-pro/page.tsx', 'fr_FR', '/fr/moteurs');
console.log('Done');

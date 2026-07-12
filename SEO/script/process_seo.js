const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const xlsx = require('xlsx');

const baseDir = path.join(path.resolve('..'), 'Competidores');
const outDir = path.join(baseDir, '_procesado');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const workbook = xlsx.utils.book_new();

function getAllCsvs(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== '_procesado' && file !== 'script') {
        getAllCsvs(filePath, fileList);
      }
    } else if (file.endsWith('.csv')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

async function processAll() {
  const allCsvs = getAllCsvs(baseDir);
  const grouped = {};
  for (const file of allCsvs) {
    const parentDir = path.basename(path.dirname(file));
    if (!grouped[parentDir]) grouped[parentDir] = [];
    grouped[parentDir].push(file);
  }

  for (const comp of Object.keys(grouped)) {
    const files = grouped[comp];
    let fileIndex = 1;
    for (const filePath of files) {
      const rows = [];
      await new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (data) => rows.push(data))
          .on('end', () => resolve())
          .on('error', (err) => reject(err));
      });
      
      if (rows.length > 0) {
        let suffix = `List_${fileIndex}`;
        const firstUrl = rows[0]['Ranking Url'];
        if (firstUrl) {
          try {
             const urlObj = new URL(firstUrl);
             suffix = urlObj.hostname.replace('www.', '') + urlObj.pathname.substring(0,4).replace(/[^a-zA-Z]/g, '');
          } catch(e) {}
        }
        let sheetName = `${comp.substring(0,10)}_${suffix}`.substring(0, 31);
        let counter = 1;
        let finalSheetName = sheetName;
        while (workbook.SheetNames.includes(finalSheetName)) {
           finalSheetName = `${sheetName.substring(0, 27)}_${counter}`;
           counter++;
        }
        const worksheet = xlsx.utils.json_to_sheet(rows);
        xlsx.utils.book_append_sheet(workbook, worksheet, finalSheetName);
        fileIndex++;
      }
    }
  }

  const outPath = path.join(outDir, 'Benchmark_Competidores_Global.xlsx');
  xlsx.writeFile(workbook, outPath);
  console.log('Saved to', outPath);
}

processAll().catch(console.error);

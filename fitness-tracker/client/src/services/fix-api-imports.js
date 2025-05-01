const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'client', 'src');
const badImport = `from '../api'`;
const correctImport = `from '../services/api'`;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (fullPath.endsWith('.vue') || fullPath.endsWith('.js')) {
      callback(fullPath);
    }
  });
}

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(badImport)) {
    const updated = content.replaceAll(badImport, correctImport);
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✔ Fixed import in: ${filePath}`);
  }
}

walkDir(baseDir, fixImports);

console.log('Finished fixing import paths.');
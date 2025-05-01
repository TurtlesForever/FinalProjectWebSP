const fs = require('fs');
const path = require('path');

const baseDir = './client/src';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function fixImports(filePath) {
  if (!filePath.endsWith('.vue') && !filePath.endsWith('.js')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(/@\/api/g, '@/services/api');

  if (updated !== content) {
    fs.writeFileSync(filePath, updated);
    console.log(`Fixed imports in ${filePath}`);
  }
}

walkDir(baseDir, fixImports);
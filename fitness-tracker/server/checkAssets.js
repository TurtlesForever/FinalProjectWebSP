const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');

fs.readdir(assetsDir, (err, files) => {
  if (err) {
    console.error('Error reading assets directory:', err);
    process.exit(1);
  }
  console.log('Assets found:');
  files.forEach(file => {
    console.log(' -', file);
  });
});
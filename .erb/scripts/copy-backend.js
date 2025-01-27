const fs = require('fs-extra');
const path = require('path');

const srcDir = path.join(__dirname, '../../src/renderer/backend');
const destDir = path.join(__dirname, '../../release/app/dist/backend');

fs.copySync(srcDir, destDir);
console.log('Backend files copied successfully');
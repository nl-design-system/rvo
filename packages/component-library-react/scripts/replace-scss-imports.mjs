// scripts/replace-scss-imports.mjs
// Replaces .scss imports with .css in dist/components/*/src/template.tsx and template.js (ESM version)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walk(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

const distDir = path.join(__dirname, '../dist/components');

walk(distDir, (filePath) => {
  if (/template.d\.(tsx|ts|js)$/.test(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const updated = content.replace(/(import\s+['\"]\.\/index)\.scss(['\"])/g, '$1.css$2');
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`\u001b[32;1m✔ Replaced scss import to css for:\u001b[0m ${path.relative(process.cwd(), filePath)}`);
    }
  }
});

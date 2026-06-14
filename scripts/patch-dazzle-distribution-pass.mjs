#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
const packagePath = path.resolve('package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
if (pkg.name === 'irregular-inclination') pkg.name = 'dazzle';
pkg.scripts = {
  ...(pkg.scripts || {}),
  "check:copy": "node scripts/check-laboratory-diamond-copy.mjs",
  "check:routes": "node scripts/check-route-inventory.mjs",
  "check:merchant": "npm run sync:content && node scripts/check-dazzle-merchant-readiness.mjs",
  "audit:catalog": "npm run sync:content && node scripts/generate-dazzle-catalog-audit.mjs",
  "check:distribution": "npm run check:copy && npm run check:routes && npm run check:merchant"
};
fs.writeFileSync(packagePath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');
console.log('Patched package.json with Dazzle distribution scripts.');

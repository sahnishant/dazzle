#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { jewelryItems } from '../src/data/jewelry.js';
const byCategory = new Map();
for (const item of jewelryItems) byCategory.set(item.category, [...(byCategory.get(item.category) || []), item]);
const lines = ['# Dazzle Catalogue Audit','',`Generated: ${new Date().toISOString()}`,'',`Total products: ${jewelryItems.length}`,'','## Category counts',''];
for (const [category, items] of byCategory.entries()) lines.push(`- ${category}: ${items.length}`);
lines.push('', '## Missing extended fields', '');
const optionalFields = ['diamondOrigin','certificationLab','metalHallmark','metalPurity','leadTime','productType'];
let missingCount = 0;
for (const item of jewelryItems) {
  const missing = optionalFields.filter((field) => !item[field]);
  if (missing.length) { missingCount += 1; lines.push(`- ${item.id}: ${missing.join(', ')}`); }
}
if (!missingCount) lines.push('- None');
fs.mkdirSync(path.resolve('reports'), { recursive: true });
fs.writeFileSync(path.resolve('reports/catalog-audit.md'), `${lines.join('\n')}\n`, 'utf8');
console.log('Wrote reports/catalog-audit.md');

#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
const required = [
  'src/pages/laboratory-grown-diamonds.astro',
  'src/pages/laboratory-grown-diamond-rings.astro',
  'src/pages/laboratory-grown-diamond-engagement-rings.astro',
  'src/pages/laboratory-grown-diamond-pendants.astro',
  'src/pages/laboratory-grown-diamond-earrings.astro',
  'src/pages/custom-laboratory-grown-diamond-jewellery.astro',
  'src/pages/igi-certified-laboratory-grown-diamonds.astro',
  'src/pages/laboratory-grown-diamond-buying-guide.astro',
  'src/pages/laboratory-grown-diamonds-in-bhagalpur.astro',
  'src/pages/laboratory-grown-diamonds-in-bihar.astro',
  'src/pages/merchant-center-readiness.astro',
  'src/pages/google-shopping-readiness.astro',
  'src/pages/merchant-feed.xml.js',
  'src/pages/product-feed.csv.js',
  'src/pages/sitemap.xml.js',
  'src/pages/robots.txt.js'
];
const missing = required.filter((file) => !fs.existsSync(path.resolve(file)));
if (missing.length) {
  console.error('Missing required routes/files:');
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}
console.log(`Route inventory check passed (${required.length} files).`);

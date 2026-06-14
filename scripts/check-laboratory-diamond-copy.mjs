#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const blocked = [
  /\bLGD\b/i, /\blab diamond(s)?\b/i, /\blab-grown diamond(s)?\b/i,
  /\bcultured diamond(s)?\b/i, /\beco[-\s]?diamond(s)?\b/i,
  /\bearth[-\s]?friendly diamond(s)?\b/i, /\bconflict[-\s]?free diamond(s)?\b/i,
  /\binvestment diamond(s)?\b/i, /\breal diamond(s)?\b/i, /\bpure diamond(s)?\b/i
];
const exts = new Set(['.astro','.js','.json','.md']);
function walk(dir, out=[]) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (exts.has(path.extname(entry.name))) out.push(full);
  }
  return out;
}
const issues = [];
for (const file of walk(path.join(root, 'src'))) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const text = fs.readFileSync(file, 'utf8');
  blocked.forEach((pattern) => { if (pattern.test(text)) issues.push(`${rel}: avoid ${pattern}`); });
}
if (issues.length) {
  console.error('Laboratory-grown diamond copy check failed:');
  issues.slice(0, 80).forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}
console.log('Laboratory-grown diamond copy check passed.');

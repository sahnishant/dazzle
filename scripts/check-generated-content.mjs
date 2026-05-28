#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import process from 'node:process';

function run(command, args) {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    shell: process.platform === 'win32',
    stdio: 'inherit',
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  return result.status ?? 1;
}

const syncStatus = run('npm', ['run', 'sync:content']);
if (syncStatus !== 0) {
  process.exit(syncStatus);
}

const diffStatus = run('git', [
  'diff',
  '--exit-code',
  '--',
  'src/data/businessContact.js',
  'src/data/siteConfig.js',
  'src/data/jewelry.js',
]);

if (diffStatus !== 0) {
  console.error('\nGenerated content is stale. Run `npm run sync:content` and commit the updated generated files.');
  process.exit(diffStatus);
}

console.log('\nGenerated content is up to date.');

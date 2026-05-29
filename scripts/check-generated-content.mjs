#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import process from 'node:process';

function run(command, args) {
  const isWin = process.platform === 'win32';
  let executable = command;
  let useShell = false;

  if (command === 'npm') {
    const npmCli = process.env.npm_execpath;
    if (npmCli) {
      executable = process.execPath;
      args = [npmCli, ...args];
    } else {
      executable = isWin ? 'npm.cmd' : 'npm';
      useShell = isWin;
    }
  }

  const result = spawnSync(executable, args, {
    encoding: 'utf8',
    stdio: 'inherit',
    shell: useShell,
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
  'src/data/homepageContent.js',
  'src/data/jewelry.js',
]);

if (diffStatus !== 0) {
  console.error('\nGenerated content is stale. Run `npm run sync:content` and commit the updated generated files.');
  process.exit(diffStatus);
}

console.log('\nGenerated content is up to date.');

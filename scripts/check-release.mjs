#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import process from 'node:process';

function run(command, args) {
  const npmCli = process.env.npm_execpath;
  const isNpm = command === 'npm';
  const executable = isNpm && npmCli ? process.execPath : command;
  const finalArgs = isNpm && npmCli ? [npmCli, ...args] : args;

  const result = spawnSync(executable, finalArgs, {
    encoding: 'utf8',
    shell: !npmCli && process.platform === 'win32',
    stdio: 'inherit',
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  return result.status ?? 1;
}

const steps = [
  ['npm', ['run', 'sync:content']],
  ['npm', ['run', 'build']],
  ['npm', ['run', 'check:launch']],
  ['npm', ['run', 'check:product-media']],
  ['npm', ['run', 'check:generated-content']],
  ['git', ['diff', '--check']],
];

for (const [command, args] of steps) {
  const status = run(command, args);
  if (status !== 0) {
    process.exit(status);
  }
}

console.log('\nRelease checks completed.');

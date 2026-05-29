#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { jewelryItems } from '../src/data/jewelry.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');
const strictMode = process.argv.includes('--strict');

const errors = [];
const warnings = [];
const passes = [];

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

function addPass(message) {
  passes.push(message);
}

function normalizePublicPath(assetPath) {
  if (typeof assetPath !== 'string' || !assetPath.startsWith('/')) return null;
  return path.join(publicDir, assetPath.replace(/^\//, ''));
}

function checkAssetExists(assetPath, context) {
  const fullPath = normalizePublicPath(assetPath);
  if (!fullPath) {
    addError(`${context}: asset path must start with '/': ${assetPath}`);
    return false;
  }

  if (!fs.existsSync(fullPath)) {
    addError(`${context}: missing asset ${assetPath}`);
    return false;
  }

  return true;
}

function addUsage(usageMap, assetPath, itemId, field) {
  if (typeof assetPath !== 'string' || !assetPath.trim()) return;
  const usage = usageMap.get(assetPath) || [];
  usage.push({ itemId, field });
  usageMap.set(assetPath, usage);
}

function checkRepeatedImageUsage(imageUsageByPath) {
  imageUsageByPath.forEach((usages, assetPath) => {
    const itemIds = [...new Set(usages.map((usage) => usage.itemId))];
    if (itemIds.length <= 1) return;

    const fieldSummary = usages
      .map((usage) => `${usage.itemId}.${usage.field}`)
      .join(', ');

    addWarning(`Asset ${assetPath} is reused across multiple products (${fieldSummary}). Confirm this is intentional before launch.`);
  });
}

function checkProductMedia() {
  if (!Array.isArray(jewelryItems) || jewelryItems.length === 0) {
    addError('jewelryItems must be a non-empty array.');
    return;
  }

  const imageUsageByPath = new Map();

  jewelryItems.forEach((item, index) => {
    const itemId = item?.id || `item[${index}]`;
    const images = [];

    if (item?.mainImage) {
      checkAssetExists(item.mainImage, `${itemId}.mainImage`);
      addUsage(imageUsageByPath, item.mainImage, itemId, 'mainImage');
      images.push(item.mainImage);
    } else {
      addError(`${itemId}: mainImage is required.`);
    }

    if (!Array.isArray(item?.additionalImages)) {
      addWarning(`${itemId}: additionalImages should be an array.`);
    } else {
      item.additionalImages.forEach((imagePath, imageIndex) => {
        checkAssetExists(imagePath, `${itemId}.additionalImages[${imageIndex}]`);
        addUsage(imageUsageByPath, imagePath, itemId, `additionalImages[${imageIndex}]`);
        images.push(imagePath);
      });

      if (item.additionalImages.length === 0) {
        addWarning(`${itemId}: add at least one supporting product image before public launch.`);
      }
    }

    const uniqueImages = new Set(images);
    if (uniqueImages.size !== images.length) {
      addWarning(`${itemId}: product media list contains duplicate image paths.`);
    }
  });

  checkRepeatedImageUsage(imageUsageByPath);
  addPass(`Checked product media for ${jewelryItems.length} products.`);
}

function printSection(title, entries, symbol) {
  if (entries.length === 0) return;
  console.log(`\n${title}`);
  entries.forEach((entry) => console.log(`${symbol} ${entry}`));
}

checkProductMedia();

console.log('\nDazzle product media audit');
printSection('Passes', passes, '✓');
printSection('Warnings', warnings, '⚠');
printSection('Errors', errors, '✗');

const shouldFail = errors.length > 0 || (strictMode && warnings.length > 0);

if (shouldFail) {
  console.log(`\nProduct media audit failed${strictMode ? ' in strict mode' : ''}.`);
  process.exit(1);
}

console.log('\nProduct media audit completed.');

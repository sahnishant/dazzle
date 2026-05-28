#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { jewelryItems } from '../src/data/jewelry.js';
import { businessContact } from '../src/data/businessContact.js';
import { siteConfig } from '../src/data/siteConfig.js';
import {
  getBusinessContactReadiness,
  getUsableSocials,
  isUsableContactValue,
  isUsableDirectMessageNumber,
} from '../src/utils/businessContactReadiness.js';

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

function assertRequiredString(value, label, itemId) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    addError(`${itemId}: missing required string field '${label}'.`);
  }
}

function normalizePublicPath(assetPath) {
  if (typeof assetPath !== 'string' || !assetPath.startsWith('/')) return null;
  return path.join(publicDir, assetPath.replace(/^\//, ''));
}

function checkAssetExists(assetPath, context) {
  const fullPath = normalizePublicPath(assetPath);
  if (!fullPath) {
    addError(`${context}: asset path must start with '/': ${assetPath}`);
    return;
  }

  if (!fs.existsSync(fullPath)) {
    addError(`${context}: missing asset ${assetPath}`);
  }
}

function checkProductData() {
  if (!Array.isArray(jewelryItems) || jewelryItems.length === 0) {
    addError('jewelryItems must be a non-empty array.');
    return;
  }

  const ids = new Set();
  const categories = new Set();
  const allowedIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  jewelryItems.forEach((item, index) => {
    const itemId = item?.id || `item[${index}]`;

    assertRequiredString(item?.id, 'id', itemId);
    assertRequiredString(item?.name, 'name', itemId);
    assertRequiredString(item?.category, 'category', itemId);
    assertRequiredString(item?.mainImage, 'mainImage', itemId);
    assertRequiredString(item?.description, 'description', itemId);
    assertRequiredString(item?.price, 'price', itemId);
    assertRequiredString(item?.material, 'material', itemId);
    assertRequiredString(item?.stoneType, 'stoneType', itemId);
    assertRequiredString(item?.style, 'style', itemId);
    assertRequiredString(item?.dimensions, 'dimensions', itemId);
    assertRequiredString(item?.careInstructions, 'careInstructions', itemId);
    assertRequiredString(item?.uniqueFeatures, 'uniqueFeatures', itemId);

    if (item?.id) {
      if (ids.has(item.id)) addError(`Duplicate product id '${item.id}'.`);
      ids.add(item.id);

      if (!allowedIdPattern.test(item.id)) {
        addError(`${item.id}: product id must be lowercase kebab-case.`);
      }
    }

    if (item?.category) categories.add(item.category);

    if (typeof item?.priceValue !== 'number' || Number.isNaN(item.priceValue) || item.priceValue < 0) {
      addError(`${itemId}: priceValue must be a non-negative number.`);
    }

    if (!(item?.dateAdded instanceof Date) || Number.isNaN(item.dateAdded.getTime())) {
      addError(`${itemId}: dateAdded must be a valid Date.`);
    }

    if (typeof item?.popularityScore !== 'number') {
      addWarning(`${itemId}: popularityScore should be numeric for sorting.`);
    }

    if (!item?.details || typeof item.details !== 'object') {
      addError(`${itemId}: details object is required.`);
    } else {
      ['metal', 'mainStone', 'cut', 'color', 'clarity', 'certification'].forEach((field) => {
        assertRequiredString(item.details[field], `details.${field}`, itemId);
      });
    }

    if (item?.mainImage) checkAssetExists(item.mainImage, `${itemId}.mainImage`);

    if (!Array.isArray(item?.additionalImages)) {
      addWarning(`${itemId}: additionalImages should be an array.`);
    } else {
      item.additionalImages.forEach((imagePath, imageIndex) => {
        checkAssetExists(imagePath, `${itemId}.additionalImages[${imageIndex}]`);
      });

      if (item.additionalImages.length === 0) {
        addWarning(`${itemId}: add supporting product images before public launch.`);
      }
    }
  });

  addPass(`Checked ${jewelryItems.length} product records across ${categories.size} categories.`);
}

function checkBusinessContact() {
  const readiness = getBusinessContactReadiness(businessContact);

  if (!readiness.hasPhone) addWarning('Business phone/display phone still appears incomplete or placeholder-like.');
  if (!readiness.hasDirectMessage) addWarning('Direct message/WhatsApp number is missing or invalid.');
  if (!readiness.hasEmail) addWarning('Business email still appears incomplete or placeholder-like.');
  if (!readiness.hasAddress) addWarning('Business address still appears incomplete or placeholder-like.');
  if (!readiness.hasSocials) addWarning('No usable social links are configured.');

  if (businessContact?.directMessageNumber && !isUsableDirectMessageNumber(businessContact.directMessageNumber)) {
    addWarning('directMessageNumber must use international format digits only, without +, spaces, or hyphens.');
  }

  if (businessContact?.telHref && !isUsableContactValue(businessContact.telHref)) {
    addWarning('telHref appears placeholder-like.');
  }

  const usableSocials = getUsableSocials(businessContact?.socials || []);
  if ((businessContact?.socials || []).length > usableSocials.length) {
    addWarning('One or more social links look placeholder-like and are filtered from public structured data.');
  }

  addPass('Checked business contact readiness.');
}

function checkSiteConfig() {
  if (!siteConfig?.name) addError('siteConfig.name is required.');
  if (!siteConfig?.url) {
    addError('siteConfig.url is required.');
    return;
  }

  try {
    const parsed = new URL(siteConfig.url);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      addError('siteConfig.url must be http or https.');
    }
    if (parsed.hostname.includes('example.com')) {
      addWarning('siteConfig.url still looks like an example domain.');
    }
    if (parsed.hostname.includes('netlify.app')) {
      addWarning('siteConfig.url uses a Netlify preview/default domain. Confirm this is the intended production domain.');
    }
  } catch {
    addError('siteConfig.url must be a valid absolute URL.');
  }

  addPass('Checked site config.');
}

function checkRedirects() {
  const redirectsPath = path.join(publicDir, '_redirects');
  if (!fs.existsSync(redirectsPath)) {
    addWarning('public/_redirects is missing. Add aliases when product IDs change.');
    return;
  }

  const lines = fs.readFileSync(redirectsPath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));

  const routePattern = /^\/\S+\s+\/\S+\s+30[1278]$/;

  lines.forEach((line, index) => {
    if (!routePattern.test(line)) {
      addError(`public/_redirects line ${index + 1} has invalid format: ${line}`);
    }
  });

  addPass(`Checked ${lines.length} redirect aliases.`);
}

function printSection(title, entries, symbol) {
  if (entries.length === 0) return;
  console.log(`\n${title}`);
  entries.forEach((entry) => console.log(`${symbol} ${entry}`));
}

checkProductData();
checkBusinessContact();
checkSiteConfig();
checkRedirects();

console.log('\nDazzle launch readiness audit');
printSection('Passes', passes, '✓');
printSection('Warnings', warnings, '⚠');
printSection('Errors', errors, '✗');

const shouldFail = errors.length > 0 || (strictMode && warnings.length > 0);

if (shouldFail) {
  console.log(`\nLaunch audit failed${strictMode ? ' in strict mode' : ''}.`);
  process.exit(1);
}

console.log('\nLaunch audit completed.');

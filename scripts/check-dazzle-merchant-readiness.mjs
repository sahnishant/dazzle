#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { jewelryItems } from '../src/data/jewelry.js';
import { businessContact } from '../src/data/businessContact.js';
function assert(condition, message) { if (!condition) throw new Error(message); }
const policyRoutes = ['policies','shipping-policy','return-exchange-policy','custom-order-policy','certification-policy','privacy','terms'];
try {
  assert(jewelryItems.length >= 20, `Expected at least 20 catalogue items, found ${jewelryItems.length}.`);
  assert(businessContact.displayPhone, 'Business display phone is required.');
  assert(businessContact.directMessageNumber, 'Direct message number is required.');
  assert(businessContact.serviceArea, 'Service area is required.');
  policyRoutes.forEach((route) => assert(fs.existsSync(path.resolve(`src/pages/${route}.astro`)), `${route} page is required.`));
  jewelryItems.forEach((product) => {
    assert(product.description?.toLowerCase().includes('laboratory-grown diamond'), `${product.id}: description must disclose origin.`);
    assert(product.diamondOrigin?.toLowerCase().includes('laboratory-grown diamond'), `${product.id}: diamondOrigin is required.`);
    assert(product.details?.certification, `${product.id}: certification detail is required.`);
    assert(product.material, `${product.id}: material is required.`);
  });
  console.log('Dazzle Merchant readiness check passed.');
} catch (error) {
  console.error(`Dazzle Merchant readiness check failed: ${error.message}`);
  process.exit(1);
}

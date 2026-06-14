#!/usr/bin/env node
import { jewelryItems } from '../src/data/jewelry.js';
import {
  getMerchantEligibleProducts,
  getMerchantEligibilityReason,
  buildMerchantTitle,
  buildMerchantDescription,
  formatMerchantPrice,
} from '../src/utils/merchantFeed.js';

const eligible = getMerchantEligibleProducts(jewelryItems);
const ineligible = jewelryItems
  .filter((product) => !eligible.includes(product))
  .map((product) => ({ id: product.id, reason: getMerchantEligibilityReason(product) }));

const errors = [];

if (eligible.length < 10) {
  errors.push(`Expected at least 10 Merchant-feed eligible products, found ${eligible.length}.`);
}

eligible.forEach((product) => {
  if (product.category === 'custom') errors.push(`${product.id}: custom products must not enter Merchant feed.`);
  if (Number(product.priceValue || 0) <= 0) errors.push(`${product.id}: priceValue must be positive for Merchant feed.`);
  if (!buildMerchantTitle(product).toLowerCase().includes('laboratory-grown')) errors.push(`${product.id}: merchant title must disclose laboratory-grown origin.`);
  if (!buildMerchantDescription(product).toLowerCase().includes('laboratory-grown diamond')) errors.push(`${product.id}: merchant description must disclose origin.`);
  if (!formatMerchantPrice(product).endsWith('INR')) errors.push(`${product.id}: merchant price must use INR.`);
});

if (errors.length) {
  console.error('Merchant feed check failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  console.error('\nIneligible products:');
  ineligible.forEach((item) => console.error(`- ${item.id}: ${item.reason}`));
  process.exit(1);
}

console.log(`Merchant feed check passed. Eligible: ${eligible.length}. Excluded: ${ineligible.length}.`);

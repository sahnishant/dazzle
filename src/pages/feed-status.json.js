import { jewelryItems } from '../data/jewelry.js';
import { getMerchantEligibleProducts, getMerchantEligibilityReason } from '../utils/merchantFeed.js';

export function GET() {
  const eligible = getMerchantEligibleProducts(jewelryItems);
  const excluded = jewelryItems
    .filter((product) => !eligible.includes(product))
    .map((product) => ({
      id: product.id,
      category: product.category,
      reason: getMerchantEligibilityReason(product),
    }));

  const byCategory = jewelryItems.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const eligibleByCategory = eligible.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  return new Response(JSON.stringify({
    generatedAt: new Date().toISOString(),
    totalProducts: jewelryItems.length,
    merchantEligibleProducts: eligible.length,
    totalByCategory: byCategory,
    merchantEligibleByCategory: eligibleByCategory,
    excluded,
    feeds: {
      xml: '/merchant-feed.xml',
      csv: '/product-feed.csv',
    },
  }, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

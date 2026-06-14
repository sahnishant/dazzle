import { jewelryItems } from '../data/jewelry.js';
export function GET() {
  const byCategory = jewelryItems.reduce((acc, item) => { acc[item.category] = (acc[item.category] || 0) + 1; return acc; }, {});
  const missing = jewelryItems.filter((item) => !item.diamondOrigin || !item.details?.certification || !item.material).map((item) => item.id);
  return new Response(JSON.stringify({ generatedAt: new Date().toISOString(), totalProducts: jewelryItems.length, byCategory, missingTrustFields: missing, feeds: { xml: '/merchant-feed.xml', csv: '/product-feed.csv' } }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}

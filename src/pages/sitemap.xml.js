import { jewelryItems } from '../data/jewelry.js';
import { highIntentRoutes } from '../data/diamondTaxonomy.js';
import { siteConfig } from '../data/siteConfig.js';
const baseUrl = siteConfig.url.replace(/\/$/, '');
const staticRoutes = ['/', '/collections/', '/about/', '/contact/', '/policies/', '/shipping-policy/', '/return-exchange-policy/', '/custom-order-policy/', '/certification-policy/', '/privacy/', '/terms/', '/certification/', ...highIntentRoutes];
const productRoutes = jewelryItems.map((product) => `/collections/${product.category}/${product.id}/`);
const categoryRoutes = Array.from(new Set(jewelryItems.map((product) => `/collections/${product.category}/`)));
const escapeXml = (value = '') => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function GET() {
  const routes = Array.from(new Set([...staticRoutes, ...categoryRoutes, ...productRoutes])).sort().map((route) => `  <url><loc>${escapeXml(`${baseUrl}${route}`)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

// src/pages/sitemap.xml.js
import { getCollection } from 'astro:content';
import { jewelryItems } from '../data/jewelry.js';
import { siteConfig } from '../data/siteConfig.js';

const staticRoutes = [
  '/',
  '/about/',
  '/blog/',
  '/collections/',
  '/contact/',
  '/diamond-buyer-guide/',
  '/diamond-grading/',
  '/diamond-prices-fall/',
  '/diamond-rarity/',
  '/policies/',
  '/privacy-policy/',
  '/thank-you/',
  '/what-are-lab-grown-diamonds/',
];

const escapeXml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const normalizeSiteUrl = (url) => url.replace(/\/$/, '');
const toAbsoluteUrl = (path) => `${normalizeSiteUrl(siteConfig.url)}${path}`;

export async function GET() {
  const articles = await getCollection('articles');
  const categoryRoutes = [...new Set(jewelryItems.map((item) => item.category))]
    .filter(Boolean)
    .map((category) => `/collections/${category}/`);
  const productRoutes = jewelryItems.map((item) => `/collections/${item.category}/${item.id}/`);
  const articleRoutes = articles.map((article) => `/blog/${article.slug}/`);

  const routes = [...new Set([
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...articleRoutes,
  ])].sort();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${escapeXml(toAbsoluteUrl(route))}</loc>
  </url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

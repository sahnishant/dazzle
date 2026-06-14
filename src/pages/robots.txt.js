import { siteConfig } from '../data/siteConfig.js';
export function GET() {
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

import type { APIRoute } from 'astro';
import { siteConfig } from '../data/siteConfig.js';

export const GET: APIRoute = () => {
  const base = siteConfig.url.replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

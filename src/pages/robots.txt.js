// src/pages/robots.txt.js
import { siteConfig } from '../data/siteConfig.js';

const siteUrl = siteConfig.url.replace(/\/$/, '');

export function GET() {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

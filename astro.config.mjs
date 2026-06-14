// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mydazzle.netlify.app',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://premium-milk-company.netlify.app',
  integrations: [
    tailwind(),
    sitemap()
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
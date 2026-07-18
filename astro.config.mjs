import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap'; // Remove or comment this out
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Smalladhamyw.github.io',
  base: '/my-portfolio',
  integrations: [
    mdx(), 
    // sitemap(),                      // Remove or comment this out
    tailwind()
  ],
});
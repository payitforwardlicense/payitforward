import mdx from '@astrojs/mdx'
// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    //clientPrerender: true,
    svg: true,
  },
})
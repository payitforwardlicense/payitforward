import mdx from '@astrojs/mdx'
// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    //clientPrerender: true,
    svg: true,
  },
})

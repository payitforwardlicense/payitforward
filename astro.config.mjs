import mdx from '@astrojs/mdx'
// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://payitforwardlicense.com',
  integrations: [mdx()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    clientPrerender: true,
    svg: true,
  },
  //trailingSlash: "never",
  markdown: {
    shikiConfig: {
      wrap: true,
      // themes: {
      //   light: 'github-dark',
      //   dark: 'github-dark',
      // },
      theme: 
        // `andromeeda`
        //`aurora-x`
         `ayu-dark`
        // `catppuccin-frappe`
        // `catppuccin-macchiato`
        // `catppuccin-mocha`
        // `dark-plus`
        // `dracula`
        // `dracula-soft`
        // `everforest-dark`
        // `github-dark`
        // `github-dark-default`
        // `github-dark-dimmed`
        // `github-dark-high-contrast`
        // `houston`
        // `kanagawa-dragon`
        // `kanagawa-wave`
        // `laserwave`
        // `material-theme`
        // `material-theme-darker`
        // `material-theme-ocean`
        // `material-theme-palenight`
        // `min-dark`
        // `monokai`
        // `night-owl`
        // `nord`
        // `one-dark-pro`
        // `plastic`
        // `poimandres`
        // `red`
        // `rose-pine`
        // `rose-pine-moon`
        // `slack-dark`
        // `solarized-dark`
        // `synthwave-84`
        // `tokyo-night`
        // `vesper`
        // `vitesse-black`
        // `vitesse-dark`
    },
  },
})

//'rose-pine-dawn
//ayu-dark
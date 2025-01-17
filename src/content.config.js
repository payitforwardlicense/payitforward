import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string(),
  })
})

const shop = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/shop' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string(),
    image: z.string(),
    price: z.number(),
    category: z.string(),
    url: z.string(),
  })
})

export const collections = { posts, shop }

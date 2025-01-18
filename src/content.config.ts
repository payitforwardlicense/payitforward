import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string(),
    draft: z.boolean().default(true),
    description: z.string().default(''),
  })
})

const shop = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './shop' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string(),
    image: z.string(),
    price: z.number(),
    category: z.string(),
    url: z.string(),
    description: z.string().default(''),
  })
})

export const collections = { posts, shop }
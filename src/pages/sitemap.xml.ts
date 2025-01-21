import { getCollection } from 'astro:content'

export async function GET() {
  const siteUrl = import.meta.env.SITE
  const sort = ({ data }) => {
    console.log(data)
    if (!import.meta.env.PROD) return true
    if (data.date > new Date()) return false
    return data.draft !== true
  }
  const posts = await getCollection('posts', sort)
  const shop = await getCollection('shop', sort)
  const items = [...shop, ...posts]
  const result = `  
<?xml version="1.0" encoding="UTF-8"?>  
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}/</loc></url>  
  ${items
    .map((item) => {
      const lastMod = (item.data.updatedDate ?? item.data.date).toISOString()
      const loc = item.data.slug ? `/${item.data.slug}` : ''
      return `<url><loc>${siteUrl}${loc}</loc><lastmod>${lastMod}</lastmod></url>`
    })
    .join('\n')}
</urlset>
  `.trim()

  return new Response(result, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
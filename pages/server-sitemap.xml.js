import { getAllCategories, getAllSlugs } from 'lib/api'
import { getServerSideSitemap } from 'next-sitemap'
import { siteMeta } from 'lib/constants'

export default function Sitemap() {}

export async function getServerSideProps(context) {
  const posts = await getAllSlugs()
  const postFields = posts.map((post) => {
    return {
      loc: `${siteMeta.siteUrl}/${post.slug}`,
      lastmod: post.reviseAt,
      changefreq: 'daily',
    }
  })

  const cats = await getAllCategories()
  const catFields = cats.map((cat) => {
    return {
      loc: `${siteMeta.siteUrl}/blog/category/${cat.slug}`,
    }
  })

  const assFields = [...postFields, ...catFields]

  return await getServerSideSitemap(context, allFields)
}

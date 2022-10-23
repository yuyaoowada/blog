/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://oowadadada',
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://oowada/server-sitemap.xml'],
  },
}

module.exports = config

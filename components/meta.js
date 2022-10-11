import Head from "next/head";

// サイトに関する情報
import { siteMeta } from "lib/constants";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle }) {
  return (
    <Head>
      <title>{pageTitle} | {siteTitle}</title>
      <meta property="og:title" content={`${pageTitle} | ${siteTitle}`} />
    </Head>
  )
}
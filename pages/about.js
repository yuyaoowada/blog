import Contact from 'components/contact'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import TwoColumn from 'components/two-column'
import Image from 'next/image'
//import eyecatch from 'images/about.jpg'
import Head from 'next/head'
import Meta from 'components/meta'
import Accordion from 'components/accordion'

const eyecatch = {
  src: 'https://images.microcms-assets.io/assets/a1ca6853671149889827a090b73896cd/1b90cf05ca074e8c96d06964d69e68b5/about.jpg',
  height: 960,
  width: 1920,
  blurDataURL: 'data:image/jpeg;base64,',
}

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle=" アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumn.Main>
          <PostBody>
            <p>Cubeが得意とする分野はモノづくりです。</p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらモノづくりをしています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>今まで違うものを作ることで愛着が湧いてきます。</p>

            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>プログラミングのポイントは作りたいものを作ることです。</p>
            </Accordion>
            <Accordion heading="古代語の解読について">
              <p>
                古代語を解読するのに必要なのは、書かれた文字そのものだけです。
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  )
}

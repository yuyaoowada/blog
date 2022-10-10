import Contact from "components/contact";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import TwoColumn from "components/two-column";
import Image from "next/image";
import eyecatch from 'images/about.jpg'

export default function About() {
  return (
    <Container>
      <Hero 
        title="About"
        subtitle="About development activities"
      />
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
            <p>
              Cubeが得意とする分野はモノづくりです。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
            モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。
            </p>
            <p>
            単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらモノづくりをしています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
            今まで違うものを作ることで愛着が湧いてきます。
            </p>
          </PostBody>
        </TwoColumn.Main>

      <TwoColumn.Sidebar>
        <Contact />
      </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  )
}
import Container from 'components/container'
import Hero from 'components/hero'
import Meta from 'components/meta'

export default function Custom404() {
  return (
    <Container>
      <Meta pageTitle="404 - Page not found" />
      <Hero title="404" subtitle="ページが見つかりません" />
    </Container>
  )
}

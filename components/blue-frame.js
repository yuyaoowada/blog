import styles from 'styles/nested-layout.module.css'
import Link from 'next/link'
import Container from 'components/container'

export default function BlueFrame({ children }) {
  return (
    <div className={styles.frame}>
      <Container>{children}</Container>
      <Link href="/blog">
        <a className={styles.sideBtn}>Recent Blog Posts</a>
      </Link>
    </div>
  )
}

import styles from 'styles/pagination.module.css'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Pagination({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <a className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
            </a>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>
            <a className={styles.iconText}>
              <span>{nextText}</span>
              <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}

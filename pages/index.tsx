import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import Seo from '../src/components/Seo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { locale } = useRouter()
  return (
    <>
      <Seo />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <FormattedMessage id="title" />
            <span className={styles.blue}>.</span>
          </h1>
          <h2 className={styles.description}>
            <FormattedMessage id="description" />
          </h2>
          <Link href="/" locale={locale === 'en' ? 'ru' : 'en'} passHref>
            <a className={styles.link}>
              <FormattedMessage id="changeLang" />
            </a>
          </Link>
        </main>
      </div>
    </>
  )
}

export default Home

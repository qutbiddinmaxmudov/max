// import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'
import { FormattedMessage, useIntl } from 'react-intl'
import styles from '../styles/Home.module.css'

const Home: any = () => {
  const intl = useIntl()
  const { locale } = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>{intl.formatMessage({ id: 'title' })}</title>
        <meta name="description" content={intl.formatMessage({ id: 'description' })} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
  )
}

export default Home

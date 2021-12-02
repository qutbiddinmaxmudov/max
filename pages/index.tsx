import type { NextPage } from 'next'
import { FormattedMessage } from 'react-intl'
import Seo from '../src/components/Seo'
import LocaleSwitcher from '../src/containers/LocaleSwitcher'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => (
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
        <LocaleSwitcher to="/">
          <a className={styles.link}>
            <FormattedMessage id="changeLang" />
          </a>
        </LocaleSwitcher>
      </main>
    </div>
  </>
)

export default Home

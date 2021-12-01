import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/dist/client/router'
import enLocale from '../locale/en.json'
import ruLocale from '../locale/ru.json'

function MyApp({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter()
  return (
    <IntlProvider locale={locale} messages={locale === 'en' ? enLocale : ruLocale}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp

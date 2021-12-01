import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import enLocale from '../locale/en.json'
import ruLocale from '../locale/ru.json'
import theme from '../src/theme'
import createEmotionCache from '../src/theme/cache'
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
}

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) => {
  const { locale = 'en' } = useRouter()
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale} messages={locale === 'en' ? enLocale : ruLocale}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

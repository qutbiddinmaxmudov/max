import type { AppProps } from 'next/app'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import enLocale from '../locale/en.json'
import ruLocale from '../locale/ru.json'
import createEmotionCache from '../src/theme/cache'
import Cookies from 'js-cookie'
import generateTheme from '../src/theme'
import Seo from '../src/components/Seo'
import formatLocaleMessages from '../src/helpers/formatLocaleMessages'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
}

const defaultTheme = Cookies.get('theme') as themeType | undefined
type themeType = 'light' | 'dark'

export const AppContext = createContext<{ theme: themeType; changeTheme: () => void } | null>(null)

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) => {
  const { locale = 'en' } = useRouter()
  const [themeType, setThemeType] = useState(defaultTheme || 'dark')
  const changeTheme = useCallback(() => {
    setThemeType((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    Cookies.set('NEXT_LOCALE', locale, { expires: 365 })
  }, [locale])

  const theme = useMemo(() => generateTheme(themeType), [themeType])
  const messageText = useMemo(() => formatLocaleMessages(locale !== 'ru' ? enLocale : ruLocale), [locale])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale} messages={messageText}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Seo />
          <Box
            sx={{
              minHeight: '100vh',
              background: (theme) => theme.palette.background.default,
            }}
          >
            <AppContext.Provider value={{ theme: themeType, changeTheme }}>
              <Component {...pageProps} theme={themeType} />
            </AppContext.Provider>
          </Box>
        </IntlProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

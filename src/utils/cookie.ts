import cookie from 'js-cookie'

interface CookieInterface {
  NEXT_LOCALE?: string
}

type cookieKeys = keyof CookieInterface
type cookieInterfaceValues = string

export const setCookie = (key: cookieKeys, value: cookieInterfaceValues) => {
  cookie.set(key, value)
}

export const getCookie = (key: cookieKeys) => {
  const cookies = cookie.get()
  return key ? cookies[key] : cookies
}

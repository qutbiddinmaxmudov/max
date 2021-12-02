import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

interface Props {
  to?: string
}

const LocaleSwitcher: React.FC<Props> = ({ children, to }) => {
  const { locale, asPath } = useRouter()
  const newLocale = locale === 'en' ? 'ru' : 'en'
  return (
    <Link href={to || asPath} locale={newLocale} passHref>
      {children}
    </Link>
  )
}

export default LocaleSwitcher

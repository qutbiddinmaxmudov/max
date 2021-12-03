import React from 'react'
import Head from 'next/head'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'

interface Props {
  title?: string
  description?: string
  cardSize?: 'summary' | 'summary_large_image'
  imageUrl?: string
}

const Seo = ({ title = 'title', description = 'description', cardSize = 'summary_large_image', imageUrl }: Props) => {
  const intl = useIntl()
  const titleContent = intl.formatMessage({ id: title })
  const descriptionContent = intl.formatMessage({ id: description })
  const { locale } = useRouter()
  const localeName = locale === 'en' ? 'en_us' : 'ru_ru'
  return (
    <Head>
      <title>{titleContent}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta key="twt-card" name="twitter:card" content={cardSize} data-rh="true" />
      <meta key="twt-site" name="twitter:site" content="@Max_Mudov" data-rh="true" />
      <meta key="twt-title" property="twitter:title" content={titleContent} data-rh="true" />
      <meta key="twt-description" property="twitter:description" content={descriptionContent} data-rh="true" />
      <meta
        key="twt-image"
        property="twitter:image"
        content={imageUrl || `http://www.m4x.site/share-image-${locale}.png`}
        data-rh="true"
      />
      <meta
        key="og-image"
        property="og:image"
        content={imageUrl || `http://www.m4x.site/share-image-${locale}.png`}
        data-rh="true"
      />
      <meta key="og-url" property="og:url" content="http://www.m4x.site/" data-rh="true" />
      <meta key="og-type" property="og:type" content="website" data-rh="true" />
      <meta key="og-title" property="og:title" content={titleContent} data-rh="true" />
      <meta key="og-description" property="og:description" content={descriptionContent} data-rh="true" />
      <meta key="og-locale" property="og:locale" content={localeName} data-rh="true" />
      <meta key="og-site_name" property="og:site_name" content="Max." data-rh="true" />
    </Head>
  )
}

export default Seo

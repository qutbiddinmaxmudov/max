import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

type Props = {
  collapsed: boolean
}

const links = [
  'mailto:qutbiddinmaxmudov@mail.ru',
  'https://www.facebook.com/qutbiddin.maxmudov',
  'https://www.linkedin.com/in/qutbiddin-makhmudov/',
  'https://www.instagram.com/max__mudov/',
  'https://github.com/qutbiddinmaxmudov',
]

const NavbarMenu = ({ collapsed }: Props) => {
  const { locale, asPath } = useRouter()
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: (theme) => theme.palette.background.default,
        transform: `translateY(${collapsed ? '-100%' : '0%'})`,
        zIndex: 15,
        transition: 'transform 1s',
        overflow: 'auto',
      }}
    >
      <Link href="/" passHref>
        <Typography component="a" variant="h1" marginBottom={'50px'}>
          <FormattedMessage id="navbar.about" />
        </Typography>
      </Link>
      <Link href="/" passHref>
        <Typography component="a" variant="h1" marginBottom={'50px'}>
          <FormattedMessage id="navbar.portfolio" />
        </Typography>
      </Link>
      <Link href="/" passHref>
        <Typography component="a" variant="h1" marginBottom={'60px'}>
          <FormattedMessage id="navbar.contacts" />
        </Typography>
      </Link>
      <Box>
        <Link href={asPath} locale={'en'} passHref>
          <Typography
            component="a"
            sx={{
              fontWeight: 'bold',
              fontSize: '36px',
              color: (theme) => (locale !== 'ru' ? theme.palette.text.primary : theme.palette.text.secondary),
              textDecoration: 'none',
              marginX: '40px',
              pointerEvents: locale !== 'ru' ? 'none' : 'all',
            }}
          >
            Eng
          </Typography>
        </Link>
        <Link href={asPath} locale={'ru'} passHref>
          <Typography
            component="a"
            sx={{
              fontWeight: 'bold',
              fontSize: '36px',
              color: (theme) => (locale === 'ru' ? theme.palette.text.primary : theme.palette.text.secondary),
              textDecoration: 'none',
              marginX: '40px',
              pointerEvents: locale === 'ru' ? 'none' : 'all',
            }}
          >
            Rus
          </Typography>
        </Link>
      </Box>
      <Typography lineHeight={'16px'} fontSize={13} fontWeight={500} position={'absolute'} left={80} bottom={30}>
        <FormattedMessage id="navbar.copyright" />
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          bottom: 60,
          right: 80,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {links.map((url, index) => (
          <Typography
            key={url}
            sx={{
              color: (theme) => theme.palette.text.primary,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: 1.67,
            }}
            variant="h5"
            href={url}
            component="a"
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <FormattedMessage id={`navbar.links.${index}`} />
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default NavbarMenu

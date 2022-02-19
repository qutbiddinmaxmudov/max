import { Box } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import logoDark from '../images/logo.svg'
import text from '../images/logo-text.svg'
import ThemeChanger from '../layout/ThemeChanger'
import NavbarButton from './NavbarButton'
import NavbarMenu from './NavbarMenu'

interface Props {
  logo: boolean
  click: () => void
}

const Header = ({ logo }: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const handleNavbarOpen = () => setCollapsed((prevState) => !prevState)

  return (
    <>
      <Box position={'fixed'} top={80} left={80} display={'flex'} alignItems={'flex-end'}>
        <Box
          sx={{
            width: 104,
            height: 36,
          }}
        >
          <Image src={text} priority />
        </Box>
        <Box
          sx={{
            lineHeight: 0,
            height: 14,
            width: 14,
            ml: '7px',
          }}
        >
          <Image width={'100%'} height={'100%'} src={logoDark} priority />
        </Box>
      </Box>
      <Box position={'fixed'} top={80} right={80} display={'flex'} alignItems={'center'} zIndex={20}>
        <ThemeChanger />
        <NavbarButton opened={collapsed} onClick={handleNavbarOpen} />
      </Box>
      <NavbarMenu collapsed={collapsed} />
    </>
  )
}

export default Header

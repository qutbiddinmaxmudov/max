import { Box } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import logoDark from '../images/logo.svg'
import text from '../images/logo-text.svg'
import ThemeChanger from '../layout/ThemeChanger'
import NavbarButton from './NavbarButton'
import NavbarMenu from './NavbarMenu'
import Dot from './common/Dot'

interface Props {
  logo: boolean
  click: () => void
}

const Header = ({ logo }: Props) => {
  const [collapsed, setCollapsed] = useState(true)
  const handleNavbarOpen = () => setCollapsed((prevState) => !prevState)

  return (
    <>
      <Box position={'fixed'} top={80} left={80} display={'flex'} alignItems={'flex-end'} zIndex={2}>
        <Box
          sx={{
            width: logo ? 0 : 104,
            height: 36,
            transition: '1s',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <Image src={text} priority />
          <Dot size={14} sx={{ ml: '5px' }} />
        </Box>
        <Box
          sx={{
            lineHeight: 0,
            height: logo ? 60 : 14,
            width: logo ? 60 : 14,
            transition: '1s',
            ml: logo ? 0 : '7px',
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

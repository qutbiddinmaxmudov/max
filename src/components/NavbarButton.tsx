import { Box, SxProps } from '@mui/material'
import React from 'react'

type Props = {
  opened: boolean
  onClick: () => void
}

const stylesOpened: { [k: string]: SxProps } = {
  first: {
    top: 13,
    width: 42,
    left: 0,
    transform: 'rotate(0deg)',
  },
  second: {
    bottom: 13,
    width: 34,
    left: 0,
    transform: 'rotate(0deg)',
  },
}

const stylesClosed: { [k: string]: SxProps } = {
  first: {
    top: 21 - 2.5,
    width: 42,
    left: 0,
    transform: 'rotate(45deg)',
  },
  second: {
    bottom: 21 - 2.5,
    width: 42,
    left: 0,
    transform: 'rotate(-45deg)',
  },
}

const NavbarButton = ({ opened, onClick }: Props) => (
  <Box
    component={'button'}
    onClick={onClick}
    sx={{
      position: 'relative',
      width: '42px',
      height: '42px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '21px',
    }}
  >
    <Box
      component={'span'}
      sx={{
        background: (theme) => theme.palette.divider,
        height: 5,
        position: 'absolute',
        transition: '0.5s',
        ...(opened ? stylesOpened : stylesClosed).first,
      }}
    />
    <Box
      component={'span'}
      sx={{
        background: (theme) => theme.palette.divider,
        height: 5,
        position: 'absolute',
        transition: '0.5s',
        ...(opened ? stylesOpened : stylesClosed).second,
      }}
    />
  </Box>
)

export default NavbarButton

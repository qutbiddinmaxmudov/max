import { styled, SxProps } from '@mui/material'
import { keyframes } from '@emotion/react'
import { Box } from '@mui/system'
import React from 'react'

type Props = {
  sx?: SxProps
  clickFunc?: () => void
}

const move = keyframes({
  '25%': {
    opacity: 1,
  },
  '33%': {
    opacity: 1,
    transform: 'translateY(30px)',
  },
  '67%': {
    opacity: 1,
    transform: 'translateY(40px)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(55px) scale3d(0.5, 0.5, 0.5)',
  },
})

const Chevron = styled(Box)({
  position: 'absolute',
  width: 28,
  height: 8,
  opacity: 0,
  transform: 'scale3d(0.5, 0.5, 0.5)',
  animation: `${move} 3s ease-out infinite`,
  '&:first-of-type': {
    animation: `${move} 3s ease-out 1s infinite`,
  },
  '&:nth-of-type(2)': {
    animation: `${move} 3s ease-out 2s infinite`,
  },

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '51%',
    background: '#fff',
  },
  '&::before': {
    left: 0,
    transform: 'skew(0deg, 30deg)',
  },
  '&::after': {
    right: 0,
    width: '50%',
    transform: 'skew(0deg, -30deg)',
  },
})

const ScrollArrow = ({ sx, clickFunc }: Props) => (
  <Box
    onClick={clickFunc}
    sx={{
      width: 24,
      height: 24,
      cursor: 'pointer',
      ...sx,
    }}
  >
    <Chevron />
    <Chevron />
    <Chevron />
  </Box>
)

export default ScrollArrow

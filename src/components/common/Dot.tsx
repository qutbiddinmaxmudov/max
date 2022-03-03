import { Box } from '@mui/system'
import { SxProps } from '@mui/material'
import React from 'react'

type Props = {
  size?: number
  sx?: SxProps
}

const Dot = ({ size, sx }: Props) => (
  <Box
    component="span"
    sx={{
      display: 'inline-block',
      background: (theme) => theme.palette.primary.main,
      width: size || 25,
      height: size || 25,
      ...sx,
    }}
  />
)

export default Dot

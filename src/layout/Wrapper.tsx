import { Box } from '@mui/system'
import { SxProps } from '@mui/material'
import React from 'react'

type Props = {
  sx?: SxProps
}

const Wrapper: React.FC<Props> = ({ children, sx }) => (
  <Box
    sx={{
      height: '100vh',
      padding: '80px',
      position: 'relative',
      ...sx,
    }}
  >
    {children}
  </Box>
)

export default Wrapper

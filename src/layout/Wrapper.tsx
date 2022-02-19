import { Box } from '@mui/system'
import React from 'react'

const Wrapper: React.FC = ({ children }) => (
  <Box
    sx={{
      minHeight: '100vh',
      padding: '80px',
      position: 'relative',
    }}
  >
    {children}
  </Box>
)

export default Wrapper

import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// Create a theme instance.
const generateTheme = (themeType: 'light' | 'dark' = 'dark') =>
  responsiveFontSizes(
    createTheme({
      typography: {
        h1: {
          fontSize: '96px',
          color: '#FFFFFF',
          textDecoration: 'none',
          fontWeight: 'bold',
        },
        fontFamily: ['Montserrat, sans-serif'].join(','),
      },
      palette: {
        text: {
          primary: '#FFFFFF',
          secondary: '#CCCCCC'
        },
        background: {
          default: themeType === 'dark' ? '#2C2C2C' : '#FFFFFF',
        },
        divider: '#E8E8E8',
      },
    })
  )

export default generateTheme

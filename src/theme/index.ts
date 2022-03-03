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
        mode: themeType,
        text: {
          primary: '#FFFFFF',
          secondary: '#CCCCCC',
        },
        info: {
          main: '#676767',
        },
        primary: {
          main: '#164DF2',
        },
        background: {
          default: themeType === 'dark' ? '#2C2C2C' : '#FFFFFF',
        },
        divider: '#E8E8E8',
      },
    })
  )

export default generateTheme

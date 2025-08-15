import { extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemeSelector: 'data',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff5252'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#0cdd36ff'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#ec0a0aff'
    },
    secondary: {
      main: '#0fca44ff'
    }
  }
  // ...other properties
})

export default theme
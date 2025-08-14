import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light', // default light
    primary: {
      main: '#43e212ff'
    },
    secondary: {
      main: '#e30fa0ff'
    },
    error: {
      main: red.A400
    },
    text: {
      primary: 'rgba(197, 62, 25, 1)'
    }
  }
})

export default theme
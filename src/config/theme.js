// src/config/theme.js
import { extendTheme } from '@mui/material/styles'

import '@fontsource/pt-sans' // Mặc định 400
import '@fontsource/pt-sans/700.css' // Nếu cần bold

const theme = extendTheme({
  moderna: {
    headerHeight: '80px'
  },
  colorSchemeSelector: 'data',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#C4B69C' // màu vàng nâu chủ đạo của website
        },
        secondary: {
          main: '#000000' // màu đen
        },
        background: {
          default: '#ffffff',
          paper: '#f9f9f9'
        },
        text: {
          primary: '#000000',
          secondary: '#555555'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#BDA177'
        },
        background: {
          default: '#1a1a1a',
          paper: '#242424'
        },
        text: {
          primary: '#ffffff',
          secondary: '#bbbbbb'
        }
      }
    }
  },
  typography: {
    // eslint-disable-next-line quotes
    fontFamily: "'PT Sans', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2.25rem'
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '8px 20px'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1440px !important'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main
            }
          }
        })
      }
    }
    // MuiLink: {
    //   styleOverrides: {
    //     root: ({ theme }) => ({
    //       transition: 'color 0.2s ease, border-bottom 0.2s ease',
    //       '&:hover': {
    //         color: theme.palette.primary.main,
    //         textDecoration: 'none'
    //       }
    //     })
    //   }
    // }
  }
})

export default theme

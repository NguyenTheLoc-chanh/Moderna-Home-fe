import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import theme from './config/theme.js'
import { Provider } from 'react-redux'
import { store } from './store/slices/index.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)

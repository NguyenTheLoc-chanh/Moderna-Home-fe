import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function MainLayout({ children }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container sx={{ flex: 1 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

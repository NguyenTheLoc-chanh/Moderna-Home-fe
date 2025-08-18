import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import Grid from '@mui/material/Grid'
import { ExploreCategories, HeroSection } from './components'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Nội dung chính */}
      <Container>
        <Grid container spacing={4} alignItems={'center'}>
          <HeroSection />
          <ExploreCategories />
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  )
}

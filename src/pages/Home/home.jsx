import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import Grid from '@mui/material/Grid'
import { Benefits, ExploreCategories, HeroSection, SpecialProduct, SubscribeSection } from './components'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Nội dung chính */}
      <Container>
        <Grid size={{ xs: 12 }}>
          <HeroSection />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <ExploreCategories />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SpecialProduct />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Benefits />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SubscribeSection />
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  )
}

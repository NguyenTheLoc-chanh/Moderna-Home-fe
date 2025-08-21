import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Benefits, ExploreCategories, HeroSection, SpecialProduct, SubscribeSection } from './components'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Nội dung chính */}
      <Container disableGutters>
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
    </Box>
  )
}

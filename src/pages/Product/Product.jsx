import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { ProductGrid, ProductHeader, ProductTabs } from './components'
import useProduct from '~/hooks/useProduct'
import Loading from '~/components/utils/Loading/Loading'

export default function Product() {
  const { loading, error } = useProduct()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Nội dung chính */}
      <Container disableGutters>
        <Grid size={{ xs: 12 }}>
          <ProductHeader />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Loading open={loading} />
          {!error && <ProductTabs />}
        </Grid>
      </Container>
    </Box>
  )
}
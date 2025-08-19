import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { ProductGrid, ProductHeader, ProductTabs } from './components'

const mockProducts = [
  { id:1, name: 'B013 Bathroom full 2023', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969333/uohhlfx83omhs4smwjkq.jpg', options: 5, rating: 3.7, price: 674 },
  { id:2, name: 'B023 Bathroom 2023', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg', options: 1, rating: 4.1, price: 886 },
  { id:3, name: 'B001 Bathroom Luxury 2022', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969333/uohhlfx83omhs4smwjkq.jpg', options: 12, rating: 3.3, price: 999 },
  { id:4, name: 'K056 Kitchen Option', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg', options: 4, rating: 3.9, price: 568 },
  { id:5, name: 'W013 Workspace Decoration Full', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969333/uohhlfx83omhs4smwjkq.jpg', options: 8, rating: 3.7, price: 346 },
  { id:6, name: 'L091 Livingroom Full 2020', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg', options: 23, rating: 4.2, price: 234 },
  { id:1, name: 'B013 Bathroom full 2023 Mới', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969333/uohhlfx83omhs4smwjkq.jpg', options: 5, rating: 3.7, price: 674 },
  { id:2, name: 'B023 Bathroom 2023', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg', options: 1, rating: 4.1, price: 886 },
  { id:3, name: 'B001 Bathroom Luxury 2022', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969333/uohhlfx83omhs4smwjkq.jpg', options: 12, rating: 3.3, price: 999 },
  { id:4, name: 'K056 Kitchen Option', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg', options: 4, rating: 3.9, price: 568 },
  { id:5, name: 'W013 Workspace Decoration Full', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969333/uohhlfx83omhs4smwjkq.jpg', options: 8, rating: 3.7, price: 346 },
  { id:6, name: 'L091 Livingroom Full 2020', image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg', options: 23, rating: 4.2, price: 234 }
]

export default function Product() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Nội dung chính */}
      <Container disableGutters>
        <Grid>
          <ProductHeader />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <ProductTabs />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <ProductGrid products={mockProducts} />
        </Grid>
      </Container>
    </Box>
  )
}
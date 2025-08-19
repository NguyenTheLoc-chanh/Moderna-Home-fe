import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import BreadcrumbNav from '~/components/ui/Breadcrumb/Breadcrumb'
import { ProductActions, ProductInfo } from './components/ProductDetails'

const ProductDetails = () => {
  // fake data (sau này fetch từ API qua productService)
  const product = {
    id: 'B013',
    name: 'Bathroom full 2023',
    description:
      'Bathroom interiors seamlessly marry form and function, integrating chic vanities, efficient storage, and stylish fixtures...',
    price: 674,
    images: [
      'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg',
      'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg',
      'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg',
      'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg'
    ]
  }
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/products' },
    { label: 'Ghế gỗ', href: '/products/chairs' }
  ]

  const [mainImage, setMainImage] = useState(product.images[0])

  return (
    <Container sx={{ py: 4 }} disableGutters>
      {/* Breadcrumb */}
      <BreadcrumbNav
        items={breadcrumbItems}
      />
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Gallery bên trái */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={mainImage}
            alt="Product main"
            sx={{
              width: '100%',
              objectFit:'cover',
              height: { xs: '300px', sm: '430px', lg: '552px' },
              borderTopRightRadius: '57px',
              boxShadow: 2
            }}
          />
        </Grid>

        {/* Thông tin bên phải */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            {product.images.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`thumbnail-${index}`}
                onClick={() => setMainImage(img)}
                sx={{
                  width: 180,
                  height: { xs: 80, sm: 120, lg: 130 },
                  objectFit: 'cover',
                  borderTopRightRadius: '32px',
                  cursor: 'pointer',
                  border: mainImage === img ? '2px solid #C4B69C' : '1px solid #ddd'
                }}
              />
            ))}
          </Box>

          <ProductInfo product={product} />
          <Box mt={3}>
            <ProductActions product={product} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetails

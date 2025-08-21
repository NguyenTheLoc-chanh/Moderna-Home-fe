// Explore by Category
import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SearchBar from '~/components/ui/SearchBar/SearchBar'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import img1 from '~/assets/images/img1.png'
import img2 from '~/assets/images/img2.png'
import img3 from '~/assets/images/img3.png'
import img4 from '~/assets/images/img4.png'
import img5 from '~/assets/images/img5.png'
import img6 from '~/assets/images/img6.png'
import MobileCategory from '~/components/ui/MobileCategory/MobileCategory'
import { useCategory } from '~/hooks/useCategory'

const itemData = [
  {
    title: 'Bedroom',
    img: img1,
    href: '/categories/bedroom'
  },
  {
    title: 'Living Room',
    img: img2,
    href: '/categories/livingroom'
  },
  {
    title: 'Dining Room',
    img: img3,
    href: '/categories/diningroom'
  },
  {
    title: 'Office',
    img: img4,
    href: '/categories/office'
  },
  {
    title: 'Outdoor',
    img: img5,
    href: '/categories/outdoor'
  },
  {
    title: 'Outdoor',
    img: img6,
    href: '/categories/outdoor'
  }
]

function ExploreCategories() {
  const { categories, loading, error, loadCategories } = useCategory()

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  return (
    <Box m={{ xs: '32px 0', sm: '32px 50px', lg: '64px 100px' }}>
      <Typography variant="h1" fontWeight="bold" mb={4} textAlign="center">
        Explore by Category
      </Typography>
      {loading && <Typography align="center">Loading categories...</Typography>}
      {error && <Typography align="center" color="error">{error}</Typography>}

      {!loading && categories.length > 0 && (
        <Grid container spacing={{ xs: 1, md: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box display={{ xs: 'none', md: 'block' }} flexDirection={{ md: 'column' }}>
              <SearchBar open={true} height={70} width={'100%'} />
              <Stack spacing={1} mt={5} gap={1}
                sx={{
                  '& a': {
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }
                }}
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.id}`}
                    color="inherit"
                    underline="none"
                  >
                    {cat.name}
                  </Link>
                ))}
              </Stack>
            </Box>
            <Box display={{ xs: 'block', md: 'none' }}>
              <MobileCategory />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ width: '100%' }}>
              <ImageList sx={{ width: '100%', height: 'auto', margin: 0 }} cols={2} gap={22}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

export default ExploreCategories
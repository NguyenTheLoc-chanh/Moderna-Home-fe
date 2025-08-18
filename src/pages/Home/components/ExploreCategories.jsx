// Explore by Category
import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SearchBar from '~/components/ui/SearchBar/index'
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
  return (
    <Box>
      <Typography variant="h1" fontWeight="bold" mb={4}>
        Explore by Category
      </Typography>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Box>
          <SearchBar open={true} />
          <Stack spacing={1} mt={2}
            sx={{
              '& a': {
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'primary.main'
                }
              }
            }}
          >
            <Link href="#" color="inherit" underline="none">Bedroom</Link>
            <Link href="#" color="inherit" underline="none">Dinning Room</Link>
            <Link href="#" color="inherit" underline="none">Bathroom</Link>
            <Link href="#" color="inherit" underline="none">Livingroom</Link>
            <Link href="#" color="inherit" underline="none">Kitchen</Link>
            <Link href="#" color="inherit" underline="none">Workspace</Link>
            <Link href="#" color="inherit" underline="none">Meeting Room</Link>
          </Stack>
        </Box>
        <Box>
          <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  )
}

export default ExploreCategories
// Special Product
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import WestIcon from '@mui/icons-material/West'
import EastIcon from '@mui/icons-material/East'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import img1 from '~/assets/images/img1.png'

function SpecialProduct() {
  const [expanded, setExpanded] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const textRef = useRef(null)
  const description = 'A wooden dining set comprises a table and chairs crafted from wood, adding a warm touch to living or working spaces. With diverse designs ranging from modern to classic, these sets combine the natural beauty and durability of wood, enhancing both aesthetics and functionality. With diverse designs ranging from modern to classic, these sets combine the natural beauty and durability of wood, enhancing both aesthetics and functionality'

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseFloat(
        window.getComputedStyle(textRef.current).lineHeight
      )
      const maxHeight = lineHeight * 4 // 4 dòng
      if (textRef.current.scrollHeight > maxHeight) {
        setIsOverflow(true)
      }
    }
  }, [description])
  return (
    <Box m={{ xs: '32px 0', sm: '32px 50px', lg: '64px 100px' }}>
      <Typography variant="h1" fontWeight="bold" mb={4} textAlign="center">
        Special Product
      </Typography>
      <Grid container spacing={{ xs: 1, md: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ boxShadow: 'none' }}>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Special product"
              sx={{ borderRadius: 2 }}
            />
            <CardContent
              sx={{
                px: 0,
                display: 'flex',
                justifyContent: 'space-between'
              }}>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                  Special Wood Full
                </Typography>
                {/* Rating */}
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="body2">3.7</Typography>
                  <Rating value={4} precision={0.5} readOnly size="small" />
                </Box>
                {/* Price */}
                <Typography variant="h6" fontWeight="bold" mt={1}>
                  $123.23
                </Typography>
              </Box>
              {/* Button */}
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon sx={{ color: 'background.default' }} />}
                sx={{
                  color: 'background.default',
                  mt: 2,
                  width: '156px',
                  height: '48px',
                  borderRadius: 1,
                  textTransform: 'none',
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: '#a39278' }
                }}
              >
                Add to cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Description
          </Typography>
          <Typography
            ref={textRef}
            variant="body2"
            color="text.secondary"
            mb={2}
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: expanded ? 'unset' : 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
            {description}
          </Typography>
          {isOverflow && (
            <Typography
              variant="body2"
              color="primary"
              sx={{
                cursor: 'pointer',
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? 'See less' : 'See more'}
              {expanded ? (
                <KeyboardArrowUpIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
            </Typography>
          )}
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Other product
            </Typography>
            {/* Arrows */}
            <Box display="flex" justifyContent="center" gap={1}>
              <IconButton
                sx={{
                  backgroundColor: '#FDF7E4',
                  '&:hover': {
                    backgroundColor: 'primary.main'
                  },
                  '&:active': {
                    backgroundColor: 'primary.main' // giữ màu hover khi click
                  }
                }}>
                <WestIcon fontSize='small' />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: '#FDF7E4',
                  '&:hover': {
                    backgroundColor: 'primary.main'
                  },
                  '&:active': {
                    backgroundColor: 'primary.main' // giữ màu hover khi click
                  }
                }}
              >
                <EastIcon fontSize='small' />
              </IconButton>
            </Box>
          </Box>
          <Grid container spacing={3.4} alignItems="center">
            {/* Product 1 */}
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Card sx={{ borderRadius: 2, boxShadow: 'none', height: '100%' }}>
                <Link to="/product/1" style={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={img1}
                    alt="Kitchen Full"
                  />
                </Link>
                <CardContent sx={{ p: '16px 0' }}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    N01 Kitchen Full
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">4.9</Typography>
                    <Rating value={5} readOnly size="small" />
                  </Box>
                  <Typography variant="body2" fontWeight="bold">
                    $345.13
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Product 2 */}
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Card sx={{ borderRadius: 2, boxShadow: 'none', height: '100%' }}>
                <Link to="/product/1" style={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                    alt="Workspace Full"
                  />
                </Link>
                <CardContent sx={{ p: '16px 0' }}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    A12 Workspace Full
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2">4.0</Typography>
                    <Rating value={4} readOnly size="small" />
                  </Box>
                  <Typography variant="body2" fontWeight="bold">
                    $1453.34
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SpecialProduct
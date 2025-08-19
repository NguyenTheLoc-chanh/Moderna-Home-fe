//  # Banner đầu trang (ảnh ghế + text)
import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import bannerImg from '~/assets/images/Rectangle.png'
import Button from '@mui/material/Button'

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '220px', md: '600px' },
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: { xs: '100%', md: 'cover' },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '0 0 20px 20px',
        display: 'block',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
      <Container>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            top: '160px',
            left: '30px',
            p: 3
          }}
        >
          {/* Vệt sáng sau chữ */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '-70px', md: '30px' },
              left: { xs: '90px', md: '180px' },
              transform: 'translate(-50%, -50%)',
              width: { xs: '200px', md: '300px' },
              height: { xs: '200px', md: '300px' },
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
              zIndex: 1
            }}
          />
          {/* Text content */}
          <Box
            sx={{
              position: 'absolute',
              top: '-34px',
              left: '128px',
              zIndex: 2,
              display: { xs: 'none', md: 'block' }
            }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom display={{ xs: 'none', md: 'flex' }}>
              TN Interior <br /> Design Process
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom display={{ xs: 'none', md: 'flex' }}>
              good choose, good life
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: '#f8f2e8',
                color: '#000',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#e6ddce'
                }
              }}
            >
              Shop now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
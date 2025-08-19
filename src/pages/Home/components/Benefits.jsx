import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import img1 from '~/assets/images/img1.png'
import img2 from '~/assets/images/img2.png'
import betterChair from '~/assets/images/better__ghe.png'
import PaymentIcon from '@mui/icons-material/Payment'
import ReplayIcon from '@mui/icons-material/Replay'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'

const benefits = [
  {
    icon: <PaymentIcon sx={{ fontSize: 40, color: 'black' }} />,
    title: 'Payment Method',
    description: 'Flexible payment option, to make easier'
  },
  {
    icon: <ReplayIcon sx={{ fontSize: 40, color: 'black' }} />,
    title: 'Return Policy',
    description: 'You can return a product within 14 days'
  },
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 40, color: 'black' }} />,
    title: 'Customer Support',
    description: 'Our customer support is 24/7'
  }
]
function Benefits() {
  return (
    <Box>
      <Box
        sx={{
          m: { xs: '32px 0', sm: '32px 50px', lg: '86px 64px 70px 0' },
          bgcolor: '#808080',
          borderTopRightRadius: '80px',
          p: '30px 0',
          pl: { sm: '20px', lg: '100px' },
          pr: { sm: '20px' }
        }}>
        <Grid container spacing={{ xs: 1, md: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={4} alignItems="center" height={'100%'}>
              <Grid size={{ xs: 12, sm: 6, md: 6 }} height={'100%'} display={{ xs: 'none', sm: 'block' }}>
                <RouterLink to="/product/1" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <Box
                    component={'img'}
                    src= {img1}
                    alt='Hình ảnh 1'
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </RouterLink>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }} height={'100%'}>
                <RouterLink to="/product/2" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <Box
                    component={'img'}
                    src= {img2}
                    alt='Hình ảnh 2'
                    sx={{
                      width: { xs: '90%', sm: '100%' },
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </RouterLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  mb={1}
                  color='background.default'
                  fontSize={{ xs: '24px', sm: '24px', md: '36px' }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                Get better for your home
                </Typography>
                <RouterLink to="/product/1" style={{ textDecoration: 'none' }}>
                  <Typography variant="body1"
                    textAlign={{ xs: 'center', md: 'left' }}
                    sx={{
                      textDecoration: 'underline', // thêm gạch dưới
                      fontWeight: 'bold',
                      mb: 4,
                      color: 'background.default'
                    }}>
                    Get it now?
                  </Typography>
                </RouterLink>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <Box
                  component={RouterLink}
                  to="/product/3"
                  sx={{
                    width: '100%',
                    height: '300px',
                    display: 'block',
                    position: 'relative',
                    textDecoration: 'none',
                    '&:hover img': {
                      transform: 'scale(1.05)', // hiệu ứng hover zoom ảnh
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}>
                  <Box
                    position={'absolute'}
                    component={'img'}
                    src= {betterChair}
                    alt='Hình ảnh ghế'
                    sx={{
                      top: { md: '18px', lg: '-164px' },
                      right: { xs: '56px', sm: '20px' },
                      width: { xs: '281px', sm: '100%' },
                      height: 'auto',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mb={{ xs: '32px', md: '109px' }} mt={{ xs: '160px', sm: '130px' }}>
        <Typography variant="h1" fontWeight="bold" mb={4} textAlign="center">
        Benefit for you
        </Typography>
        <Grid container spacing={{ xs: 4, md: 20 }} justifyContent="center">
          {benefits.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <Box>
                <Paper
                  elevation={0}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 3,
                    bgcolor: '#E6DDCE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  {React.cloneElement(item.icon, { sx: { fontSize: 40, color: 'background.default' } })}
                </Paper>
                <Typography variant="subtitle1" fontWeight="bold" align='center'>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  align='center'
                  sx={{ mt: 1, maxWidth: 220, mx: 'auto', color: 'text.secondary' }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Benefits
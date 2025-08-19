// Subscribe for new product
import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Subnew from '~/assets/images/Subnewproduct.png'

function SubscribeSection() {
  return (
    <Box>
      <Grid container spacing={{ xs: 1, md: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Link to="/product/1" style={{ textDecoration: 'none' }}>
            <Box
              component={'img'}
              src= {Subnew}
              alt='Hình ảnh 1'
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: { xs: '12px', md: '0 64px 0 0' }
              }}
            />
          </Link>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              p: { xs: '24px 0', md: 6 },
              borderRadius: { xs: '12px', md: '0 12px 12px 0' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: '1.5rem', // ~ h5
                  md: '2rem', // ~ h1
                  lg: '2.25rem'
                }
              }}
              gutterBottom>
              Subscribe for new product
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Receive hot deal and many offers
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <TextField
                placeholder="Enter your email*"
                variant="outlined"
                fullWidth
                size="small"
              />
              <TextField
                placeholder="Enter your phone number*"
                variant="outlined"
                fullWidth
                size="small"
              />
              <TextField
                placeholder="Enter your address"
                variant="outlined"
                fullWidth
                size="small"
              />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  color: 'background.default',
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: '#b0a084'
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SubscribeSection
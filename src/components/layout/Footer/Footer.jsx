import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
function Footer() {
  return (
    <Box component={'footer'}
      sx={{
        backgroundColor: 'primary.main',
        color: 'text.primary',
        py: 3,
        mt: 5
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* About Us */}
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">Visit Our Store</Link>
              <Link href="#" color="inherit" underline="hover">About Us</Link>
              <Link href="#" color="inherit" underline="hover">Our Blog</Link>
              <Link href="#" color="inherit" underline="hover">Craftmanship</Link>
              <Link href="#" color="inherit" underline="hover">Apply For a Job</Link>
            </Stack>
          </Grid>
          {/* Shopping */}
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Shopping
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">Online Payment</Link>
              <Link href="#" color="inherit" underline="hover">Gift Cards</Link>
              <Link href="#" color="inherit" underline="hover">Return Policy</Link>
              <Link href="#" color="inherit" underline="hover">Furniture Assembling</Link>
              <Link href="#" color="inherit" underline="hover">Shipping Methods</Link>
            </Stack>
          </Grid>
          {/* Latest News */}
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Latest News
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">The Essentials Design Tip</Link>
              <Link href="#" color="inherit" underline="hover">Function WTW Shelves</Link>
              <Link href="#" color="inherit" underline="hover">9 Unique Ways to Display on TV</Link>
              <Link href="#" color="inherit" underline="hover">Minimal Design</Link>
              <Link href="#" color="inherit" underline="hover">Make a Huge Impact</Link>
            </Stack>
          </Grid>
          {/* Subscribe */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Subscribe
            </Typography>
            <Typography variant="body2" mb={2}>
              Signup for our newsletter to get the latest new collections and product launches.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit"><TwitterIcon /></IconButton>
              <IconButton color="inherit"><GoogleIcon /></IconButton>
              <IconButton color="inherit"><FacebookOutlinedIcon /></IconButton>
              <IconButton color="inherit"><InstagramIcon /></IconButton>
            </Stack>
          </Grid>
        </Grid>
        {/* Copyright */}
        <Box mt={5} textAlign="center">
          <Typography variant="body2">
            © Copyright 2025 - NTL Interior Design
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
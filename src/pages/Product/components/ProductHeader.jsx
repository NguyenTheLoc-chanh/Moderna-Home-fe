// # Tiêu đề: "World of Interior"
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function ProductHeader() {
  return (
    <Box textAlign="center" mb={3} mt={4}>
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{
          fontSize: { xs: '30px', sm: '50px', md: '64px' }
        }}
      >
        World of Interior
      </Typography>
      <Typography
        variant="h2"
        color="primary.main"
        sx={{
          fontSize: { xs: '18px', sm: '30px', md: '36px' }
        }}
      >
        Design make you smile
      </Typography>
    </Box>
  )
}

export default ProductHeader
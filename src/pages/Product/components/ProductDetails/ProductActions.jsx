import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const ProductActions = () => {
  return (
    <Stack spacing={2}>
      <Button
        variant="contained"
        sx={{ bgcolor: 'primary.main', color: 'background.default', '&:hover': { bgcolor: '#9e8360' } }}
      >
        ORDER NOW
      </Button>
      <Button variant="outlined">Add to cart</Button>
    </Stack>
  )
}

export default ProductActions

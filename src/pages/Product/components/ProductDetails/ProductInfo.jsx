import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const ProductInfo = ({ product }) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {product.id} {product.name}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
        {product.description}
      </Typography>
      <Box sx={{
        mt: 2,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
        <Link to={'/voucher/1'} style={{ marginLeft: '18px', color: '#C4B69C' }}>
          Get voucher 20%?
        </Link>
      </Box>
    </Box>
  )
}

export default ProductInfo

// # Card hiển thị 1 sản phẩm
import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px dashed #ccc' }}>
      <Link to={product.id} style={{ textDecoration: 'none', color:'inherit' }}>
        <CardMedia
          component="img"
          height="270"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="subtitle2" fontWeight="bold">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.options} options
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">{product.rating}</Typography>
            <Rating value={product.rating} precision={0.1} readOnly size="small" />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
            <Typography variant="body2" fontWeight="bold">
            ${product.price}
            </Typography>
            <Box gap={1}>
              <IconButton size="small">
                <AddShoppingCartIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Link>
    </Card>
  )
}

export default ProductCard
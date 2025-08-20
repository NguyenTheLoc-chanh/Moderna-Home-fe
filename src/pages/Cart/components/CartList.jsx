import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const CartList = () => {
  const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <Box>
      {/* Header */}
      <Box
        display="flex"
        justifyContent={'space-between'}
        alignItems="center"
        px={2}
        py={1}
      >
        <Typography variant="body1" fontWeight="bold" ml={{ xs: 7, sm: 12, md: 16 }}>
          Name & Option
        </Typography>
        <Box display={'flex'} gap={{ xs: 2, sm: 12 }}>
          <Typography variant="body1" fontWeight="bold">
            Price
          </Typography>
          <Typography variant="body1" fontWeight="bold" mr={2}>
            Remove
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 2 }}/>

      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </Box>
  )
}

export default CartList

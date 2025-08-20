import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '~/store/slices/cartSlice'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} borderBottom="1px solid #eee" pb={2}>
      <Box display="flex" gap={2}>
        <Box
          sx={{
            width: { xs: 80, sm: 120, lg: 120 },
            height: { xs: 80, sm: 120, lg: 120 },
            flexShrink: 0, // giữ nguyên kích thước, không bị co lại
            boxShadow: 2
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt="Product main"
            sx={{
              width: '100%',
              objectFit:'cover',
              height: '100%'
            }}
          />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontSize={{ xs: '14px', sm: '16px' }}>{item.name}</Typography>
          <Typography variant="caption" fontSize={{ xs: '14px', sm: '16px' }} >REF: {item.id}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <IconButton
              size="small"
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))
              }
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <TextField
              size="small"
              type="number"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
              inputProps={{
                min: 1,
                style: { textAlign: 'center' } // căn giữa số
              }}
              sx={{ width: 30, mx: 1 }}
            />
            {/* Nút cộng */}
            <IconButton
              size="small"
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
              }
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'} justifyContent="space-around" gap={{ xs: 2, sm: 10 }}>
        <Typography variant="body1" fontSize={{ xs: '14px', sm: '16px' }}>${item.price}</Typography>
        <IconButton onClick={() => dispatch(removeFromCart(item.id))} sx={{ mr: 4 }}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default CartItem

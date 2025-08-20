import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import '../../../assets/styles/base.css'


const CartTotal = () => {
  const total = useSelector(state => state.cart.total)

  return (
    <Box display="flex" justifyContent="space-between" mt={3}>
      <Link to={'/'}
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color:'inherit'
        }}
        className='link-hover'
      >
        <KeyboardBackspaceIcon fontSize='small' sx={{ mr: 1 }}/>
        <Typography variant="body1">Back to home</Typography>
      </Link>
      <Typography variant="body1">Total: ${total}</Typography>
    </Box>
  )
}

export default CartTotal

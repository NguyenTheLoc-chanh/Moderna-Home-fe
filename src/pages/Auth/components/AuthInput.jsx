import React from 'react'
import TextField from '@mui/material/TextField'

const AuthInput = ({ label, type = 'text', ...props }) => {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      variant="outlined"
      margin="normal"
      {...props}
    />
  )
}

export default AuthInput
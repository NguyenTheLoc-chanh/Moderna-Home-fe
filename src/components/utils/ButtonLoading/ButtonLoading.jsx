// src/components/ButtonLoading.js
import React from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

/**
 * Button có spinner hiển thị khi loading
 * @param {boolean} loading - true để show spinner
 * @param {React.ReactNode} children - nội dung button
 * @param {object} props - tất cả props khác của MUI Button
 */
const ButtonLoading = ({ loading = false, children, ...props }) => {
  return (
    <Button
      sx={{ color: 'white', backgroundColor: '#A8997B', '&:hover': { backgroundColor: '#8C7A5B' } }}
      {...props}
      disabled={loading || props.disabled}
    >
      {loading && (
        <CircularProgress
          color="inherit"
          size={20}
          sx={{ mr: 1 }} // cách 1 chút với text
        />
      )}
      {children}
    </Button>
  )
}

export default ButtonLoading

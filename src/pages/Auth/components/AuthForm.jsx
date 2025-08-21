import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonLoading from '~/components/utils/ButtonLoading/ButtonLoading'

const AuthForm = ({ children, buttonText, onSubmit, loading = false }) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 400,
        mx: 'auto'
      }}
    >
      {children}
      <ButtonLoading
        type="submit"
        variant="contained"
        fullWidth
        loading={loading}
      >
        {buttonText}
      </ButtonLoading>
    </Box>
  )
}

export default AuthForm

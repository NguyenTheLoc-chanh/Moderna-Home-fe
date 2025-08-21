import React from 'react'
import AuthBanner from './components/AuthBanner'
import AuthForm from './components/AuthForm'
import AuthInput from './components/AuthInput'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault()
  }

  return (
    <Box>
      <AuthBanner />
      <Typography variant="body1" fontWeight={'bold'} align="center" mt={2} mb={2}>
        SIGN UP
      </Typography>
      <AuthForm buttonText="SIGN UP" onSubmit={handleRegister}>
        <AuthInput label="Full Name" />
        <AuthInput label="Email" type="email" />
        <AuthInput label="Phone Number" />
        <AuthInput label="Password" type="password" />
        <Box textAlign="center">
          <Link href="/login">Already have an account? Login</Link>
        </Box>
      </AuthForm>
    </Box>
  )
}

export default Register

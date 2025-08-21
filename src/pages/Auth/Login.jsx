import React, { useState } from 'react'
import AuthBanner from './components/AuthBanner'
import AuthForm from './components/AuthForm'
import AuthInput from './components/AuthInput'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '~/store/slices/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })


  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrors({ email: '', password: '' })
    try {
      const credentials = { email, password }
      // Dùng unwrap() để ném lỗi nếu có
      await dispatch(loginUser(credentials)).unwrap()
      navigate('/')
    } catch (err) {
      // Backend trả "Invalid email" hoặc "Invalid password"
      const msg = err.message.toLowerCase()
      if (msg.includes('email')) {
        setErrors({ email: err.message, password: '' })
      } else if (msg.includes('password')) {
        setErrors({ email: '', password: err.message })
      } else {
        setErrors({ email: '', password: err.message })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <AuthBanner />
      <Typography variant="body1" align="center" fontWeight={'bold'} mb={2} mt={2}>
        LOGIN
      </Typography>
      <AuthForm buttonText={'SIGN IN'} onSubmit={handleLogin} loading={loading} >
        <AuthInput
          label="Username"
          value= {email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <AuthInput
          label="Password"
          value= {password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
          <Link href="#">Forgot Password?</Link>
          <Link href="/register">New Customer? Sign up</Link>
        </Box>
      </AuthForm>
    </Box>
  )
}

export default Login

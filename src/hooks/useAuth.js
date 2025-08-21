// src/hooks/useAuth.js
import { useState, useEffect } from 'react'
import AuthService from '../services/authService'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch thông tin user nếu có token
  useEffect(() => {
    const token = sessionStorage.getItem('token')

    const fetchUser = async () => {
      try {
        const data = await AuthService.getLoggedInUserInfo()
        setUser({ ...data, role: data.role || data.userRole }) // đảm bảo có role
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      fetchUser()
    } else {
      setLoading(false)
    }
  }, [])

  // Login
  const login = async (credentials) => {
    try {
      const data = await AuthService.loginUser(credentials)
      sessionStorage.setItem('token', data.token)
      setUser({ ...data.user, role: data.userRole }) // đảm bảo có role
      return data.user
    } catch (err) {
      // Ném lỗi ra frontend để hiển thị
      throw new Error(err.message || 'Login failed')
    }
  }

  // Register
  const register = async (registration) => {
    try {
      const data = await AuthService.registerUser(registration)
      sessionStorage.setItem('token', data.token)
      setUser({ ...data.user, role: data.userRole })
      return data.user
    } catch (err) {
      throw new Error(err.message || 'Registration failed')
    }
  }

  // Logout
  const logout = () => {
    sessionStorage.removeItem('token')
    setUser(null)
  }

  return { user, loading, login, register, logout }
}

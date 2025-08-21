// src/hooks/useAxiosInterceptor.js
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../config/axios'

export default function useAxiosInterceptor() {
  const navigate = useNavigate()

  useEffect(() => {
    // Request interceptor: gắn token từ sessionStorage
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        const token = sessionStorage.getItem('token')
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    // Response interceptor: xử lý lỗi 401
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          sessionStorage.removeItem('token')
          navigate('/login', { replace: true })
        }
        return Promise.reject(error)
      }
    )

    // Cleanup khi unmount
    return () => {
      api.interceptors.request.eject(requestInterceptor)
      api.interceptors.response.eject(responseInterceptor)
    }
  }, [navigate])

  return api
}

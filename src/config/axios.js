// src/config/axios.js
import axios from 'axios'

// Lấy baseURL từ biến môi trường (.env)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api

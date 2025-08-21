// src/services/authService.js
import api from '../config/axios'

class AuthService {
  static async registerUser(registration) {
    try {
      const response = await api.post('/auth/register', registration)
      return response.data
    } catch (err) {
      if (err.response?.data?.message) {
        throw new Error(err.response.data.message)
      }
      throw new Error('Registration failed')
    }
  }

  /**
   * Đăng nhập người dùng
   * @param {import('../types/auth').LoginRequest} loginDetails - Email & mật khẩu
   * @returns {Promise<import('../types/auth').LoginResponse>}
   * @throws {Error} Nếu API trả về lỗi
   */
  static async loginUser(loginDetails) {
    try {
      const response = await api.post('/auth/login', loginDetails)
      return response.data
    } catch (err) {
      if (err.response?.data?.message) {
        throw new Error(err.response.data.message)
      }
      throw new Error('Login failed')
    }
  }

  static async getLoggedInUserInfo() {
    try {
      const response = await api.get('/user/my-info')
      return response.data
    } catch (err) {
      // Có thể logout hoặc trả null nếu token invalid
      throw new Error(err)
    }
  }
}

export default AuthService

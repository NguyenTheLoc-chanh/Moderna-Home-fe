import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/authService'

// Lấy token từ sessionStorage nếu có
const token = sessionStorage.getItem('token')

// Thunk: đăng ký
export const registerUser = createAsyncThunk(
  'auth/register',
  async (registration, { rejectWithValue }) => {
    try {
      const data = await AuthService.registerUser(registration)
      sessionStorage.setItem('token', data.token)
      return { user: { ...data.user, role: data.userRole }, token: data.token }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// Thunk: login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await AuthService.loginUser(credentials)
      sessionStorage.setItem('token', data.token)
      return { user: { ...data.user, role: data.userRole }, token: data.token }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

// Thunk: lấy thông tin user hiện tại
export const fetchUserInfo = createAsyncThunk(
  'auth/fetchUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const data = await AuthService.getLoggedInUserInfo()
      return data
    } catch (err) {
      sessionStorage.removeItem('token')
      return rejectWithValue(err.message || 'Failed to fetch user info')
    }
  }
)

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: token || null,
    loading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      sessionStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // FETCH USER INFO
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.user = null
        state.token = null
        sessionStorage.removeItem('token')
      })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer

// src/routes/index.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import privateRoutes from './privateRoutes'
import publicRoutes from './publicRoutes'

// Giả sử có hàm kiểm tra đăng nhập
const isAuthenticated = () => {
  return !!localStorage.getItem('token') // ví dụ check token
}

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      {/* Private Routes */}
      {privateRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={isAuthenticated() ? route.element : <Navigate to="/login" />}
        />
      ))}

      {/* Fallback 404 */}
      <Route path="*" element={<h2>404 - Not Found</h2>} />
    </Routes>
  )
}

export default AppRouter

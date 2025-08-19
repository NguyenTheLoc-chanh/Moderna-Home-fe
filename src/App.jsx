import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout/MainLayout'
import Home from './pages/Home'
import Product, { ProductDetails } from './pages/Product'


function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/1" element={<ProductDetails />} />
      </Routes>
    </MainLayout>
  )
}

export default App

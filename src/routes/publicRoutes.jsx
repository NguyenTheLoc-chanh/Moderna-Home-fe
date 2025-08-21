import MainLayout from '~/components/layout/MainLayout/MainLayout'
import { Login, Register } from '~/pages/Auth'
import Home from '~/pages/Home'
import Product, { ProductDetails } from '~/pages/Product'

const publicRoutes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  },
  {
    path: '/product',
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    )
  },
  {
    path: '/product/:id',
    element: (
      <MainLayout>
        <ProductDetails />
      </MainLayout>
    )
  },
  {
    path: '/login',
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    )
  },
  {
    path: '/register',
    element: (
      <MainLayout>
        <Register />
      </MainLayout>
    )
  }
]

export default publicRoutes
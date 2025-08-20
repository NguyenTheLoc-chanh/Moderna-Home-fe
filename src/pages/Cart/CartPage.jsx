import React from 'react'
import Grid from '@mui/material/Grid'
import CartList from './components/CartList'
import CartSummary from './components/CartSummary'
import CartTotal from './components/CartTotal'
import BreadcrumbNav from '~/components/ui/Breadcrumb/Breadcrumb'

const CartPage = () => {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/products' },
    { label: 'Ghế gỗ', href: '/products/chairs' }
  ]
  return (
    <Grid container spacing={3} disableGutters>
      <Grid size={{ xs: 12 }} mt={5}>
        <BreadcrumbNav
          items={breadcrumbItems}
        />
      </Grid>
      {/* Cột trái: danh sách sản phẩm */}
      <Grid size={{ xs: 12, lg: 8 }}>
        <CartList />
        <CartTotal />
      </Grid>
      {/* Cột phải: Form + Stepper */}
      <Grid size={{ xs: 12, lg: 4 }}>
        <CartSummary />
      </Grid>
    </Grid>
  )
}

export default CartPage

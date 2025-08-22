//  # Lưới sản phẩm (Grid layout)
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import ProductCard from './ProductCard'
import Typography from '@mui/material/Typography'

function ProductGrid({ products }) {
  const itemsPerPage = 6 // số sản phẩm mỗi trang
  const [page, setPage] = useState(1)

  const pageCount = Math.ceil(products.length / itemsPerPage) || 1
  // Lấy dữ liệu theo trang
  const handleChange = (event, value) => {
    setPage(value)
  }
  const startIndex = (page - 1) * itemsPerPage
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage)

  return (
    <>
      {products.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Danh mục chưa có sản phẩm nào
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {currentItems.map((p, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
      )}
      {/* Pagination */}
      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </>
  )
}

export default ProductGrid
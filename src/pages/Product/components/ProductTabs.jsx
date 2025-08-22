// # Tabs: All, Bathroom, Bedroom, Kitchen...
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Chip from '@mui/material/Chip'
import InputBase from '@mui/material/InputBase'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import IconButton from '@mui/material/IconButton'
import { useCategory } from '~/hooks/useCategory'
import useProduct from '~/hooks/useProduct'
import Typography from '@mui/material/Typography'
import { ProductGrid } from '.'
import Loading from '~/components/utils/Loading/Loading'


function ProductTabs() {
  const [value, setValue] = React.useState(0)
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState([])

  const { categories, loading: loadingCat, error: errorCat, loadCategories } = useCategory()
  const { products, fetchProductsByCategory, loading: loadingProd } = useProduct()

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    if (newValue === 0) {
      fetchProductsByCategory(0) // All
    } else {
      const selectedCategory = categories[newValue - 1] // vì All chiếm index 0
      if (selectedCategory) {
        fetchProductsByCategory(selectedCategory.id)
      }
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() !== '') {
      setFilters((prev) => [...prev, query.trim()])
      setQuery('') // clear input
    }
  }
  const handleDelete = (chipToDelete) => {
    setFilters((prev) => prev.filter((chip) => chip !== chipToDelete))
  }

  return (
    <>
      <Box sx={{
        mb: 2,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="secondary tabs example"
          sx={{
            width: '100%',
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main', // màu gạch chân
              height: 2 // độ dày gạch chân
            },
            mb: { xs: 2, sm: 2 }
          }}
        >
          {loadingCat && <Loading open={loadingCat} />}
          {errorCat && <Tab label="Error" disabled />}
          {!loadingCat && !errorCat && (
            <Tab
              key="all"
              value={0}
              label="All"
              sx={{
                minWidth: 'auto',
                px: 2,
                fontSize: '18px',
                textTransform: 'none',
                fontWeight: value === 0 ? 'bold' : 'normal',
                color: value === 0 ? 'text.primary' : 'text.secondary'
              }}
            />
          )}
          {!loadingCat && !errorCat && categories.map((cat, index) => (
            <Tab
              key={cat.id || index}
              value={index + 1}
              label={cat.name}
              sx={{
                minWidth: 'auto',
                px: 2,
                fontSize: '18px',
                textTransform: 'none',
                fontWeight: value === index + 1 ? 'bold' : 'normal',
                color: value === index + 1 ? 'text.primary' : 'text.secondary'
              }}
            />
          ))}
        </Tabs>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid', // lấy màu từ theme
            borderColor: 'primary.main',
            borderRadius: '50px',
            backgroundColor: 'background.default',
            height: 36,
            px: 2,
            py: 0.5,
            minWidth: { xs: '100%', sm: 200, md: 250 },
            fontFamily: 'typography.fontFamily'
          }}
        >
          <InputBase
            placeholder="Add Filter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              flex: 1,
              fontSize: 'typography.body1.fontSize',
              color: 'primary.main'
            }}
          />
          <IconButton size="small" sx={{ color: 'primary.main' }}>
            <FilterAltIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      {/* Render chips */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        mb={3}
        sx={{
          overflowX: 'auto', // Cho phép cuộn ngang
          whiteSpace: 'nowrap', // Không xuống dòng
          '&::-webkit-scrollbar': { display: 'none' } // Ẩn scrollbar trên mobile
        }}
      >
        {filters.map((f, index) => (
          <Chip
            key={index}
            label={f}
            onDelete={() => handleDelete(f)}
            sx={{
              backgroundColor: '#C4B69C', // nền
              color: '#fff', // chữ
              flexShrink: 0,
              '& .MuiChip-deleteIcon': {
                color: '#fff', // icon xóa
                '&:hover': { color: '#f5f5f5' }
              }
            }}
          />
        ))}
      </Box>
      {/* Render sản phẩm */}
      <Box>
        {loadingProd ? (
          <Loading open={loadingProd} />
        ) : (
          <ProductGrid products={products} />
        )}
      </Box>
    </>
  )
}

export default ProductTabs
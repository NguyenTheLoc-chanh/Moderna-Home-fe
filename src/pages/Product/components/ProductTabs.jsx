// # Tabs: All, Bathroom, Bedroom, Kitchen...
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Chip from '@mui/material/Chip'
import InputBase from '@mui/material/InputBase'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import IconButton from '@mui/material/IconButton'

const categories = [
  'All',
  'Bathroom',
  'Bedroom',
  'Livingroom',
  'Workspace',
  'Dinning room',
  'Meeting room',
  'Kitchen'
]

function ProductTabs() {
  const [value, setValue] = React.useState(0)
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
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
          {categories.map((cat, index) => (
            <Tab
              key={index}
              value={index}
              label={cat}
              sx={{
                minWidth: 'auto',
                px: 2,
                fontSize: '18px',
                textTransform: 'none',
                fontWeight: value === index ? 'bold' : 'normal',
                color: value === index ? 'text.primary' : 'text.secondary'
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
    </>
  )
}

export default ProductTabs
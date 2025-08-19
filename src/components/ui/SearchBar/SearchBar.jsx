import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Collapse from '@mui/material/Collapse'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'

export default function SearchBar({ open, onClose }) {
  const [query, setQuery] = useState('')
  const theme = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Collapse in={open} orientation="horizontal" timeout={300} unmountOnExit>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${theme.palette.primary.main}`, // lấy màu từ theme
          borderRadius: '50px',
          backgroundColor: theme.palette.background.default,
          height: 36,
          px: 2,
          py: 0.5,
          minWidth: 250,
          fontFamily: theme.typography.fontFamily
        }}
      >
        <SearchIcon
          sx={{
            color: theme.palette.primary.main,
            mr: 1
          }}
        />
        <InputBase
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            flex: 1,
            fontSize: theme.typography.body1.fontSize,
            color: theme.palette.primary.main
          }}
        />
        <IconButton size="small" onClick={onClose} sx={{ color: theme.palette.primary.main }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Collapse>
  )
}

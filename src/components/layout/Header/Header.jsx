import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import logo from '~/assets/images/logoTN_01.png'
import Profile from './profile'
import SearchBar from '~/components/ui/SearchBar/SearchBar'
import Container from '@mui/material/Container'
import Badge from '@mui/material/Badge'
import Link from '@mui/material/Link'
import { useSelector } from 'react-redux'

const navItems = ['Home', 'Product', 'About Us', 'Contact']

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)

  // Lấy user từ Redux store (authSlice)
  const { user } = useSelector((state) => state.auth)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <Container>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'space-between', md: 'space-around' },
        mt: { xs: 1, md: 0 }
      }}>
        {/* Menu mobile icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {navItems.map((item) => (
              <MenuItem key={item} onClick={handleCloseNavMenu}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: { xs: 40, sm: 60 }, // mobile nhỏ nhất 32px, tăng dần
              height: { xs: 40, sm: 60 },
              objectFit: 'contain',
              ml: { xs: 5 }
            }}
          />
        </Box>
        {/* Menu */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            gap: 6,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {navItems.map((item, index) => (
            <Button
              key={index}
              color="secondary"
              sx={(theme) => ({
                fontWeight: item === 'Home' ? 'bold' : 'normal',
                textTransform: 'none',
                color: theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                },
                fontSize: '20px'
              })}
            >
              {item}
            </Button>
          ))}
        </Box>
        {/* Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {!searchOpen && (
            <Tooltip title="Search" arrow>
              <SearchIcon
                sx={{ cursor: 'pointer', display: { xs: 'none', md: 'flex' } }}
                onClick={() => setSearchOpen(true)}
              />
            </Tooltip>
          )}
          <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
          <Tooltip title="Cart" arrow>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon sx={{ cursor: 'pointer' }} />
            </Badge>
          </Tooltip>
          {user ? (
            <Profile />
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link href="/login" underline="none" sx={{ fontWeight: 500, cursor: 'pointer' }}>
                Đăng nhập
              </Link>
              <span>/</span>
              <Link href="/register" underline="none" sx={{ fontWeight: 500, cursor: 'pointer' }}>
                Đăng ký
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  )
}

export default Header

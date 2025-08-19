// src/components/BreadcrumbNav.jsx
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function BreadcrumbNav({ items }) {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 2 }}
    >
      {items.map((item, index) =>
        index < items.length - 1 ? (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={item.href}
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={index} color="text.primary">
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  )
}

export default BreadcrumbNav

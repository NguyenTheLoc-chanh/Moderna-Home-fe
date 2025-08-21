// src/components/Loading.js
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'

/**
 * Loading component hiển thị spinner toàn màn hình
 * @param {boolean} open - true để show loading
 */
const Loading = ({ open = false }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loading

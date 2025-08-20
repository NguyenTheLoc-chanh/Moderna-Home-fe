import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const StepPersonalInfo = () => {
  return (
    <Box>
      <TextField fullWidth label="Your name" margin="normal" sx={{ mt: 4, mb: 1 }} />
      <TextField fullWidth label="Your phone number" margin="normal" sx={{ mb: 1 }} />
      <TextField fullWidth label="Your email" margin="normal" sx={{ mb: 4 }} />
    </Box>
  )
}

export default StepPersonalInfo

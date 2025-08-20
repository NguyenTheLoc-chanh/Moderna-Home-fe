import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const StepDelivery = () => {
  return (
    <Box>
      <TextField fullWidth label="Address" margin="normal" sx={{ mt: 4, mb: 1 }} />
      <TextField fullWidth label="City" margin="normal" sx={{ mb: 1 }} />
      <TextField fullWidth label="Zip code" margin="normal" sx={{ mb: 4 }} />
    </Box>
  )
}

export default StepDelivery

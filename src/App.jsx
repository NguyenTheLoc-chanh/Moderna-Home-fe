import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} color='text.primary'>
          Material UI Vite.js example
        </Typography>
        <Button variant='contained' color='secondary'>
          Contained
        </Button>
      </Box>
    </Container>
  )
}

export default App

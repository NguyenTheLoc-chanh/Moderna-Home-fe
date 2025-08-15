import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ui/ModeSelect'


function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <ModeSelect />
      </Box>
    </Container>
  )
}

export default App

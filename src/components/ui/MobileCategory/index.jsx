import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function MobileCategory() {
  return (
    <Accordion sx={{ boxShadow: 'none' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontWeight="bold">All Category</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          spacing={2}
          sx={{
            '& a': {
              transition: 'color 0.2s ease',
              '&:hover': {
                color: 'primary.main'
              }
            }
          }}
        >
          <Link href="#" color="inherit" underline="none">Bedroom</Link>
          <Link href="#" color="inherit" underline="none">Dinning Room</Link>
          <Link href="#" color="inherit" underline="none">Bathroom</Link>
          <Link href="#" color="inherit" underline="none">Livingroom</Link>
          <Link href="#" color="inherit" underline="none">Kitchen</Link>
          <Link href="#" color="inherit" underline="none">Workspace</Link>
          <Link href="#" color="inherit" underline="none">Meeting Room</Link>
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}

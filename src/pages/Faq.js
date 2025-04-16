import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Faq() {
  return (
    <>
      <Box  id='faq' sx={{mt: 12,textAlign: 'center', bgcolor: '#F5F7FA', py: 3}}>
        <Typography sx={{fontSize: '45px', fontWeight: 'bold', textAlign: 'center',  '@media (max-width: 600px)': { fontSize: '25px' }}}>Pellentesque suscipit <br />fringilla liberu eu.</Typography>
        <Button variant='contained' sx={{bgcolor: '#4CAF4F',mb: 2, px:4 }}>Get More</Button>
      </Box>
    </>
  )
}

export default Faq

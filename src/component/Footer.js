import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import '../style/Header.css'

function Footer() {
  return (
    <>
      <Box className='footer' sx={{bgcolor: "#263238", py:5, px:4}}>
        <Grid container>
            <Grid  item xl={12} sm={4} lg={5}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                   <Typography sx={{fontSize: '35px', fontWeight: 'bold', color:'white'}} gutterBottom>Nextcent</Typography>
                   <Typography sx={{color: 'white'}}>Copyright &copy; 2024 landify UI kit</Typography>
                   <Typography sx={{color: 'white',textAlign: 'start'}}>All Right Reserved</Typography> 
                   <Box className='footer' sx={{color: 'white',mt:5, fontSize: '25px'}}>
                      <span><FaFacebook /></span>
                      <span><FaInstagram /></span>
                      <span><FaTwitter /></span>
                      <span><FaYoutube /></span>
                   </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
                <Box sx={{'@media (max-width: 600px)': {my:2}}}>
                   <Typography sx={{fontSize: '20px', fontWeight: 'bold', color:'white'}}>Company</Typography>
                   <Box>
                      <ul className='footer' style={{listStyle: 'none', color: 'white'}}>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Feature</li>
                        <li>Product</li>
                        <li>FAQ</li>
                      </ul>
                   </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={2} lg={2}>
                <Box sx={{'@media (max-width: 600px)': {my:2}}}>
                   <Typography sx={{fontSize: '20px', fontWeight: 'bold', color:'white'}}>Support</Typography>
                   <Box>
                      <ul className='footer' style={{listStyle: 'none', color: 'white'}}>
                        <li>Help center</li>
                        <li>Term of services</li>
                        <li>Legal</li>
                        <li>Privacy policyt</li>
                        <li>Status</li>
                      </ul>
                   </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Box>
                   <Typography sx={{fontSize: '20px', fontWeight: 'bold', color:'white'}}>Stay up to date</Typography>
                   <Box sx={{mt:2}}>
                     <input type="text" placeholder='Your email address' height='30px' />
                   </Box>
                </Box>
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Footer

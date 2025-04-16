import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import '.././style/Home.css'
import home1 from '../Assets/home1.png'
import { FaFacebook, FaReact,FaCss3, FaHtml5, FaBootstrap, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMaterialformkdocs } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SiMui } from "react-icons/si";

function Home() {
  return (
    <>
      <Box id='home' sx={{display: 'flex', alignItems:'center',pl:10 , '@media (max-width: 600px)':{pl:5,pt:10}}}>
          <Grid container>
              <Grid item lg={8}>
                <Box>
                  <Typography  sx={{fontSize: '46px',fontWeight: 'bold','@media (max-width: 600px)': {fontSize: '33px'}}}>Lessons and insights <br /> <span style={{color: '#4CAF4F'}}>from 8 years</span> </Typography>
                  <Typography variant='p' sx={{color:'#4D4D4D'}}>Where to grow your business as a photographer: site or social media</Typography>
                  <Typography>
                    <Button variant='contained' sx={{bgcolor: '#4CAF4F', mt:3}}>Register</Button>
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={4}>
                  <img src={home1} style={{width:'300px', height: '283px'}} alt="" />
              </Grid>
          </Grid>
      </Box>

      {/* //Our Clients */}
      <Box>
          <Box sx={{textAlign: 'center', my:7}}>
             <Typography variant='h4' sx={{ fontWeight: 'bold'}}>Our Clients</Typography>
             <Typography sx={{color: '#4D4D4D'}}>We have been working with some Fortune 500+ clients.</Typography>
          </Box>
          <Box sx={{my:2}}>
            <ul className='client-item'>
              <li><FaFacebook /></li>
              <li><FaReact /></li>
              <li><RiTailwindCssFill /></li>
              <li><SiMaterialformkdocs /></li>
              <li><DiJavascript /></li>
              <li><FaCss3 /></li>
              <li><FaHtml5 /></li>
              <li><FaBootstrap /></li>
              <li><SiMui /></li>
              <li><FaGithub /></li>
            </ul>
          </Box>
      </Box>
    </>
  )
}

export default Home

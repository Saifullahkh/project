import { Box, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import '../style/Testimonial.css'
import {  FaReact, FaBootstrap, FaGithub, FaFacebook } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import Testimonial1 from '../Assets/testimonial.avif'


function Testimonial() {
  return (
    <>
     <Box id='testimonial' sx={{py:4, px: 8,bgcolor: '#F5F7FA ',  '@media (max-width: 600px)': {px: 3}}}>
        <Grid container>
            <Grid item lg={4}>
                <img src={Testimonial1} width='300px' height='300px' alt="" />
            </Grid>
            <Grid item lg={8}>
                <Box>
                    <Typography gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque omnis unde dignissimos earum cupiditate accusamus laborum deleniti esse sit necessitatibus sunt dolorem est libero quos quia exercitationem nam maiores saepe, repudiandae natus recusandae ipsam possimus eveniet. Rem facere libero mollitia quos, et voluptatum cupiditate provident saepe, eligendi ab sit.
                    </Typography>
                    <Typography sx={{fontSize: '20px',fontWeight: 'bold',color: '#4CAF4F'}} gutterBottom>
                      Tim Smith
                    </Typography>
                    <Typography gutterBottom>British Dragon Boat Racing Association</Typography>
                    <Box className='testimonial' sx={{mt:3, display: 'flex', flexWrap: 'wrap'}}>
                        <span><FaReact /></span>
                        <span><RiTailwindCssFill /></span>
                        <span><SiMui /></span>
                        <span><FaBootstrap /></span>
                        <span><FaGithub /></span>
                        <span><FaFacebook /></span>
                        <Button className='btntest' >Meet all Customer </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
     </Box> 
    </>
  )
}

export default Testimonial

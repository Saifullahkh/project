import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, CardContent,Button } from '@mui/material'
import { MdGroups } from "react-icons/md"
import { LuBuilding2 } from "react-icons/lu";
import { TbChessQueen } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import feature1 from '../Assets/feature1.jpg'

function Products() {
  return (
    <>
        <Box id='product' sx={{py:5, px: 10, bgcolor: '#F5F7FA ','@media (max-width: 600px)': {px:3}}}>
            <Grid container>
                <Grid item lg={6}>
                    <Typography  sx={{fontWeight: 'bold',fontSize: '40px', '@media (max-width: 600px)': {fontSize: '25px'}}}>Helping a local <br /> <span style={{color: '#4CAF4F'}}>business reinvent itself</span> </Typography>
                    <Typography>We reached here with our hard work an dedication</Typography>
                </Grid>
                <Grid item lg={6}>
                    <Box sx={{display: 'flex', flexWrap: 'wrap',rowGap: 4}}>
                        <Box sx={{display: 'flex', mx: 7, '@media (max-width: 600px)': {mx:1}}}>
                            <Typography sx={{fontSize: '35px', color: '#4CAF4F', mr: 2}}>
                                <MdGroups />
                            </Typography>
                            <Typography sx={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontWeight: 'bold', fontSize: '22px'}}>2,245,341</span>
                                <span>Members</span>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex',mx:7 , '@media (max-width: 600px)': {mx:1}}}>
                            <Typography sx={{fontSize: '35px', color: '#4CAF4F', mr: 2}}>
                                <LuBuilding2 />
                            </Typography>
                            <Typography sx={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontWeight: 'bold', fontSize: '22px'}}>46,328</span>
                                <span>Clubs</span>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex',mx:7, '@media (max-width: 600px)': {mx:1}}}>
                            <Typography sx={{fontSize: '35px', color: '#4CAF4F', mr: 2}}>
                                <TbChessQueen />
                            </Typography>
                            <Typography sx={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontWeight: 'bold', fontSize: '22px'}}>828,867</span>
                                <span>Events Booking</span>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex',mx:7, '@media (max-width: 600px)': {mx:1}}}>
                            <Typography sx={{fontSize: '35px', color: '#4CAF4F', mr: 2}}>
                                <MdPayment />
                            </Typography>
                            <Typography sx={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontWeight: 'bold', fontSize: '22px'}}>1,926,436</span>
                                <span>Payments</span>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>  

        <Box sx={{my:2, p:8, '@media (max-width: 600px)': {p:2}}}>
            <Card sx={{boxShadow: 'none'}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', '@media(max-width: 600px)':{flexDirection: 'column'} }}>
                    <CardContent >
                    <Typography component="div" gutterBottom sx={{fontWeight: 'bold',fontSize:'35px',pt:5, '@media (max-width: 600px)': {fontSize: '22px'}}}>
                        How to design your site footer <br /> like we did
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga in, eum non at iste vero perspiciatis labore nesciunt aliquam harum magnam, obcaecati optio voluptatem accusantium eligendi mollitia animi eius. Voluptatum?
                    </Typography>
                    <Button variant='contained' sx={{bgcolor: '#4CAF4F',mt:3}}>Learn More</Button>
                    </CardContent>
                    <CardMedia
                        component="img"
                        src={feature1}
                        alt="Live from space album cover"
                        sx={{width: '450px'}}
                    />
                </Box>
            </Card>
        </Box>
    </>
  )
}

export default Products

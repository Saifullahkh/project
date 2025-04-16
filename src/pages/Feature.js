import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { FeatureList } from '../data/data'
import feature1 from '../Assets/feature1.jpg'

function Feature() {
  return (
    <>
     <Box id='feature'>
        <Box sx={{textAlign: 'center', mt:8}}>
            <Typography  sx={{fontWeight: 'bold',fontSize: '35px', '@media (max-width: 600px)':{fontSize: '25px'}}}>Manage your entire community <br /> in a single system</Typography>
            <Typography sx={{color: '#4D4D4D'}}>Who is Nextcent suitable for?</Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent: 'space-around', flexWrap: 'wrap', my:5, textAlign:'center',rowGap: 4}}>
            {
                FeatureList.map((item) => {
                    return(
                        <>
                            <Card sx={{width: '280px'}}>
                                <CardMedia sx={{fontSize: '28px'}}>{item.icon}</CardMedia>
                                <CardContent>
                                    <Typography  sx={{fontWeight: 'bold', fontSize: '25px', '@media (max-width: 600px)': {fontSize: '20px'}}} gutterBottom>{item.title}</Typography>
                                    <Typography>{item.subtitle}</Typography>
                                </CardContent>
                            </Card>
                        </>
                    )
                })
            }
        </Box>
     </Box> 

     <Box sx={{my:2, p:8, '@media (max-width: 600px)': {p:2}}}>
        <Card sx={{boxShadow: 'none'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', '@media(max-width: 600px)':{flexDirection: 'column'} }}>
                <CardMedia
                    component="img"
                    src={feature1}
                    alt="Live from space album cover"
                    sx={{width: '450px'}}
                />
                <CardContent sx={{px:4, '@media (max-width: 600px)': {px:1}}}>
                <Typography component="div" gutterBottom sx={{fontWeight: 'bold',fontSize:'35px',pt:5, '@media (max-width: 600px)': {fontSize: '22px'}}}>
                    The unseen of spending three <br />years at Pixelgrade
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga in, eum non at iste vero perspiciatis labore nesciunt aliquam harum magnam, obcaecati optio voluptatem accusantium eligendi mollitia animi eius. Voluptatum?
                </Typography>
                <Button variant='contained' sx={{bgcolor: '#4CAF4F',mt:3}}>Learn More</Button>
                </CardContent>
            </Box>
        </Card>
     </Box>
    </>
  )
}

export default Feature

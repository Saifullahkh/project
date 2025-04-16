import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { ServiceList } from '../data/data'
import '../style/Service.css'

function Service() {
  return (
    <>
        <Box id='service'>
            <Box sx={{textAlign: 'center', my:3, '@media (max-width: 600px)': {px: 2}}}>
                <Typography gutterBottom sx={{fontWeight: 'bold', fontSize: '35px', '@media (max-width: 600px)': {fontSize: '25px'}}}>Carying is the new marketing</Typography>
                <Typography>
                    The Nextcnt blog is the best place to read about latest membership insights 
                    trends <br /> and more.See who's joiningg the community, read about how our community 
                    are <br /> increasing their membershipincome and lot's more.
                </Typography>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'space-around',flexWrap : 'wrap', rowGap: 4}}>
              {
                ServiceList.map((item) => {
                  return(
                    <Card className='service' sx={{width: '350px'}}>
                      <Box>
                          <CardMedia  component={'img'} height='250px' src={item.image}/>
                      </Box>
                      <Box className='service1' sx={{bgcolor: '#F5F7FA', width: '250px' , textAlign:'center'}}>
                          <CardContent sx={{  textAlign: 'center' }}>
                            <Typography>{item.title}</Typography>
                            <Typography>
                              <Button sx={{color: 'green'}}>Read More</Button>
                            </Typography>
                          </CardContent>
                      </Box>
                    </Card>
                  )
                })
              }
            </Box>
        </Box> 
    </>
  )
}

export default Service

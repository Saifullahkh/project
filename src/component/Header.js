import React, { useState } from 'react'
import {AppBar, Box, Button, Toolbar, Typography,IconButton, Drawer, Divider, Link} from '@mui/material'
import '.././style/Header.css'
import { LuMenu } from "react-icons/lu";

function Header() {
    const [mobileOpen, setMobileOpen] = useState('')

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle}>
             <Typography sx={{color:'black', flexGrow: 1, fontWeight: 'bold', fontSize: '25px', my:2}}>
                {/* <img src='' alt="" /> */}
                Nexcent
            </Typography>
            <Divider />
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <ul className='mobile-menu'>
                    <li>
                        <Link href="#home">Home</Link>
                    </li>
                    <li>
                        <Link href="#service">Service</Link>
                    </li>
                    <li>
                        <Link href="#feature">Feature</Link>
                    </li>
                    <li>
                        <Link href="#product">Product</Link>
                    </li>
                    <li>
                        <Link href="#testimonial">Testimonial</Link>
                    </li>
                    <li>
                        <Link href="#faq">FAQ</Link>
                    </li>
                    <Button variant='outlined' size='small' sx={{color: 'green'}}>Login</Button>
                    <Button variant='contained' className='btn-mobile' size='small'>Sign up</Button>
                </ul>
                
            </Box>
        </Box>
    )
  return (
    <div>
      <Box >
         <AppBar sx={{bgcolor: '#F5F7FA',boxShadow: 'none'}}>
            <Toolbar>
            <Typography variant='h3' sx={{color:'black', flexGrow: 1, fontWeight: 'bold'}}>
                {/* <img src='' alt="" /> */}
                Nexcent
            </Typography>
            <Box sx={{display:{xs: 'none', md: 'block'}}}>
                <ul className='navigation-menu'>
                <li>
                        <Link href="#home">Home</Link>
                    </li>
                    <li>
                        <Link href="#feature">Feature</Link>
                    </li>
                    <li>
                        <Link href="#product">Product</Link>
                    </li>
                    <li>
                        <Link href="#service">Service</Link>
                    </li>
                    <li>
                        <Link href="#testimonial">Testimonial</Link>
                    </li>
                    <li>
                        <Link href="#faq">FAQ</Link>
                    </li>
                    <Button variant='outlined' size='small' sx={{ml: 20, mr: 1 ,color: 'green'}}>Login</Button>
                    <Button variant='contained' className='btn' size='small'>Sign up</Button>
                </ul>   
            </Box>
            <IconButton
                color='black'
                aria-label='open drawer'
                edge='start'
                sx={{mr: 2, display: {sm: 'none'}}}
                onClick={handleDrawerToggle}
             >
                <LuMenu />
            </IconButton>
            </Toolbar>
           
         </AppBar>
         <Box component={'nav'}>
          <Drawer 
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{display: {xs: 'block', sm: 'none'},textAlign: 'center' , "& .MuiDrawer-paper": {
              boxSizing: 'border-box',
              width: '210px'
            },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </div>
  )
}

export default Header

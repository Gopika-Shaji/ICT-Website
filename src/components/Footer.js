import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div>
      <Box sx={{textAlign:'center', bgcolor:'black', color: 'white', p:2}} >
        <Box sx={{my: 2, 
            "& svg":{ 
                fontSize:"40PX",
                cursor:"pointer",
                mr:2 },
                "& svg:hover":{
                    transform: 'translateX(5px)',
                    transition: 'all 400ms'
                }}} >
            {/* Icons */ }
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <WhatsAppIcon />
        </Box>
        <Typography variant='h6'>
            All Rights Reserved &copy; ICT Academy
        </Typography>
      </Box>
    </div>
  )
}

export default Footer

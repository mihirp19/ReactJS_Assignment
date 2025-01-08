import React from 'react';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';

const Navbar = () => (
    <AppBar position='static'>
            <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                Blog Management
            </Typography>            
    </AppBar>
  )


export default Navbar;

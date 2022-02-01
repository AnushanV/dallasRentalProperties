import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <Typography variant="h4" component="div">
                        Dallas Rental Properties
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    );
};

export default Header;
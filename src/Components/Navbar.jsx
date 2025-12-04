import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <AppBar 
        position="fixed"
        sx={{ top: 0, left: 0, right: 0 }}
        >
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
            GlobalBikes
            </Typography>

            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/networks">Redes</Button>
        </Toolbar>
        </AppBar>
    );
}

export default Navbar;
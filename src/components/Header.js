import React from "react";
import { AppBar, Toolbar, IconButton, Button, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logos/logo.png";

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} />

        {/* Search Input */}
        <Box sx={{ flex: 1, mx: 2, maxWidth: "300px" }}>
          <TextField
            size="small"
            placeholder="Search"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>

        {/* Buttons */}
        <Box>
          <Button color="inherit">Write</Button>
          <Button color="inherit">Sign In</Button>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
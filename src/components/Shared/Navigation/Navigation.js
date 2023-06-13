import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#98B4D4" }} position="static">
        <Toolbar>
          <Typography style={{ color: "white" }}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              Homepage
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;

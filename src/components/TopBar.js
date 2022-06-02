import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



function TopBar() {
    const drawerWidth = 150;
    return (
      <AppBar
        position="sticky"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: {
            sm: `${drawerWidth}px`,
            backgroundColor: "#F5D6C4",
            alignItems: "center",
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontFamily='Roboto'
            fontSize="1.1rem"
            sx={{ color: "black", alignItems: "center" }}
          >
            {" "}
            Welcome to Mind Over Matter, Your Mental Health Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    );
}


export default TopBar
import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



function TopBar() {
    const drawerWidth = 200;
    // const handleDrawerToggle = () => {
    //   setMobileOpen(!mobileOpen);
    // };
    //  const navigate = useNavigate();
    //  const { window } = props;
    //  const [mobileOpen, setMobileOpen] = React.useState(false);
    
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
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "black", alignItems: "center" }}
          >
            {" "}
            Welcome User, random Zen message of the day
          </Typography>
        </Toolbar>
      </AppBar>
    );
}


export default TopBar
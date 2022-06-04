import React, {useState} from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { mainNavBarItems } from "./Consts/NavbarItems";
import { bottomNavBarItems } from "./Consts/NavbarItems";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/Inbox";

function ResponsiveDrawer(props) {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };



  const drawerWidth = 250;
  const navigate = useNavigate();
  const { window } = props;
  const [click, setClick] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar >
        <Typography >
          <Link to="/home">
            <img
              src="https://i.imgur.com/qg770Cq.png"
              width={225}
              height={135}
            />
          </Link>
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {mainNavBarItems.map((item, index) => (
          <ListItem key={item.id} onClick={() => navigate(item.route)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItemButton onClick={handleClick}>
        <ListItemText primary= "Resources" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in ={open} timeout="auto" unmountonExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4}}>
            </ListItemButton>
            <ListItem key ="Professional Help" component={Link}  to="/professional">
            <ListItemButton sx={{ pl: 4}}>
             <ListItemIcon>
               <InboxIcon />
               </ListItemIcon>
               <ListItemText primary="Professional Help"  />
            </ListItemButton>
            </ListItem>
            <ListItem key ="Cute Animals" component={Link}  to="/animal">
            <ListItemButton sx={{ pl: 4}}>
             <ListItemIcon>
               <InboxIcon />
               </ListItemIcon>
               <ListItemText primary="Cute Animals" />
            </ListItemButton>
            </ListItem>
            <ListItem key ="Mediation and Breathing" component={Link}  to="/meditation">
            <ListItemButton sx={{ pl: 4}}>
             <ListItemIcon>
               <InboxIcon />
               </ListItemIcon>
               <ListItemText primary="Meditation" />
            </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        {bottomNavBarItems.map((item, index) => (
          <ListItem key={item.id} onClick={() => navigate(item.route)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }} id="here">
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="nav folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#DEEDD5",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#DEEDD5",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    
    </Box>
  );
}
ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};
export default ResponsiveDrawer;
import SettingsIcon from "@mui/icons-material/Settings";
import CottageIcon from "@mui/icons-material/Cottage";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SupportIcon from "@mui/icons-material/Support";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import GroupsIcon from "@mui/icons-material/Groups";

export const mainNavBarItems = [
  {
    id: 0,
    icon: <CottageIcon />,
    label: "Home",
    route: "home",
  },
  {
    id: 1,
    icon: <MenuBookIcon />,
    label: "Journal",
    route: "journal",
  },
  {
    id: 2,
    icon: <SupportIcon />,
    label: "Resources",
    route: "resources",
  },
  {
    id: 3,
    icon: <FormatListNumberedIcon />,
    label: "TAP",
    route: "TAP",
  },
];

export const bottomNavBarItems = [
  {
    id: 4,
    icon: <GroupsIcon />,
    label: "Our Team",
    route: "our-team",
  },
  {
    id: 5,
    icon: <SettingsIcon />,
    label: "Settings",
    route: "settings",
  },
];

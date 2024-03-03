import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { useTheme } from "@emotion/react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const pages = [
  { link: "Home", icon: HomeIcon },
  { link: "About", icon: InfoIcon },
  { link: "Services", icon: DesignServicesIcon },
  { link: "Designs", icon: BrushIcon },
  { link: "Finished", icon: DoneAllIcon },
  { link: "Contact", icon: ContactPhoneIcon },
];

function Header() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((item, index) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.link}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {theme.palette.mode === "light" ? (
              <Tooltip title="Mode">
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  size="large"
                  sx={{ color: "#fff" }}
                >
                  <DarkMode />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Mode">
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  size="large"
                  sx={{ color: "#fff" }}
                >
                  <LightMode />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

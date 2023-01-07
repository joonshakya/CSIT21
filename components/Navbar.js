import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];
const navItems = [];

function DrawerAppBar(props) {
  const { window: _window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [online, setOnline] = useState(
    typeof window === "undefined" || navigator.onLine
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
    return () => {
      window.removeEventListener("online", () => setOnline(true));
      window.removeEventListener("offline", () => setOnline(false));
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CSIT21
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    _window !== undefined ? () => _window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            background: "linear-gradient(90deg, #3498db, #8e44ad)",
          }}
        >
          <Box
            sx={{
              height: "env(safe-area-inset-top)",
            }}
          ></Box>
          <Toolbar>
            {navItems.length ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
            <Typography
              variant="h6"
              component="div"
              sx={{
                textAlign: "center",
                flexGrow: 1,
                fontSize: "1.8rem",
                display: { sm: "block" },
                fontWeight: "bold",
              }}
            >
              CSIT21 {online ? "" : "- Offline"}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;

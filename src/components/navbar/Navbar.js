import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import './navbar.css';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar
      position="static"
      style={{
        background:
          "linear-gradient(90deg, rgba(20,30,48,0.95) 0%, rgba(36,59,85,0.93) 100%)",
      }}
      id="back-to-top-anchor"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            STEFAN SPETER
          </Typography>
          {/* Show my name at the middle on small device only */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent:"center" }}
          >
            STEFAN SPETER
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu appbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Show links in mobile*/}
              <MenuItem onClick={handleCloseNavMenu} style={{flexDirection:'column'}}>
                <Link className="linkmenumobile" href="#about">ABOUT</Link>
                <Link className="linkmenumobile" href="#skills">SKILLS</Link>
                <Link className="linkmenumobile" href="#portfolio">PORTFOLIO</Link>
                <Link className="linkmenumobile" href="#clients">CLIENTS</Link>
                <Link className="linkmenumobile" href="#contact">CONTACT</Link>
              </MenuItem>
            </Menu>
          </Box>
          {/* Links on desktop */}
          <Box
            style={{ justifyContent: "flex-end" }}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Link className="linkmenu" href="#about">ABOUT</Link>
            <Link className="linkmenu" href="#skills">SKILLS</Link>
            <Link className="linkmenu" href="#portfolio">PORTFOLIO</Link>
            <Link className="linkmenu" href="#clients">CLIENTS</Link>
            <Link className="linkmenu" href="#contact">CONTACT</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

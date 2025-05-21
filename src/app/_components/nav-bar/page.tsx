"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import { useDispatch } from "react-redux";
import { setThemeDirection, toggleThemeMode } from "@/store/themeSlice";
import { useThemeMode } from "@/hooks/useThemeHook";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useWindow } from "@/hooks/useWindow";
function NavBar() {
  const dispatch = useDispatch();
  const [mounted, setMounted] = React.useState(false);
  const { direction, mode } = useThemeMode();
  const [language, setLanguage] = useState(direction === "ltr" ? "En" : "Fa");
  const theme = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // State to track if the page has been scrolled
  // const [isScrolled, setIsScrolled] = useState(false);
  // State for the mobile menu anchor element
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  // Effect hook to add and remove scroll event listener
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if the scroll position is greater than a threshold (e.g., 50 pixels)
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   // Add the scroll event listener when the component mounts
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Empty dependency array ensures this runs only once on mount

  const { isScrolled } = useWindow();

  // Handlers for opening and closing the mobile navigation menu
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Define navigation links
  const navItems = ["Home", "About", "Services", "Contact"];

  if (!mounted) return null;

  const languageChange = (e: SelectChangeEvent<typeof language>) => {
    e.preventDefault();

    switch (e.target.value) {
      case "En":
        setLanguage("En");
        dispatch(setThemeDirection("ltr"));
        break;
      case "Fa":
        dispatch(setThemeDirection("rtl"));
        setLanguage("Fa");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <AppBar
        position="fixed" // Keeps the AppBar fixed at the top
        sx={{
          // Conditional margin from the top of the window
          mt: isScrolled ? "0px" : "10px",
          // Conditional horizontal margin to remove space for rounded corners when scrolled
          mx: isScrolled ? "0px" : "10px",
          // Calculate width to account for horizontal margins
          width: isScrolled ? "100%" : "calc(100% - 20px)",
          // Apply rounded corners conditionally
          borderRadius: isScrolled ? "0px" : "20px",
          // Conditional background color based on scroll state
          backgroundColor: isScrolled
            ? "rgba(25, 118, 210, 0.9)"
            : theme.palette.primary.main,
          // Ensure it's above other content
          zIndex: theme.zIndex.appBar + 1,
        }}
      >
        <Toolbar
          sx={{
            // Conditional padding for the toolbar to make it smaller on scroll
            maxHeight: isScrolled ? "28px" : "64px", // Smaller height when scrolled
            padding: isScrolled ? "0 16px" : "0 24px", // Smaller padding when scrolled
            "@media (min-width:800px)": {
              minHeight: isScrolled ? "48px" : "64px", // Consistent height for larger screens
            },
            // Center content within the toolbar
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo or Site Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" }, // Hide on small screens, show on medium+
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: isScrolled ? "1.2rem" : "1.5rem", // Smaller font when scrolled
              transition: "font-size 0.3s ease-in-out",
            }}
          >
            MyBrand
          </Typography>

          {/* Mobile Menu Icon (Hamburger) */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              disableScrollLock={true}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo/Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" }, // Show on small screens, hide on medium+
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: isScrolled ? "1.2rem" : "1.5rem", // Smaller font when scrolled
              transition: "font-size 0.3s ease-in-out",
            }}
          >
            MyBrand
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", mx: 1 }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Right-aligned buttons (e.g., Login/Signup) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                dispatch(toggleThemeMode());
              }}
              disableElevation
            >
              {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
            <Select
              value={language}
              onChange={languageChange}
              sx={{
                color: "white",
                border: "none",
                "& fieldset": { border: "none" },
              }}
            >
              <MenuItem
                key={"En"}
                value={"En"}
              >
                English
              </MenuItem>
              <MenuItem
                key={"Fa"}
                value={"Fa"}
              >
                Farsi
              </MenuItem>
            </Select>
            <Button
              color="inherit"
              sx={{ mr: 1 }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "8px" }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon fontSize={"large"} />

          <Button
            sx={{ color: "white" }}
            onClick={() => {
              dispatch(toggleThemeMode());
            }}
            disableElevation
          >
            {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
          <Select
            value={language}
            onChange={languageChange}
            sx={{
              color: "white",
              border: "none",
              "& fieldset": { border: "none" },
            }}
          >
            <MenuItem
              key={"En"}
              value={"En"}
            >
              English
            </MenuItem>
            <MenuItem
              key={"Fa"}
              value={"Fa"}
            >
              Farsi
            </MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

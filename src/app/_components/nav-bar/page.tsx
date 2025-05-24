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
// import { useDispatch } from "react-redux";
import { useThemeMode } from "@/hooks/useThemeHook";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useWindow } from "@/hooks/useWindow";
import { styled } from "@mui/material/styles";
function NavBar() {
  // const dispatch = useDispatch();
  const [mounted, setMounted] = React.useState(false);
  const { setDirection, toggleThemeMode, direction, mode } = useThemeMode();
  const [language, setLanguage] = useState(direction === "ltr" ? "En" : "Fa");
  const theme = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // State to track if the page has been scrolled
  // const [isScrolled, setIsScrolled] = useState(false);
  // State for the mobile menu anchor element
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

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
        setDirection("ltr");
        break;
      case "Fa":
        setDirection("rtl");
        setLanguage("Fa");
        break;

      default:
        break;
    }
  };
  type ExtraProps = {
    component: React.ElementType;
    href: string;
  };
  const BrandTypography = styled(Typography)<ExtraProps>(({ theme }) => ({
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".1rem",
    color: "inherit",
    textDecoration: "none",
    fontSize: isScrolled ? "1.2rem" : "1.5rem",
    transition: "font-size 0.3s ease-in-out",
  }));
  const MenuTypographyDesktop = styled(Typography)(({ theme }) => ({
    color:
      theme.palette.mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.primary.main,
    fontWeight: 600,
    letterSpacing: "0.08em",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "block",
    position: "relative",
    cursor: "pointer",
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      height: "2px",
      width: 0,
      background: theme.palette.primary.main,
      borderRadius: "2px",
      transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
      zIndex: 1,
    },
    "&:hover::after": {
      width: "100%",
    },
  }));
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
          borderRadius: isScrolled ? "0px" : "7px",
          // Ensure it's above other content
          background: isScrolled ? "" : "transparent !important",
          zIndex: theme.zIndex.appBar + 1,
          boxShadow: "none !important",
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
          <Box
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              flexGrow: 1,
              [theme.breakpoints.up("md")]: {
                display: "flex",
              },
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <BrandTypography
              variant="h6"
              noWrap
              component="a"
              href="/ss"
              sx={{
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
                [theme.breakpoints.up("md")]: {
                  display: "flex",
                },
              }}
            >
              Dev
            </BrandTypography>
            <Typography
              sx={{
                color: [theme.palette.primary.main],
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              /
            </Typography>
          </Box>

          {/* Mobile Menu Icon (Hamburger) */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              flexGrow: 1,
              [theme.breakpoints.down("md")]: {
                display: "flex",
              },
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <BrandTypography
              variant="h6"
              noWrap
              component="a"
              href="/ss"
            >
              Dev
            </BrandTypography>
            <Typography
              sx={{
                color: [theme.palette.primary.main],
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              /
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              // <Button
              //   key={item}
              //   onClick={handleCloseNavMenu}
              //   sx={{ my: 2, color: "white", display: "block", mx: 1 }}
              // >
              //   {item}
              // </Button>
              // TODO: menu
              <MenuTypographyDesktop key={item}>{item}</MenuTypographyDesktop>
            ))}
          </Box>

          {/* Right-aligned buttons (e.g., Login/Signup) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                toggleThemeMode();
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
              // dispatch(toggleThemeMode());
              toggleThemeMode();
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

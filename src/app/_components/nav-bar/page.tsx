/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useThemeMode } from "@/hooks/useThemeHook";

import { useWindow } from "@/hooks/useWindow";
import { styled } from "@mui/material/styles";
import { MaterialUIDarkModeSwitch } from "@/app/_components/mui/darkmode-switch";
import DrawerMenu from "@/app/_components/nav-bar/_component/drawer-menu";
import LanguageSelector from "@/app/_components/nav-bar/_component/language-selector";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBar() {
  const pathName = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const { toggleThemeMode, direction, mode } = useThemeMode();
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
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Services", link: "/services" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
  ];

  if (!mounted) return null;

  type ExtraProps = {
    component: React.ElementType;
    href: string;
  };
  const BrandTypography = styled(Typography)<ExtraProps>(({ theme }) => ({
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".1rem",
    color: mode === "light" ? (isScrolled ? "inherit" : "#2D3748") : "inherit",
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
      height: "1px",
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
      <Grid
        container
        spacing={{ xs: 2, lg: 6 }}
      >
        <AppBar
          position="fixed" // Keeps the AppBar fixed at the top
          sx={(theme) => ({
            // Conditional margin from the top of the window
            // mt: isScrolled ? "0px" : "10px",
            // Conditional horizontal margin to remove space for rounded corners when scrolled
            // mx: isScrolled ? "0px" : "10px",
            // Calculate width to account for horizontal margins
            // width: isScrolled ? "100%" : "calc(100% - 20px)",
            width: "100%",
            // Apply rounded corners conditionally
            // borderRadius: isScrolled ? "0px" : "7px",
            borderRadius: 0,
            // Ensure it's above other content
            // background: isScrolled ? "" : "transparent !important",
            backgroundColor:
              mode === "light"
                ? isScrolled
                  ? theme.palette.text.primary
                  : "rgba(255,255,255,0.8)"
                : theme.palette.text.primary,
            zIndex: theme.zIndex.appBar + 1,
            boxShadow: "none !important",
          })}
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
            <Grid
              size={
                {
                  // xs: "auto", lg: "grow"
                }
              }
            >
              <Box
                sx={(theme) => ({
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
                })}
              >
                <BrandTypography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/ss"
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      display: "none",
                    },
                    [theme.breakpoints.up("md")]: {
                      display: "flex",
                    },
                  })}
                >
                  TechNova
                </BrandTypography>
                <Typography
                  sx={(theme) => ({
                    color: [theme.palette.primary.main],
                    fontSize: 24,
                    fontWeight: 800,
                  })}
                >
                  /
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                {/* Mobile Menu Icon (Hamburger) */}
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    color: "red",
                  }}
                >
                  <DrawerMenu
                    menuItems={navItems}
                    anchor={direction === "ltr" ? "left" : "right"}
                  />
                </Box>

                {/* Mobile Logo/Title */}
                <Box
                  sx={(theme) => ({
                    direction: "ltr",
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
                  })}
                >
                  <BrandTypography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/ss"
                  >
                    TechNova
                  </BrandTypography>
                  <Typography
                    sx={(theme) => ({
                      color: [theme.palette.primary.main],
                      fontSize: 24,
                      fontWeight: 800,
                    })}
                  >
                    /
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: "grow", md: 6 }}>
              {/* Desktop Navigation Links */}
              <Box
                sx={{
                  maxWidth: "800px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {navItems.map(({ text, link }, index) => (
                  <MenuTypographyDesktop
                    sx={
                      pathName === link
                        ? {
                            color: isScrolled
                              ? "primary.contrastText"
                              : "text.primary",
                            "&::after": {
                              width: "100%",
                              backgroundColor: isScrolled
                                ? "primary.contrastText"
                                : "text.primary",
                            },
                            cursor: "default",
                          }
                        : {}
                    }
                    key={index}
                  >
                    {pathName === link ? text : <Link href={link}>{text}</Link>}
                  </MenuTypographyDesktop>
                ))}
              </Box>
            </Grid>
            <Grid
              size={{ md: "grow" }}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: { display: "none" },
              })}
            >
              {/* Right-aligned buttons (e.g., Login/Signup) */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {/* <Button
                  onClick={() => {
                    toggleThemeMode();
                  }}
                  disableElevation
                >
                  {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                </Button> */}
                <MaterialUIDarkModeSwitch
                  checked={mode !== "light"}
                  onClick={toggleThemeMode}
                />
                <LanguageSelector />
                <Button
                  color="inherit"
                  sx={{
                    mr: 1,
                    color:
                      mode === "light"
                        ? isScrolled
                          ? "inherit"
                          : "#2D3748"
                        : "inherit",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={(theme) => ({
                    minWidth: "120px",
                    borderRadius: "20px",
                    backgroundColor:
                      mode === "light"
                        ? isScrolled
                          ? theme.palette.primary.main
                          : "#2D3748"
                        : theme.palette.primary.main,
                    p: "3px",
                  })}
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
}

export default NavBar;

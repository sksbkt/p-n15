/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { MaterialUIDarkModeSwitch } from "@/app/_components/mui/darkmode-switch";
import { useThemeMode } from "@/hooks/useThemeHook";
import LanguageSelector from "@/app/_components/nav-bar/_component/language-selector";
import Link from "next/link";
import { useWindow } from "@/hooks/useWindow";
type DrawerMenuProps = {
  menuItems: { text: string; link: string }[];
  anchor?: "left" | "right" | "top" | "bottom";
};
const DrawerMenu = ({ menuItems, anchor }: DrawerMenuProps) => {
  const [open, setOpen] = useState(false);
  const handleToggleNavMenu = (val: boolean) => {
    setOpen(val);
  };

  const { mode, toggleThemeMode } = useThemeMode();
  const { isScrolled } = useWindow();
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
  const DrawerList = (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", p: "10px 15px 0 15px" }}>
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
      <List>
        {menuItems.map(({ text, link }, index) => (
          <ListItem
            sx={{
              p: "10px 15px ",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.1)",
                cursor: "pointer",
              },
              "& p": {
                transition: "padding-left 0.3s ease",
              },
              "&:hover p": {
                paddingLeft: "8px",
              },
            }}
            key={index}
          >
            <Link
              href={link}
              onClick={() => setOpen(false)}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "100%",
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <MaterialUIDarkModeSwitch
            checked={mode !== "light"}
            onClick={toggleThemeMode}
          />
          <LanguageSelector />
        </Box>
        <Divider />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "0 10px 20px 10px",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: "8px", width: "100%", mb: 1 }}
          >
            Sign Up
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "inherit",
              fontSize: "0.85rem", // small screens

              width: "100%",
              textAlign: "left",
            }}
          >
            Already have an account? Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={() => handleToggleNavMenu(true)}
      >
        <MenuIcon
          sx={{
            color: isScrolled
              ? mode === "light"
                ? "#fff"
                : "#fff"
              : "divider",
          }}
        />
      </IconButton>
      <Drawer
        open={open}
        anchor={anchor}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { borderRadius: 0 },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerMenu;

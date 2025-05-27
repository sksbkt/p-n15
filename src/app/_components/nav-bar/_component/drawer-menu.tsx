import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { MaterialUIDarkModeSwitch } from "@/app/_components/mui/darkmode-switch";
import { useThemeMode } from "@/hooks/useThemeHook";
import LanguageSelector from "@/app/_components/nav-bar/_component/language-selector";
type DrawerMenuProps = {
  menuItems: string[];
};
const DrawerMenu = ({ menuItems }: DrawerMenuProps) => {
  const [open, setOpen] = useState(false);
  const handleToggleNavMenu = (val: boolean) => {
    setOpen(val);
  };
  const { mode, toggleThemeMode } = useThemeMode();
  const DrawerList = (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <List>
        {menuItems.map((text, index) => (
          <ListItem
            sx={{
              padding: 2,
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
            <p>{text}</p>
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
            }}
          >
            Login
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
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => handleToggleNavMenu(false)}
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

import {
  Box,
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
    <Box sx={{ width: "250px" }}>
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={index}>{text}</ListItem>
        ))}
        <Divider />
        <MaterialUIDarkModeSwitch
          checked={mode !== "light"}
          onClick={toggleThemeMode}
        />
        <LanguageSelector />
      </List>
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

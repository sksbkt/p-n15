"use client";
import { AppBar, Button, Container, Toolbar, useTheme } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import { useDispatch } from "react-redux";
import { toggleThemeMode } from "@/store/themeSlice";

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon />
          <Button
            onClick={() => {
              dispatch(toggleThemeMode());
            }}
            sx={{ color: theme.palette.primary.main }}
          >
            MODE
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

"use client";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import CodeIcon from "@mui/icons-material/Code";
import { useDispatch } from "react-redux";
import { toggleThemeMode } from "@/store/themeSlice";
import { useThemeMode } from "@/hooks/useThemeHook";

const NavBar = () => {
  const dispatch = useDispatch();
  const [mounted, setMounted] = React.useState(false);
  const { mode } = useThemeMode();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log(mode);
  }, [mode]);
  if (!mounted) return null;

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon />
          <Button
            sx={{ color: "white" }}
            onClick={() => {
              dispatch(toggleThemeMode());
            }}
            disableElevation
          >
            {mode.toLocaleUpperCase()} MODE
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

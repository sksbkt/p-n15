import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

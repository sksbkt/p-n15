"use client";
import { useWindow } from "@/hooks/useWindow";
import { Box, Grid } from "@mui/material";
import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  const { isScrolled } = useWindow();
  return (
    <>
      <Box sx={{ height: isScrolled ? "60px" : "90px" }} />

      {children}
    </>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 6, lg: 8 }}
      >
        <Grid size={{ xs: "auto", md: "grow" }} />
        <Grid size={{ xs: "grow", md: 8, lg: 6 }}>{children}</Grid>
        <Grid size={{ xs: "auto", md: "grow" }} />
      </Grid>
    </Box>
  );
};

export default Layout;

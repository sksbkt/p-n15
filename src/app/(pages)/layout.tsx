import { Box, Grid } from "@mui/material";
import React from "react";

const layout = ({ children }: { children: React.ReactElement }) => {
  return children;
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

export default layout;

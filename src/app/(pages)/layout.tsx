import { Box, Grid } from "@mui/material";
import React from "react";

const layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={3}
      >
        <Grid size={{ xs: "auto", md: "grow" }} />
        <Grid size={{ xs: "grow", md: 6 }}>{children}</Grid>
        <Grid size={{ xs: "auto", md: "grow" }} />
      </Grid>
    </Box>
  );
};

export default layout;

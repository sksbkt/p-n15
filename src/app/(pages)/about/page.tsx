import React from "react";
import { Container, Typography, Box, Avatar, Paper } from "@mui/material";

const AboutPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 8 }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            alt="Profile"
            src="/profile.jpg"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            align="justify"
          >
            Hi! I&apos;m a passionate developer with experience in React,
            TypeScript, and Material UI. I love building modern web applications
            and learning new technologies.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutPage;

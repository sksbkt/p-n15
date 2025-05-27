"use client";
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern web applications using the latest technologies.",
    image: "https://picsum.photos/300/300",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces and experiences for your digital products.",
    image: "https://picsum.photos/300/300",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your website's visibility and ranking on search engines.",
    image: "https://picsum.photos/300/300",
  },
];

const ServicesPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 6 }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
      >
        Our Services
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        paragraph
      >
        We offer a wide range of services to help your business grow online.
      </Typography>
      <Box mt={4}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          {services.map((service, idx) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={idx}
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform:
                    "perspective(70em) rotateX(6deg) rotateY(6deg) scale(1.02)",
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicesPage;

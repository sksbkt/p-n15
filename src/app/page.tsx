"use client";
import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import SliderComponent from "@/app/_components/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const projects = [
    {
      title: "NovaCRM",
      description:
        "A modern CRM platform to manage your clients and sales pipeline efficiently.",
      image: "https://picsum.photos/800/300?random=11",
    },
    {
      title: "TechBlog",
      description:
        "A feature-rich blogging platform for developers and tech enthusiasts.",
      image: "https://picsum.photos/800/300?random=12",
    },
    {
      title: "DevTracker",
      description:
        "Track your software development tasks and collaborate with your team seamlessly.",
      image: "https://picsum.photos/800/300?random=13",
    },
  ];
  const parallaxBoxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // let timeoutId: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 300, 0);
      if (parallaxBoxRef.current)
        parallaxBoxRef.current.style.opacity = newOpacity.toString();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      {/* Parallax Section */}
      <Box
        ref={parallaxBoxRef}
        sx={{
          height: 400,
          backgroundImage: `url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          // opacity: opacity,
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Box
          textAlign="center"
          bgcolor="rgba(0,0,0,.9)"
          p={4}
          borderRadius={2}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign={"start"}
            gutterBottom
          >
            TechNova Software Development Industry
          </Typography>
          <Typography
            variant="h5"
            textAlign={"start"}
            gutterBottom
          >
            Discover, play, and compete in the best games!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Carousel Section */}
      <Container
        maxWidth="md"
        sx={{ my: 6 }}
      >
        <SliderComponent />
      </Container>
      <Container
        maxWidth="md"
        sx={{ my: 6 }}
      >
        <SliderComponent />
      </Container>
      <Container
        maxWidth="md"
        sx={{ my: 6 }}
      >
        <SliderComponent />
      </Container>

      {/* Games Grid */}
      {/* <Container
        maxWidth="lg"
        sx={{ py: 6 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Featured Games
        </Typography>
        <Grid
          container
          spacing={4}
        >
          {games.map((game) => (
            <Grid
              fontSize={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={game.title}
            >
              <Card>
                <CardMedia
                  component="img"
                  height={140}
                  image={game.image}
                  alt={game.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    {game.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {game.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}
    </Box>
  );
}

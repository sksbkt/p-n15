"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import SliderComponent from "@/app/_components/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const games = [
    {
      title: "Space Adventure",
      description: "Explore the galaxy and conquer new worlds.",
      image: "https://picsum.photos/800/300?random=1",
    },
    {
      title: "Fantasy Quest",
      description: "Embark on an epic journey in a magical realm.",
      image: "https://picsum.photos/800/300?random=2",
    },
    {
      title: "Racing Thunder",
      description: "Feel the adrenaline in high-speed races.",
      image: "https://picsum.photos/800/300?random=3",
    },
  ];
  return (
    <Box>
      {/* Parallax Section */}
      <Box
        sx={{
          height: 400,
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Box
          textAlign="center"
          bgcolor="rgba(0,0,0,0.5)"
          p={4}
          borderRadius={2}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
          >
            Welcome to GameVerse
          </Typography>
          <Typography
            variant="h5"
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

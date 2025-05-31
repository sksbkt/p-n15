"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const games = [
  {
    title: "Space Adventure",
    description: "Explore the galaxy and conquer new worlds.",
    image: "https://picsum.photos/200/140?random=1",
  },
  {
    title: "Fantasy Quest",
    description: "Embark on an epic journey in a magical realm.",
    image: "https://picsum.photos/200/140?random=2",
  },
  {
    title: "Racing Thunder",
    description: "Feel the adrenaline in high-speed races.",
    image: "https://picsum.photos/200/140?random=3",
  },
];

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 6 }}
    >
      <Box
        textAlign="center"
        mb={6}
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
          color="text.secondary"
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
      <Grid
        container
        spacing={4}
      >
        {games.map((game) => (
          <Grid
            size={{
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
    </Container>
  );
}

"use client";
import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import SliderComponent from "@/app/_components/silder.tsx/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { useThemeMode } from "@/hooks/useThemeHook";

function Home() {
  const { mode } = useThemeMode();
  // const projects = [
  //   {
  //     title: "NovaCRM",
  //     description:
  //       "A modern CRM platform to manage your clients and sales pipeline efficiently.",
  //     image: "https://picsum.photos/800/300?random=11",
  //   },
  //   {
  //     title: "TechBlog",
  //     description:
  //       "A feature-rich blogging platform for developers and tech enthusiasts.",
  //     image: "https://picsum.photos/800/300?random=12",
  //   },
  //   {
  //     title: "DevTracker",
  //     description:
  //       "Track your software development tasks and collaborate with your team seamlessly.",
  //     image: "https://picsum.photos/800/300?random=13",
  //   },
  // ];
  const parallaxBoxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // let timeoutId: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - (scrollY - 400) / 400, 0);
      if (!parallaxBoxRef.current) return;
      parallaxBoxRef.current.style.backgroundSize = `calc(${
        scrollY * 0.02
      }% + 100%)`;

      if (scrollY > 400) {
        parallaxBoxRef.current.style.opacity = newOpacity.toString();
      } else if (parallaxBoxRef.current) {
        parallaxBoxRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="scroll-container ">
      {/* Parallax Section */}
      <Box
        ref={parallaxBoxRef}
        sx={{
          // height: { xs: "50vh", sm: "70vh", md: "80vh" },
          height: "100vh",
          width: "100%",
          backgroundImage:
            mode === "dark"
              ? `url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
              : `url('https://images.unsplash.com/photo-1579412690850-bd41cd0af397?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          // opacity: opacity,
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          scrollSnapAlign: "start" /* Snap to the start edge of the item */,
          scrollSnapStop: "always",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Box
          textAlign="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: { xs: 1, md: 1, lg: 2 },
            background:
              "linear-gradient(-135deg, rgba(20,20,40,0.95) 0%, rgba(40,40,80,0.85) 100%)",
          }}
          p={4}
          m={{ xs: 2, sm: 4, md: 6 }}
          width={{ xs: "100%", sm: "80%", md: "60%" }}
          borderRadius={2}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign={"start"}
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              fontWeight: "bold",
            }}
          >
            TechNova Software Development Industry
          </Typography>
          <Typography
            variant="body1"
            textAlign="start"
            gutterBottom
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            }}
          >
            We provide innovative solutions to empower your business growth. Our
            team delivers robust, scalable, and user-friendly applications
            tailored to your needs. Partner with us to accelerate your digital
            transformation and stay ahead in a competitive market.
          </Typography>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              flexShrink: 1,
              gap: 2,
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "50px",
              padding: "10px",
            }}
          >
            <Typography sx={{ p: "0 10px 0 20px" }}>
              lets try our demos
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: "50px",
              }}
            >
              Try Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Carousel Section */}
      <Box
        sx={{
          py: 6,
          ml: "auto",
          mr: "auto",
          alignSelf: "center",
          maxWidth: { xs: "100%", md: "80%" },
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          scrollSnapAlign: "start" /* Snap to the start edge of the item */,
          scrollSnapStop: "always",
        }}
      >
        <Typography
          sx={(theme) => ({
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: 600,
            alignSelf: "start",

            [theme.breakpoints.down("md")]: {
              alignSelf: "center",
            },
          })}
          variant="h2"
          fontWeight="bold"
          gutterBottom
        >
          Our projects
        </Typography>
        <SliderComponent />
      </Box>

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

export default dynamic(() => Promise.resolve(Home), { ssr: false });

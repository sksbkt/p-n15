"use client";
import React, { RefObject, useEffect, useRef } from "react";
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
  const parallaxBoxRef1 = useRef<HTMLDivElement | null>(null);
  const parallaxBoxRef2 = useRef<HTMLDivElement | null>(null);
  const parallaxBoxRef3 = useRef<HTMLDivElement | null>(null);
  const parallaxList = [parallaxBoxRef1, parallaxBoxRef2, parallaxBoxRef3];
  const handleScroll = () => {
    parallaxList.forEach((ref) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const top = Math.abs(rect.top);
      // const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - top / rect.height, 0);

      if (top > 400) {
        ref.current.style.opacity = newOpacity.toString();
      } else {
        ref.current.style.opacity = "1";
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box>
      <Box
        ref={parallaxBoxRef1}
        sx={{
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
            background:
              "linear-gradient(-135deg, rgba(20,20,40,0.95) 0%, rgba(40,40,80,0.85) 100%)",
            width: { xs: "90vw", sm: "80vw", md: "60vw" },
          }}
          p={4}
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
              m: 0,
            }}
          >
            TechNova Software
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign={"start"}
            gutterBottom
            sx={{
              fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
            }}
          >
            Development Industry
          </Typography>
          <Typography
            variant="body1"
            textAlign="start"
            gutterBottom
            sx={{
              mt: 1,
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
      {/* Parallax Expertise Section */}
      <Box
        ref={parallaxBoxRef2}
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          backgroundImage:
            mode === "dark"
              ? `url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')`
              : `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            background:
              "linear-gradient(120deg, rgba(30,30,60,0.85) 60%, rgba(60,60,120,0.7) 100%)",
            borderRadius: 3,
            p: { xs: 3, md: 6 },
            maxWidth: { xs: "90vw", md: "60vw" },
            color: "#fff",
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Our Expertise
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}
          >
            We specialize in full-stack web development, cloud solutions, and
            UI/UX design. Our team leverages the latest technologies to deliver
            scalable, secure, and visually stunning applications for businesses
            of all sizes.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
              mt: 2,
            }}
          >
            <Box
              sx={{
                minWidth: 180,
                p: 2,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
              >
                Web Development
              </Typography>
              <Typography variant="body2">
                React, Next.js, Node.js, TypeScript
              </Typography>
            </Box>
            <Box
              sx={{
                minWidth: 180,
                p: 2,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
              >
                Cloud & DevOps
              </Typography>
              <Typography variant="body2">AWS, Azure, Docker, CI/CD</Typography>
            </Box>
            <Box
              sx={{
                minWidth: 180,
                p: 2,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
              >
                UI/UX Design
              </Typography>
              <Typography variant="body2">
                Figma, Material UI, Responsive Design
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Optional: Overlay for parallax effect */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(20,20,40,0.7) 60%, rgba(40,40,80,0.5) 100%)",
            zIndex: 1,
          }}
        />
      </Box>
      {/* Carousel Section */}
      <Box
        ref={parallaxBoxRef3}
        sx={{
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
          sx={{
            py: 6,
            ml: "auto",
            mr: "auto",
            alignSelf: "center",
            width: { xs: "90vw", sm: "80vw", md: "60vw" },
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

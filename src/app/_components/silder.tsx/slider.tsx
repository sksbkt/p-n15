import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Tags from "@/app/_components/silder.tsx/_components/tag";

const SliderComponent = () => {
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

  // Custom Arrow Components
  const NextArrow = (props: React.ComponentPropsWithoutRef<"button">) => {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        style={{
          ...style,
          zIndex: 2,
          borderRadius: "50%",
          width: 40,
          height: 40,
          right: 16,
        }}
        onClick={onClick}
        aria-label="next"
      >
        <ArrowForwardIosIcon sx={{ color: "#fff" }} />
      </IconButton>
    );
  };

  const PrevArrow = (props: React.ComponentPropsWithoutRef<"button">) => {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        style={{
          ...style,
          zIndex: 2,
          borderRadius: "50%",
          width: 40,
          height: 40,
          left: 16,
        }}
        onClick={onClick}
        aria-label="previous"
      >
        <ArrowBackIosNewIcon sx={{ color: "#fff" }} />
      </IconButton>
    );
  };

  return (
    <Card sx={{ position: "relative", overflow: "hidden" }}>
      <Slider
        autoplaySpeed={3000}
        dots={true}
        appendDots={(dots) => (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
              width: "auto",
              height: "40px",
              p: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                backgroundColor: "rgba(0,0,0,0.2)",
                p: "5px 7px",
                borderRadius: "25px",
              }}
            >
              {dots}
            </Box>
          </Box>
        )}
        customPaging={() => (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              bgcolor: "rgba(190,190,190,0.7)",
              borderRadius: "50%",
              transition: "background 0.3s",
            }}
          />
        )}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows
        className="slider-inside-arrows"
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {games.map((game, index) => (
          // <Box
          //   key={game.title}
          //   sx={{ position: "relative" }}
          // >
          <Box key={index}>
            <CardMedia
              component="img"
              height="300"
              image={game.image}
              alt={game.title}
              sx={{
                width: "100%",
                height: { xs: 180, sm: 250, md: 300 },
                objectFit: "cover",
              }}
            />
            <CardContent
              sx={(theme) => ({
                bottom: 0,
                left: 0,
                width: "100%",
                p: { md: 3 },
                [theme.breakpoints.down("md")]: {
                  display: "flex",
                  alignItems: "center",
                  textAlign: "start",
                  position: "absolute",
                  background:
                    "linear-gradient(180deg,rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.4) 34%, rgba(0, 0, 0, 0.4) 99%)",
                  backdropFilter: "blur(1px) ",
                  color: "#fff",
                },
              })}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    flexBasis: "60%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      [theme.breakpoints.down("md")]: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                      fontWeight: 600,
                    })}
                  >
                    {game.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      [theme.breakpoints.down("md")]: {
                        display: "none",
                      },
                      fontSize: { md: "1rem" },
                    })}
                  >
                    {game.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    flexBasis: { md: "40%" },
                  }}
                >
                  <Tags
                    tags={[
                      {
                        text: "Next js",
                        link: "https://nextjs.org/",
                        icon: "nextjs",
                      },
                      { text: "MUI", link: "https://mui.com/", icon: "mui" },
                      {
                        text: "ReduxToolkit",
                        link: "https://redux-toolkit.js.org/",
                        icon: "redux",
                      },
                      {
                        text: "TypeScript",
                        link: "https://www.typescriptlang.org/",
                        icon: "typescript",
                      },
                      {
                        text: "React",
                        link: "https://react.dev/",
                        icon: "react",
                      },
                      {
                        text: "JavaScript",
                        link: "https://www.javascript.com/",
                        icon: "javascript",
                      },
                    ]}
                  />
                </Box>
              </Box>
            </CardContent>
          </Box>
        ))}
      </Slider>
    </Card>
  );
};

export default SliderComponent;

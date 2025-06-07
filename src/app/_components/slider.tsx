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
  const NextArrow = (props: any) => {
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

  const PrevArrow = (props: any) => {
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
    <>
      <Box sx={{ position: "relative" }}>
        <Slider
          //   autoplay={true}
          autoplaySpeed={3000}
          dots={true}
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows
          className="slider-inside-arrows"
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {games.map((game) => (
            <Box
              key={game.title}
              sx={{ position: "relative" }}
            >
              <Card sx={{ position: "relative" }}>
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
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background:
                      "linear-gradient(180deg,rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.4) 34%, rgba(0, 0, 0, 0.4) 99%)",
                    backdropFilter: "blur(1px) saturate(0.4)",
                    color: "#fff",
                    p: { md: 3 },
                    [theme.breakpoints.down("md")]: {
                      display: "flex",
                      height: "1.2rem",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    },
                  })}
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
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
        <style>
          {`
                .slider-inside-arrows {
                        position: relative;
                    }
                .slider-inside-arrows .slick-arrow {
                position:absolute;
                    z-index: 2;
                }
                .slider-inside-arrows .slick-prev {
                    left: 16px;          
                }
                .slider-inside-arrows .slick-next {
                    right: 16px;
                }
                .slick-prev:before{
                    display:none;
                }
                .slick-next:before{
                    display:none;
                }
                .slick-slide{
                    filter: saturate(0.2) blur(2px);   
                }
                .slick-current{
                     transition:filter 0.3s ease-in;
                     filter: saturate(1.2);   
                }
                `}
        </style>
      </Box>
    </>
  );
};

export default SliderComponent;

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
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0,0,0,0.5)",
                    color: "#fff",
                  }}
                >
                  <Typography variant="h5">{game.title}</Typography>
                  <Typography variant="body2">{game.description}</Typography>
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
                `}
        </style>
      </Box>
    </>
  );
};

export default SliderComponent;

"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Image from "next/image";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const contactUs = "/images/contact-us.jpg";
const ContactPage = () => {
  return (
    <Container>
      <Box
        sx={{
          borderRadius: 5,
          background: "#F5F5F5",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          height: "80dvh",
        }}
      >
        {/* LEFT */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.3,
              p: 2,
            }}
          >
            <CircleIcon
              sx={{ width: "0.7rem", height: "0.7rem", color: "#F06962" }}
            />
            <CircleIcon
              sx={{ width: "0.7rem", height: "0.7rem", color: "#FAB851" }}
            />
            <CircleIcon
              sx={{ width: "0.7rem", height: "0.7rem", color: "#66CB57" }}
            />
          </Box>
        </Box>
        {/* RIGHT */}
        <Box
          sx={(theme) => ({
            width: "50%",
            padding: 1,
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          })}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              height: "100%",
              backgroundPosition: "center",
              "&::after": {
                content: '""',
                display: "block",
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "100%",
                width: "100%",
                transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
                zIndex: 1,
                background:
                  "linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, .2) 70%, rgba(0, 0, 0, .6) 100%)",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 1,
                left: 15,
                top: 10,
              }}
            >
              <Box
                sx={{
                  background: "rgba(0, 0, 0, 0.1)",
                  padding: "2px",
                  borderRadius: 1,
                }}
              >
                <AcUnitIcon sx={{ color: "#fff" }} />
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/ss"
                sx={(theme) => ({
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",

                  textDecoration: "none",
                  fontSize: "1.5rem",
                  transition: "font-size 0.3s ease-in-out",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                  [theme.breakpoints.up("md")]: {
                    display: "flex",
                  },
                })}
              >
                Dev
              </Typography>
              <Typography
                sx={(theme) => ({
                  color: [theme.palette.primary.main],
                  fontSize: 24,
                  fontWeight: 800,
                })}
              >
                /
              </Typography>
            </Box>
            <Image
              alt="contact us"
              src={contactUs}
              width={1000}
              height={1000}
              style={{
                objectFit: "cover",
                objectPosition: "60%",
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 30,
                color: "#fff",
                zIndex: 2,
                padding: "10px",
                borderRadius: "5px",
                fontWeight: "300",
                width: "90%",
              }}
            >
              <Typography sx={{ fontWeight: 300, fontSize: 18 }}>
                Every line of code shapes the future. As developers, we solve
                problems and make an impact. Innovation thrives on curiosity and
                persistence. Embrace challenges, learn from setbacks, and
                celebrate victories. Together, we build possibilities—let’s keep
                pushing boundaries and turning vision into reality.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                  Maya Rothwell
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PanoramaFishEyeIcon sx={{ fontSize: 20 }} />
                  <Typography>Open ventures</Typography>
                </Box>
              </Box>
              <Typography sx={{ fontSize: 12, fontWeight: 300 }}>
                Founder & CEO
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;

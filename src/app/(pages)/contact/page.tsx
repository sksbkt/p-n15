"use client";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useColorScheme,
} from "@mui/material";
import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Image from "next/image";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import dynamic from "next/dynamic";
const contactUs = "/images/contact-us.jpg";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const ContactPage = () => {
  const { mode } = useColorScheme();
  const [employeeMode, setEmployeeMode] = useState(0);

  return (
    <Container
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        minWidth: "400px ",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          maxWidth: "600px",
        },
      })}
    >
      <Box
        sx={{
          borderRadius: 5,
          background: mode === "dark" ? "#2D3748" : "#F5F5F5",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          height: "80dvh",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* LEFT */}
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "50%",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
            position: "relative",
          })}
        >
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
          <Box sx={{ flexGrow: 1, m: 7 }}>
            <form>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: "text.secondary" }}
              >
                Chat to our team
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  color: "text.secondary",
                  fontSize: 15,
                  fontWeight: 400,
                }}
              >
                We’d love to hear from you! Whether you have a question,
                feedback, or just want to connect.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                <TextField
                  label="First name"
                  variant="standard"
                  sx={{ color: "text.secondary", flexGrow: 1 }}
                />
                <TextField
                  label="Last name"
                  variant="standard"
                  sx={{ color: "text.secondary", flexGrow: 1 }}
                />
              </Box>
              <TextField
                label="Job title"
                variant="standard"
                sx={{ color: "text.secondary", width: "100%" }}
              />
              <TextField
                label="Work email"
                variant="standard"
                sx={{ color: "text.secondary", width: "100%" }}
                type="email"
              />
              <TextField
                label="Work email"
                variant="standard"
                sx={{ color: "text.secondary", width: "100%" }}
                type="email"
              />
              {/* TODO: need to create the component */}
              <TextField
                placeholder="+1 123123 1231 232"
                variant="standard"
                sx={{ color: "text.secondary", width: "100%", mt: 2 }}
                type="email"
              />
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "text.secondary",
                  }}
                >
                  Number of employees
                </Typography>
                <EmployeeType
                  selected={employeeMode == 0}
                  handleClick={() => setEmployeeMode(0)}
                  icon={<PersonOutlineOutlinedIcon />}
                >
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                    I&apos;m a solo creator
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontWeight: 300 }}>
                    I need to setup an account for myself.
                  </Typography>
                </EmployeeType>
                <EmployeeType
                  selected={employeeMode == 1}
                  handleClick={() => setEmployeeMode(1)}
                  icon={<PeopleAltOutlinedIcon />}
                >
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                    I&apos;m part of a team
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontWeight: 300 }}>
                    I need to setup an account for a team.
                  </Typography>
                </EmployeeType>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ width: "100%", mt: 2 }}
                >
                  Get in touch
                </Button>
              </Box>
            </form>
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
                  color: "#2D3748",
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
              // * just for review and avoid pixelated imagery
              unoptimized={true}
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
// ? PROCEED WITH CAUTION: its a workaround for the Nextjs forcing the SSR on client side component. it may have side effects and needs to be tested some more
export default dynamic(() => Promise.resolve(ContactPage), { ssr: false });

const EmployeeType = ({
  selected,
  handleClick,
  icon,
  children,
}: {
  selected: boolean;
  handleClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  const { mode } = useColorScheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        position: "relative",
        border: `1.5px solid ${
          selected
            ? mode === "light"
              ? "#444"
              : "#fff"
            : mode === "light"
            ? "#ddd"
            : "#444"
        }`,
        borderRadius: 2,
        p: 1,
        mt: 2,
        gap: 1,
        overflow: "hidden",
        "&:hover": {
          cursor: "pointer",
        },
        "&::after": {
          zIndex: 2,
          transition: ".2s all ease-in-out",
          position: "absolute",
          content: '""',
          background: mode === "light" ? "#444" : "#fff",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          opacity: 0.1,
        },
        "&:hover::after": {
          opacity: 0.2,
        },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          aspectRatio: "1/1",
          height: "30px",
          borderRadius: 2,
          m: 1,
          border: "1px solid #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "start",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Image from "next/image";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
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
          sx={{
            width: "50%",
            padding: 1,
            display: { sm: "none", md: "block" },
          }}
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
              <Typography>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
                &apos;Content here, content here&apos;, making it look like
                readable English.
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

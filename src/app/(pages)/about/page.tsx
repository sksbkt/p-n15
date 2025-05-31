import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Paper,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";

// Example data for key persons
const keyPersons = [
  {
    name: "Maya Rothwell",
    title: "Chief Executive Officer",
    img: "/alice.jpg",
    bio: "Maya leads the company with over 15 years of experience in software engineering and business strategy.",
  },
  {
    name: "Bob Smith",
    title: "Chief Technology Officer",
    img: "/bob.jpg",
    bio: "Bob oversees all technical aspects and drives innovation in our product development.",
  },
  {
    name: "Carol Lee",
    title: "Head of Product",
    img: "/carol.jpg",
    bio: "Carol manages the product team and ensures our solutions meet customer needs.",
  },
];

const AboutPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ mt: 8, mb: 8 }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={4}
        >
          <Avatar
            alt="Company Logo"
            src="/company-logo.png"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
          >
            About TechNova Solutions
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            sx={{ maxWidth: 700 }}
          >
            TechNova Solutions is a leading software company specializing in
            building scalable, modern web and mobile applications for clients
            worldwide. Our mission is to empower businesses through innovative
            technology and exceptional engineering talent. With a focus on
            quality, collaboration, and continuous learning, we deliver
            solutions that drive success and growth.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
        >
          Meet Our Leadership Team
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {keyPersons.map((person) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={person.name}
            >
              <Card
                sx={{
                  alignItems: "center",
                  textAlign: "start",
                  height: "300px",
                  gap: 2,
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      alt={person.name}
                      src={person.img}
                      sx={{ width: 80, height: 80, mx: "auto" }}
                    />
                  }
                  title={person.name}
                  subheader={person.title}
                  sx={{ pb: 0, gap: 2 }}
                />
                <CardContent>
                  <Typography variant="body2">{person.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
        >
          Our Location
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 2 }}
          >
            123 Innovation Drive, Suite 400
            <br />
            San Francisco, CA 94107, USA
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: 350,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 2,
            }}
          >
            <iframe
              title="Company Location"
              width="100%"
              height="100%"
              style={{ border: "1px solid primary.main" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019017063191!2d-122.39691768468114!3d37.7811579797577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1b3e7c7%3A0x2e8b8e7e8e8e8e8e!2s123%20Innovation%20Dr%2C%20San%20Francisco%2C%20CA%2094107%2C%20USA!5e0!3m2!1sen!2sus!4v1710000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutPage;

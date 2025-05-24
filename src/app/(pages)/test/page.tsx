"use client";
import { Typography } from "@mui/material";

function TestPage() {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
      >
        Welcome to Our Awesome Page!
      </Typography>
      <Typography>
        This is some example content to make the page scrollable. Observe how
        the navigation bar at the top changes its size and appearance as you
        scroll down the page. It becomes more compact, providing more screen
        real estate for your content.
      </Typography>
      <Typography>
        The navigation bar features a 10-pixel gap from the top of the window
        and has beautifully rounded edges, giving it a modern and sleek look.
        It&apos;s also fully responsive, adapting gracefully to different screen
        sizes.
      </Typography>
      {Array.from(Array(30).keys()).map((i) => (
        <Typography key={i}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      ))}
    </>
  );
}

export default TestPage;

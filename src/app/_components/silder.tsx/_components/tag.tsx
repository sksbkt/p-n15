import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

const Tags = ({ tags }: { tags: { text: string; link?: string }[] }) => {
  return (
    <Box
      sx={{
        columnGap: 0.3,
        rowGap: 0.5,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {tags.map(({ text, link }, index) => (
        <Link
          key={index}
          href={link || "#"}
          component={NextLink}
          underline="none"
          target="_blank"
          rel="noopener noreferrer"
          sx={(theme) => ({
            display: "inline-flex",
            borderRadius: "25px",
            backgroundColor: "rgba(190, 190, 190, 1)",
            color: "#444",
            p: "0px 10px",
            "&:hover": {
              textDecoration: "none",
              backgroundColor: "rgba(190, 190, 190, 0.8)",
            },
            [theme.breakpoints.down("md")]: {
              flexWrap: "nowrap",
            },
          })}
        >
          <Typography>{text}</Typography>
        </Link>
      ))}
    </Box>
  );
};

export default Tags;

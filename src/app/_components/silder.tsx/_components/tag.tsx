import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
export const techIcon = {
  nextjs:
    "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
  react:
    "https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=000000",
  redux:
    "https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=000000",
  mui: "https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000",
  typescript:
    "https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000",
  javascript:
    "https://img.icons8.com/?size=100&id=39854&format=png&color=000000",
};
type TechIconKey = keyof typeof techIcon;

type Tag = {
  text: string;
  link?: string;
  icon: TechIconKey;
};

const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <Box
      sx={{
        columnGap: 0.5,
        rowGap: 0.6,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {tags.map(({ text, link, icon }, index) => (
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
            p: { xs: "4px", sm: "4px", md: "0px 10px" },
            "&:hover": {
              textDecoration: "none",
              backgroundColor: "rgba(190, 190, 190, 0.8)",
            },
            [theme.breakpoints.down("md")]: {
              flexWrap: "nowrap",
            },
            gap: "5px",
          })}
          title={text}
        >
          <Typography
            sx={{
              display: { xs: "none", sm: "none", md: "inline-flex" },
              alignItems: "center",
            }}
          >
            {text}
          </Typography>
          <Image
            src={techIcon[icon]}
            alt="icon"
            style={{
              width: "20px",
              height: "20px",
              verticalAlign: "middle",
              display: "inline-block",
              alignSelf: "center",
              justifySelf: "center",
            }}
            width={20}
            height={20}
          />
        </Link>
      ))}
    </Box>
  );
};

export default Tags;

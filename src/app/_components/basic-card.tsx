import { Box, Typography, useColorScheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import ArchitectureIcon from "@mui/icons-material/Architecture";
const expertiseList = [
  {
    title: "Frontend Engineering",
    subTitle: "React, Next.js, TypeScript, JavaScript",
    description:
      "Building performant, maintainable, and accessible user interfaces with React and Next.js. Experienced in SSR, SSG, and dynamic routing for modern web apps.",
    icon: CodeIcon,
  },
  {
    title: "UI/UX Implementation",
    subTitle: "MUI, Styled Components, Responsive Design",
    description:
      "Crafting pixel-perfect, responsive layouts and seamless user experiences. Skilled in design systems, theming, and cross-device compatibility.",
    icon: GridViewIcon,
  },
  {
    title: "Frontend Architecture",
    subTitle: "State Management, Testing, Optimization",
    description:
      "Expertise in scalable state management (Redux, Context), component-driven development, automated testing, and performance optimization.",
    icon: ArchitectureIcon,
  },
];
const ExpertiseComponent = () => {
  const { mode } = useColorScheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          maxHeight: "80dvh",
          zIndex: 2,
          background:
            mode === "light"
              ? "linear-gradient(120deg, rgba(10,10,20,.7) 60%, rgb(151,151, 255 , .4) 100%)"
              : "linear-gradient(120deg, rgba(20,20,40,0.7) 60%, rgba(10,10,20,0.5) 100%)",
          borderRadius: 3,
          p: { xs: 3, md: 6 },
          maxWidth: { xs: "90vw", md: "60vw" },
          color: "#fff",
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 2px 8px rgba(0,0,0,0.15)",
          textAlign: "center",
          overflow: "auto",
          // Custom scrollbars with no background
          "&::-webkit-scrollbar": {
            width: "8px",
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(120,120,255,0.4)",
            borderRadius: "8px",
            minHeight: "40px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(120,120,255,0.4) transparent",
          // ? we use pseudo elements to create a blur effect and avoid getting the misaligned tooltip issue
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: 0,
            borderRadius: 3,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            pointerEvents: "none",
          },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            textAlign: "start",
            fontSize: { sm: "1.7rem", md: "2rem" },
            mb: 2,
            position: "relative",
            zIndex: 1,
          }}
        >
          Our Expertise
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            mb: 2,
            textAlign: "start",
            position: "relative",
            zIndex: 1,
          }}
        >
          We specialize in full-stack web development, cloud solutions, and
          UI/UX design. Our team leverages the latest technologies to deliver
          scalable, secure, and visually stunning applications for businesses of
          all sizes.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: 1, md: 3 },
            mt: 2,
            position: "relative",
            zIndex: 1,
          }}
        >
          {expertiseList.map((card, idx) => (
            <BasicCard
              key={idx}
              title={card.title}
              subTitle={card.subTitle}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ExpertiseComponent;
type basicCardProps = {
  title: string;
  subTitle: string;
  description: string;
  icon: React.ElementType;
};
import React, { useEffect, useRef } from "react";
const BasicCard = ({
  title,
  subTitle,
  description,
  // jsx tags start with capital letter
  icon: Icon,
}: basicCardProps) => {
  const { mode } = useColorScheme();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTooltipPos({ x: e.clientX + 12, y: e.clientY + 12 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "30%" },
        minWidth: { md: "100%", lg: "180px" },
        maxWidth: { xs: "100%", md: "350px" },
        p: "16px 20px",
        background:
          mode === "dark"
            ? "linear-gradient(120deg, rgba(80,80,160,0.2) 60%, rgba(151,151,255,0.3) 100%)"
            : "linear-gradient(120deg, rgba(40,40,60,0.5) 60%, rgba(80,80,160,0.6) 100%)",
        borderRadius: 2,
        border: `1px solid ${
          mode === "light" ? "rgba(204,204,204,1)" : "rgba(85,85,85,1)"
        }`,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        mb: { xs: 2, md: 0 },
        textOverflow: "ellipsis",
        wordBreak: "break-word",
        position: "relative",
        cursor: "pointer",
        transition: "background-position 0.8s cubic-bezier(0.4,0,0.2,1)",
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 50%",
        "&:hover": {
          backgroundPosition: "100% 50%",
        },
        "&:hover .custom-tooltip": {
          opacity: 1,
          pointerEvents: "auto",
        },
      }}
      onPointerEnter={(e: React.PointerEvent<HTMLDivElement>) =>
        setTimeout(() => {
          console.log("show", e.clientX);
        }, 1000)
      }
    >
      <Box
        className="custom-tooltip"
        sx={{
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.2s",
          position: "fixed",
          zIndex: 10,
          background:
            mode === "light"
              ? "linear-gradient(120deg, rgba(255,255,255,1) 60%, rgba(227,227,255,1) 100%)"
              : "linear-gradient(120deg, rgba(34,34,34,1) 60%, rgba(68,68,68,1) 100%)",
          color: mode === "light" ? "rgba(34,34,34,1)" : "rgba(255,255,255,1)",
          border: `1px solid ${
            mode === "light" ? "rgba(204,204,204,1)" : "rgba(85,85,85,1)"
          }`,
          borderRadius: 2,
          px: 2,
          py: 1,
          boxShadow: 3,
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: "180px",
          fontSize: "0.95rem",
          left: tooltipPos.x,
          top: tooltipPos.y,
        }}
        ref={tooltipRef}
      >
        {/* {icon} */}
        <Icon />
        <span>{title}</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
              fontSize: "1.4rem",
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <Icon
            sx={{
              alignSelf: "start",
              width: { xs: 32, md: 35 },
              height: { xs: 32, md: 35 },
            }}
          />
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          display: "flex",
          justifyContent: "start",
          textAlign: "start",
          fontSize: "1.1rem",
          fontWeight: 200,
        }}
      >
        {subTitle}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: "flex",
          justifyContent: "start",
          textAlign: "start",
          fontSize: "0.9rem",
          fontWeight: 200,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

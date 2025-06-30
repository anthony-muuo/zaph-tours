import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", md: "80vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src="/lion.jpg"
        alt="hero-image"
        loading="lazy"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontSize: { xs: "24px", md: "42px" },
            margin: "6px",
            color: "primary.light",
          }}
        >
          Zaph Tours
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "300",
            textTransform: "uppercase",
            fontStyle: "italic",
            fontFamily: `"Georgia", "Times New Roman", serif`,
            letterSpacing: 2,
            textAlign: "center",
            fontSize: { xs: "20px", md: "32px" },
          }}
        >
          Explore the world with us
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;

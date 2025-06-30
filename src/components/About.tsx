import { Grid, Typography } from "@mui/material";
const About = () => {
  return (
    <Grid sx={{ p: "80px" }}>
      <Typography
        sx={{
          textAlign: "center",
          padding: "12px",
          fontFamily: `"Georgia", "Times New Roman", serif`,
          fontSize: { xs: "24px", md: "42px" },
        }}
      >
        Find Your Dream Adventure
      </Typography>
      <hr className="line" />
      <Typography
        sx={{
          textAlign: "center",
          padding: "12px",
          width: "80%",
          margin: "1px auto",
        }}
      >
        Begin an unforgettable journey through East Africa, where breathtaking
        wildlife and landscapes await. Explore vast savannahs, lush forests, and
        pristine coastlines with our expertly curated safari tours. Start your
        adventure today and create lifelong memories in this adventurer's
        paradise.
      </Typography>
    </Grid>
  );
};

export default About;

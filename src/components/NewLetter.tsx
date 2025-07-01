import { Grid, Typography, TextField, Button } from "@mui/material";

const Newsletter = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 4, backgroundColor: "#f9f9f9", borderRadius: 2 }}
    >
      <Typography
        sx={{
          textAlign: "center",
          padding: "12px",
          fontFamily: `"Georgia", "Times New Roman", serif`,
          fontSize: { xs: "24px", md: "42px" },
        }}
      >
        Join Our Newsletter
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontStyle: "italic",
          pb: 2,
        }}
      >
        Get weekly access to our best deals
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid>
          <TextField fullWidth label="Enter your email" variant="outlined" />
        </Grid>
        <Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ height: "56px", paddingX: "3rem" }}
          >
            Join
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Newsletter;

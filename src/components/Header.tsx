import { Button, Grid, Typography } from "@mui/material";
const Header = () => {
  return (
    <Grid>
      <Grid
        bgcolor={"black"}
        color={"white"}
        container
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        paddingY={0.6}
        paddingX={5}
      >
        <Typography variant="body2">Ready For A Unique Experience?</Typography>
        <Grid
          container
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          spacing={4}
        >
          <Typography variant="body2">
            Exiciting Unique Adventure In Zaph Tour
          </Typography>
          <Typography variant="body2">+254 728970785</Typography>
          <Button variant="contained">Book Now</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;

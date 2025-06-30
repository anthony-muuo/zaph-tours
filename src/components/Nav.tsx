import { Grid, Typography } from "@mui/material";
import { CiMenuBurger, CiSearch } from "react-icons/ci";

const Nav = () => {
  return (
    <Grid
      paddingY={2}
      paddingX={5}
      container
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Typography
        variant="h4"
        color="primary"
        fontSize={"20px"}
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          letterSpacing: 2,
        }}
      >
        Zaph Tours
      </Typography>
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        spacing={4}
      >
        <Typography
          letterSpacing={"1.8px"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Destination
        </Typography>
        <Typography
          letterSpacing={"1.8px"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Contact
        </Typography>
      </Grid>
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        spacing={4}
      >
        <Typography
          fontSize={"18px"}
          sx={{
            cursor: "pointer",
          }}
        >
          <CiSearch />
        </Typography>
        <Typography
          fontSize={"18px"}
          sx={{
            cursor: "pointer",
          }}
          fontWeight={"700"}
        >
          <CiMenuBurger />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Nav;

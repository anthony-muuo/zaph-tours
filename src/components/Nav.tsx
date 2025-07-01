import { Grid, Typography } from "@mui/material";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Grid
      paddingY={2}
      paddingX={5}
      container
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Link to="/" className="link">
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
      </Link>
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        spacing={4}
      >
        <Link to="/destination" className="link">
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
        </Link>
        <Link to="/trip" className="link">
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
            Trip Types
          </Typography>
        </Link>
        <Link to="/contacts" className="link">
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
        </Link>
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

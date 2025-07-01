import { Typography, Grid, IconButton } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Grid bgcolor={"black"} color={"white"}>
      <Grid container sx={{ justifyContent: "space-between", padding: 4 }}>
        <Grid>
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
          <Typography>Follow us:</Typography>
          <Grid>
            <IconButton href="#" sx={{ color: "white" }}>
              <FaFacebookF />
            </IconButton>
            <IconButton href="#" sx={{ color: "white" }}>
              <FaTwitter />
            </IconButton>
            <IconButton href="#" sx={{ color: "white" }}>
              <FaInstagram />
            </IconButton>
            <IconButton href="#" sx={{ color: "white" }}>
              <FaLinkedin />
            </IconButton>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            color="primary"
            letterSpacing={"1.6px"}
            mb={1}
          >
            Office Hours
          </Typography>
          <Grid container sx={{ flexDirection: "column", gap: 1 }}>
            <Typography>Mondays: 9:00 AM – 6:00 PM</Typography>
            <Typography>Tuesdays: 9:00 AM – 6:00 PM</Typography>
            <Typography>Wednesday: 9:00 AM – 6:00 PM</Typography>
            <Typography>Thursday: 9:00 AM – 6:00 PM</Typography>
            <Typography>Friday: 9:00 AM – 6:00 PM</Typography>
            <Typography>Saturday: 9:00 AM – 6:00 PM</Typography>
            <Typography>Sunday: 9:00 AM – 12:00 PM</Typography>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            color="primary"
            letterSpacing={"1.6px"}
            mb={1}
          >
            Quick Links
          </Typography>
          <Grid container sx={{ flexDirection: "column", gap: 1 }}>
            <Link to="/destination" className="link">
              <Typography
                textTransform={"capitalize"}
                fontSize={"14px"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  color: "white",
                }}
              >
                Destination
              </Typography>
            </Link>
            <Link to="/trip" className="link">
              <Typography
                textTransform={"capitalize"}
                fontSize={"14px"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  color: "white",
                }}
              >
                Trip Types
              </Typography>
            </Link>
            <Link to="/contacts" className="link">
              <Typography
                textTransform={"capitalize"}
                fontSize={"14px"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  color: "white",
                }}
              >
                Contacts
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Typography color="primary" sx={{ textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Zaph Tours. All rights reserved
      </Typography>
    </Grid>
  );
};

export default Footer;

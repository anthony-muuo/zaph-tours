import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  MdOutlineLocationOn,
  MdOutlineAccessTime,
  MdEmail,
} from "react-icons/md";

const Contacts = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <form>
              <TextField fullWidth label="Name" margin="normal" required />
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                required
              />
              <TextField fullWidth label="Subject" margin="normal" />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                margin="normal"
                required
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>

        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <MdEmail />
              <Typography>contact@zaphtours.com</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <FaPhoneAlt />
              <Typography>+1 (234) 567-890</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <MdOutlineLocationOn />
              <Typography>123 Travel Blvd, Nairobi, Kenya</Typography>
            </Box>

            <Typography variant="subtitle1" gutterBottom>
              Office Hours
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <MdOutlineAccessTime />
              <Typography>Mon–Fri: 9:00 AM – 6:00 PM</Typography>
            </Box>

            <Typography variant="subtitle1" gutterBottom>
              Follow Us
            </Typography>

            <Box>
              <IconButton href="#" color="primary">
                <FaFacebookF />
              </IconButton>
              <IconButton href="#" color="primary">
                <FaTwitter />
              </IconButton>
              <IconButton href="#" color="primary">
                <FaInstagram />
              </IconButton>
              <IconButton href="#" color="primary">
                <FaLinkedin />
              </IconButton>
            </Box>
          </Paper>
        </Grid>

        <Grid>
          <Paper elevation={3}>
            <iframe
              title="Zaph Tours Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.32616810067!2d36.8172449!3d-1.2863891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5b7d4b6e7%3A0x7b80e245fbc0d6e9!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1710000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;

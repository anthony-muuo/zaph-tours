import { Grid, Typography, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane M.",
      image: "JM",
      message:
        "Zaph Tours planned the perfect safari for us! Everything was seamless — from the game drives to the lodges. Kenya has never felt more magical.",
    },
    {
      name: "Anthony M.",
      image: "AM",
      message:
        "An unforgettable adventure! The guides were incredibly knowledgeable and passionate. Zaph Tours is the gold standard in safari travel.",
    },
    {
      name: "Dating Appy",
      image: "DA",
      message:
        "We saw the Big Five in one day! Zaph Tours truly exceeded our expectations. The entire experience was safe, professional, and absolutely thrilling.",
    },
  ];

  return (
    <Grid>
      <Typography
        sx={{
          textAlign: "center",
          padding: "12px",
          fontFamily: `"Georgia", "Times New Roman", serif`,
          fontSize: { xs: "24px", md: "42px" },
        }}
      >
        Testimonials
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontStyle: "italic",
          pb: "3px",
        }}
      >
        Thank you for the reviews, we are proud!
      </Typography>
      <Grid sx={{ display: "flex", gap: "4px" }}>
        {testimonials.map((person, index) => (
          <Grid key={index} padding={"2rem"}>
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                width: 56,
                height: 56,
                fontSize: "1.2rem",
                margin: "10px auto",
              }}
            >
              {person.image}
            </Avatar>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
              “{person.message}”
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              – {person.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Testimonials;

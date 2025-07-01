import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

const Featured = () => {
  const destinations = [
    {
      name: "Mt. Kenya",
      src: "/mountk.jpg",
      description:
        "Explore Kenya’s highest peak, perfect for hiking and mountaineering adventures.",
      price: "Ksh 15,000",
    },
    {
      name: "Mt. Ruwenzori",
      src: "/mtruwe.jpg",
      description:
        "Discover the mystical 'Mountains of the Moon' along the Uganda-Congo border.",
      price: "Ksh 18,000",
    },
    {
      name: "Lake Nakuru",
      src: "/nakuru.jpg",
      description:
        "Famous for flamingos, rhinos, and scenic lake views in a protected park.",
      price: "Ksh 10,000",
    },
    {
      name: "Tsavo National Park",
      src: "tsavo.jpg",
      description:
        "One of Kenya’s largest parks, home to red elephants, lions, and vast wilderness.",
      price: "Ksh 14,000",
    },
    {
      name: "Nairobi National Park",
      src: "/nairobi.jpg",
      description:
        "Wildlife just minutes from the city — lions, giraffes, and more.",
      price: "Ksh 7,000",
    },
    {
      name: "Coastal Kenya",
      src: "/coastal.jpg",
      description:
        "Relax on Kenya’s beautiful beaches like Diani, Watamu, and Malindi.",
      price: "Ksh 20,000",
    },
  ];
  return (
    <Grid sx={{ backgroundColor: "#f9f9f9" }}>
      <Typography
        sx={{
          textAlign: "center",
          padding: "12px",
          fontFamily: `"Georgia", "Times New Roman", serif`,
          fontSize: { xs: "24px", md: "42px" },
        }}
      >
        Featured Destinations
      </Typography>
      <Grid container spacing={4} justifyContent="center" padding={2}>
        {destinations.map((dest, index) => (
          <Grid key={index} sx={{ display: "flex" }}>
            <Card
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image={dest.src}
                alt={dest.name}
                sx={{
                  height: 200,
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {dest.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" my={1}>
                  {dest.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {dest.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Featured;

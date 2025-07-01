import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const tripPackages = [
  {
    title: "Wildlife Safaris",
    images: "/zebra.jpg",
    description:
      "Witness majestic wildlife in their natural habitat with guided safari drives and eco-lodges.",
    pricing: "$2,200 per person (all-inclusive)",
  },
  {
    title: "Eco-Tours",
    images: "/lion.jpg",
    description:
      "Eco-friendly trips promoting sustainability, nature conservation, and immersive green experiences.",
    pricing: "$1,700 per person (carbon neutral)",
  },
  {
    title: "Luxury Vacations",
    images: "/paris.jpg",
    description:
      "Premium experiences including 5-star resorts, private transport, and bespoke itineraries.",
    pricing: "From $5,000 per person",
  },
  {
    title: "Beach Holidays",
    images: "/coastal.jpg",
    description:
      "Relax and rejuvenate on pristine beaches with water sports, seaside dining, and spa sessions.",
    pricing: "$2,200 per person (all-inclusive)",
  },
  {
    title: "Wellness Retreats",
    images: "/tiger.jpg",
    description:
      "Mind-body-soul rejuvenation with yoga, meditation, spa therapies, and organic meals.",
    pricing: "$1,600 per person (3-day retreat)",
  },
  {
    title: "Culinary Tours",
    images: "/kyoto.jpg",
    description:
      "Savor the flavors of the world with guided food tours, cooking classes, and wine tastings.",
    pricing: "$1,400 per person (includes meals)",
  },
];

const TripTypes = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" mb={4}>
        Our Trip Packages
      </Typography>
      <Grid container spacing={4}>
        {tripPackages.map((pkg, index) => (
          <Grid key={index}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={pkg.images}
                alt={`${pkg.title}`}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {pkg.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pkg.description}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                  {pkg.pricing}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" href="#">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TripTypes;

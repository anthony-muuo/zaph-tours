import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const destinations = [
  {
    name: "Bali, Indonesia",
    image: "/bali.jpg",
    description:
      "Experience serene beaches, vibrant culture, and lush jungles.",
    groupPrice: "$1,200",
    individualPrice: "$450",
  },
  {
    name: "Paris, France",
    image: "/paris.jpg",
    description: "The city of lights, love, and world-famous landmarks.",
    groupPrice: "$2,500",
    individualPrice: "$850",
  },
  {
    name: "Kyoto, Japan",
    image: "/kyoto.jpg",
    description: "A blend of tradition, temples, and cherry blossoms.",
    groupPrice: "$2,100",
    individualPrice: "$700",
  },
];

const Destination = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {destinations.map((dest, index) => (
        <Grid key={index}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              height="200"
              image={dest.image}
              alt={dest.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {dest.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dest.description}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Group Price:</strong> {dest.groupPrice}
              </Typography>
              <Typography variant="body1">
                <strong>Individual Price:</strong> {dest.individualPrice}
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
  );
};

export default Destination;

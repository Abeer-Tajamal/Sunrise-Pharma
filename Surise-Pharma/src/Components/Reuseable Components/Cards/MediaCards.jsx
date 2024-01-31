import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MediaCard = ({ image, title, description }) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ backgroundColor: "#f5f5f5", border: "none !important" }}
    >
      <div>
        <CardMedia
          style={{ backgroundColor: "#7FC602", objectFit: "fill" }}
          component="img"
          sx={{ height: 140 }}
          image={image}
          title={title}
        />
      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "#558103", justifyContent: "center" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;

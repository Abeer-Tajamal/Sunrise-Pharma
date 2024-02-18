import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./MediaCards.css";

const MediaCard = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "white" }}>
      <div>
        <CardMedia
          className="card-img"
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
          className="card-title"
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

import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ColorButtons from "../Button/button";

const CustomCard = ({ title, description, buttonText, buttonLink }) => {
  return (
    <>
      <CardContent
        style={{
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" component="div">
          <h3>
            <a
              href={buttonLink}
              style={{ textDecoration: "none", color: "#0d58a6" }}
            >
              {title}
            </a>
          </h3>
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions
        style={{
          justifyContent: "center",
        }}
      >
        <ColorButtons buttonLink={buttonLink} label={buttonText} />
      </CardActions>
    </>
  );
};

export default CustomCard;

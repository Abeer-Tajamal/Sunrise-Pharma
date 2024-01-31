import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
        <Button
          size="small"
          href={buttonLink}
          style={{
            color: "white",
            backgroundColor: "#7fc602",
            border: "2x solid #dbf2f8",
            boxShadow: "0 10px 20px 0 rgba(0,0,0,0.3)",
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </>
  );
};

export default CustomCard;

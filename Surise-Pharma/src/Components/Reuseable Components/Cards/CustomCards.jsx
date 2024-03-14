import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ColorButtons from "../Button/button";
import { Link } from "react-router-dom";

const CustomCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  buttonTarget,
}) => {
  return (
    <>
      <CardContent sx={{ justifyContent: "center", textAlign: "center" }}>
        <Typography variant="h5" component="div">
          <Link to={buttonLink} style={{ textDecoration: "none", color: "#0d58a6" }}>
            {title}
          </Link>
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <ColorButtons buttonTarget={buttonTarget} buttonLink={buttonLink} label={buttonText} />
      </CardActions>
    </>
  );
};

export default CustomCard;

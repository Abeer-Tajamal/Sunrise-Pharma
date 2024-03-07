import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./TopMedia.css";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard() {
  const history = useNavigate();

  return (
    <div className="top-media">
      <Card className="card">
        <CardMedia
          component="img"
          height="350"
          image="./Assets/Account/Account.jpg"
          alt="Paella dish"
        />
        <CardHeader title="We Updated Your Refill Experience" />
        <CardContent>
          <Typography>
            Access your refills and manage prescriptions with our newly
            optimized Patient Portal
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="success"
          onClick={(e) => history("/refill")}
        >
          Get Started
        </Button>
      </Card>
    </div>
  );
}

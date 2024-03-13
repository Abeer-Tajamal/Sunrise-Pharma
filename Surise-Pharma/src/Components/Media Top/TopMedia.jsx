import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./TopMedia.css";
import ColorButtons from "../Reuseable Components/Button/button";

export default function RecipeReviewCard() {
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
        <ColorButtons buttonLink={"/refill"} label={"Get Started"} />
      </Card>
    </div>
  );
}

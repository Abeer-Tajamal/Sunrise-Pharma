import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./OutlinedCard.css";
import CustomCard from "../../Reuseable Components/Cards/CustomCards";

const OutlinedCard = () => {
  const cardProps1 = {
    title: "Refill a Prescription",
    description:
      "We process both new and existing prescriptions conveniently, whether it's in-store, over the phone, or online, ensuring we cater to your needs effectively.",
    buttonText: "Refill Now",
    buttonLink: "/account",
  };

  const cardProps2 = {
    title: "Transfer a Prescription",
    description:
      "Effortlessly shift your prescriptions to our pharmacy by utilizing our uncomplicated and secure online transfer form.",
    buttonText: "Transfer Now",
    buttonLink: "/pharmacy-near-me-orange-ct",
  };

  const cardProps3 = {
    title: "Contact Us",
    description:
      "Drop by our store or contact one of our pharmacy team members. We're here to help and always ready to assist you.",
    buttonText: "Get in touch",
    buttonLink: "/contact",
  };

  return (
    <div className="containerDiv">
      <Box sx={{ maxWidth: 350, boxShadow: "0 10px 20px 0 rgba(0,0,0,0.3)" }}>
        <Card variant="outlined">
          <CustomCard {...cardProps1} />
        </Card>
      </Box>
      <Box sx={{ maxWidth: 350, boxShadow: "0 10px 20px 0 rgba(0,0,0,0.3)" }}>
        <Card variant="outlined">
          <CustomCard {...cardProps2} />
        </Card>
      </Box>
      <Box sx={{ maxWidth: 370, boxShadow: "0 10px 20px 0 rgba(0,0,0,0.3)" }}>
        <Card variant="outlined">
          <CustomCard {...cardProps3} />
        </Card>
      </Box>
    </div>
  );
};

export default OutlinedCard;
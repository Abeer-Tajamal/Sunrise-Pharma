import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./OutlinedCard.css";
import CustomCard from "../../Reuseable Components/Cards/CustomCards";

const cardData = [
  {
    title: "Refill a Prescription",
    description:
      "We process both new and existing prescriptions conveniently, whether it's in-store, over the phone, or online, ensuring we cater to your needs effectively.",
    buttonText: "Refill Now",
    buttonLink: "/account",
  },
  {
    title: "Transfer a Prescription",
    description:
      "Effortlessly shift your prescriptions to our pharmacy by utilizing our uncomplicated and secure online transfer form.",
    buttonText: "Transfer Now",
    buttonLink: "/pharmacy-near-me-orange-ct",
  },
  {
    title: "Contact Us",
    description:
      "Drop by our store or contact one of our pharmacy team members. We're here to help and always ready to assist you.",
    buttonText: "Get in touch",
    buttonLink: "/contact",
  },
];

const OutlinedCard = () => {
  return (
    <div className="containerDiv">
      {cardData.map((cardProps, index) => (
        <Box
          key={index}
          sx={{
            maxWidth: 350,
            margin: 1,
            boxShadow: "0 10px 20px 0 rgba(0,0,0,0.3)",
          }}
        >
          <Card variant="outlined">
            <CustomCard {...cardProps} />
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default OutlinedCard;

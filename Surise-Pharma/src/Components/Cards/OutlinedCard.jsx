import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CustomCard from "../Reuseable Components/Cards/CustomCards"

const OutlinedCard = () => {
  const cardProps1 = {
    title: "Refill a Prescription",
    description: "We fill new and existing prescriptions in-store, by phone and online for your convenience.",
    buttonText: "Refill Now",
    buttonLink: "/refill-page", // Adjust the link as needed
  };

  const cardProps2 = {
    title: "Transfer a Prescription",
    description: "Transfer your prescriptions to our pharmacy using our simple and secure online transfer form.",
    buttonText: "Transfer Now",
    buttonLink: "/transfer-page", // Adjust the link as needed
  };

  const cardProps3 = {
    title: "Contact Us",
    description: "Visit us in store or get in touch with a member of our pharmacy staff. We're always happy to assist you.",
    buttonText: "Get in touch",
    buttonLink: "/contact-page", // Adjust the link as needed
  };

  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card variant="outlined">
        <CustomCard {...cardProps1} />
        <CustomCard {...cardProps2} />
        <CustomCard {...cardProps3} />
      </Card>
    </Box>
  );
};

export default OutlinedCard;
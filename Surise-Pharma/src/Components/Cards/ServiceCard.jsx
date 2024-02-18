import React from "react";
import ServiceCard from "../Reuseable Components/Cards/Media Cards/MediaCards";

const Services = () => {
  const ServiceCard1 = {
    image: "./Assets/Home Page/Welocme to Sunrise Phasrmacy.jpg",
    title: "Learn About Us »",
    description:
      "Sunrise Pharmacy combines high quality products with personalized care. Our staff will be happy to help you with any questions you may have.",
  };

  const ServiceCard2 = {
    image: "./Assets/Home Page/Our Services.jpg",
    title: "Our Services »",
    description:
      "We offer a wide variety of services including conventional prescription filling, medical equipment, medicare open enrollment and much more.",
  };

  const ServiceCard3 = {
    image: "./Assets/Home Page/Health News.jpg",
    title: "Explore Our Health News »",
    description:
      "Check out our weekly health news blog, or subscribe to our newsletter and receive updates on health articles, promotions, specials and much more.",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <ServiceCard {...ServiceCard1} />
      <ServiceCard {...ServiceCard2} />
      <ServiceCard {...ServiceCard3} />
    </div>
  );
};
export default Services;

import ServiceCard from "../Reuseable Components/Cards/Media Cards/MediaCards";
import "./ServiceCard.css";

const Services = () => {
  const ServiceCard1 = {
    image: "./Assets/Home Page/Welocme to Sunrise Phasrmacy.jpg",
    title: "Learn About Us »",
    description:
      "At Sunrise Pharmacy, we blend top-notch products with individualized care. Our team is eager to assist you with any inquiries you might have.",
  };

  const ServiceCard2 = {
    image: "./Assets/Home Page/Our Services.jpg",
    title: "Our Services »",
    description:
      "We provide an extensive range of services, encompassing traditional prescription filling, medical equipment, Medicare open enrollment, and more.",
  };

  const ServiceCard3 = {
    image: "./Assets/Home Page/Health News.jpg",
    title: "Explore Our Health News »",
    description:
      "Explore our weekly health news blog, or sign up for our newsletter to receive updates on health articles, promotions, specials, and more.",
  };

  return (
    <div className="service-card-container">
      <ServiceCard {...ServiceCard1} />
      <ServiceCard {...ServiceCard2} />
      <ServiceCard {...ServiceCard3} />
    </div>
  );
};
export default Services;

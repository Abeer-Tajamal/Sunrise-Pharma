import "./AboutCard.css";
import AboutCard from "../../Reuseable Components/Cards/PaperCards";

const AboutCards = () => {
  const item1 = [
    {
      xs: 12,
      md: 6,
      title: "Free Delivery",
      content: "We'll come to your location.",
    },
    {
      xs: 12,
      md: 6,
      title: "Refill Fast",
      content: "Wait times under 10 minutes.",
    },
  ];

  const item2 = [
    {
      xs: 12,
      md: 6,
      title: "Personalized Care",
      content: "When you make a call, you'll talk to an actual person.",
    },
    {
      xs: 12,
      md: 6,
      title: "Locally Owned",
      content: "Dedicated to the community since 2021.",
    },
  ];

  return (
    <div className="containerCards">
      <AboutCard items={item1} />
      <AboutCard items={item2} />
    </div>
  );
};
export default AboutCards;

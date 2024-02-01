import "./AboutCard.css";
import AboutCard from "../../Reuseable Components/Cards/PaperCards";

const AboutCards = () => {
  const item1 = [
    { xs: 6, md: 6, title: "Free Delivery", content: "We come to you." },
    {
      xs: 6,
      md: 6,
      title: "Refill Fast",
      content: "Wait times less than 10 minutes.",
    },
  ];

  const item2 = [
    {
      xs: 6,
      md: 6,
      title: "Personalized Care",
      content: "When you call, you speak to a person.",
    },
    {
      xs: 6,
      md: 6,
      title: "Locally Owned",
      content: "Serving the community since 2021.",
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

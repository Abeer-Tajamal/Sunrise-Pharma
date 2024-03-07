import "./MediaCard.css";
import MediaCards from "../../Reuseable Components/Cards/Media Cards/MediaCards";

const MediaCard = () => {
  const cardContent1 = {
    image: "./Assets/Home Page/Pill packaging.png",
    title: "Pill Packaging",
    description:
      "Our specialized medication packaging arranges your prescriptions in an organized manner.",
  };

  const cardContent2 = {
    image: "./Assets/Home Page/health-insurance-abstract.jpg",
    title: "Easy Prescription",
    description:
      "We process both new and existing prescriptions conveniently, whether it's in-store, over the phone, or online, ensuring we cater to your needs effectively.",
  };

  const cardContent3 = {
    image: "./Assets/Home Page/Express Delivery.png",
    title: "Express Delivery",
    description:
      "We provide complimentary express local delivery and shipping for your convenience.",
  };

  const cardContent4 = {
    image: "./Assets/Home Page/Medication Savings.png",
    title: "Medication Savings",
    description:
      "Our pharmacists collaborate with you to align benefits and explore financial assistance options.",
  };

  return (
    <div className="containerDivMediaCard">
      <MediaCards {...cardContent1} />
      <MediaCards {...cardContent2} />
      <MediaCards {...cardContent3} />
      <MediaCards {...cardContent4} />
    </div>
  );
};
export default MediaCard;

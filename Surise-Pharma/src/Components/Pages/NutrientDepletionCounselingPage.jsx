import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";
import ColorButtons from "../Reuseable Components/Button/button";

const NutrientDepletionCounselingPage = () => {
  DynamicPageTitle(
    "Nutrient Depletion Counseling - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Services/Nutrient Depletion Counseling.jpg";
  const description =
    "At Sunrise Pharmacy, our dedicated goal is to ensure that you, our valued customer, are experiencing the maximum benefit from the medications we provide.";
  const description4 =
    "If you responded affirmatively to any of these inquiries, you might find value in nutrient depletion counseling.";
  const description5 =
    "While medications effectively assist in symptom management, they may inadvertently deplete crucial nutrients from your body. Luckily, our proficient pharmacy staff is adept at recognizing drug-induced nutrient depletion and offers medication counseling to ensure your medication aligns with your overall well-being rather than working against it.";
  const description6 =
    "Through this initiative, our informed staff will assess your medications, address your queries, and engage in discussions about recommended dietary modifications, suggested vitamins and supplements, and more. If you believe nutrient depletion counseling could benefit you, click the button below to arrange a personal consultation with one of our proficient staff members today.";
  const arrayList = [
    "Are you currently encountering any side effects from the medication you are taking?",
    "Is the medication you're currently taking causing a depletion of essential nutrients?",
    "Are you seeking methods to enhance your overall immunity, health, and well-being?",
    "Are you experiencing difficulty sleeping due to your medication?",
    "Are you feeling consistently low on energy every day?",
  ];

  const description7 =
    "Our pharmacists undergo specialized training to suggest vitamins and supplements that can potentially counteract drug-induced nutrient depletions, contributing to your overall wellness.";
  const description8 =
    "We offer a comprehensive selection of clinically-tested vitamins and supplements, carefully curated by our team, including:";
  const arrayList2 = [
    "Probiotics",
    "Vitamin B",
    "Vitamin C",
    "Vitamin D",
    "Zinc",
    "Elderberry",
    "CoQ10",
    "Fish Oil - Omega 3 Fatty Acids",
    "Melatonin",
    "Magnesium",
    "Multi Vitamins",
    "Calcium",
    "Iron",
    "...and more!",
  ];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Nutrient Depletion Counseling" />
      <MediaRight
        image={image}
        description={description}
        array={arrayList}
        description4={description4}
        description5={description5}
        description6={description6}
      />
      <ColorButtons buttonLink="/contact" label="Contact Us" />
      <MediaRight
        description={description7}
        description2={description8}
        array={arrayList2}
      />
      <Footer />
    </>
  );
};
export default NutrientDepletionCounselingPage;

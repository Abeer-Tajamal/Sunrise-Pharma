import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import "./InsurancePage.css";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const InsurancePage = () => {
  DynamicPageTitle("Sunrise Pharmacy - Your Local Orange Pharmacy");

  const image = "./Assets/Insurance/Insurance.jpg";
  const title = "Insurance";
  const description =
    "We accept most major insurance plans. Our top insurance company partners include:";
  const arrayList = [
    "Husky",
    "Cigna",
    "CVS Caremark",
    "Medicaid",
    "Aetna",
    "AARP",
    "Optum RX",
    "Express Scripts",
  ];

  return (
    <>
      <Address />
      <Navbar />
      <div className="container-media">
        <MediaRight
          image={image}
          title={title}
          description={description}
          array={arrayList}
        />
      </div>
      <Footer />
    </>
  );
};
export default InsurancePage;

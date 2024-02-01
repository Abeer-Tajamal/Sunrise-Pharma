import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import "./InsurancePage.css";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const InsurancePage = () => {
  DynamicPageTitle("Sunrise Pharmacy - Your Local Orange Pharmacy");

  const insuranceDetails = {
    image: "./Assets/Insurance/Insurance.jpg",
    title: "Insurance",
    description:
      "We accept most major insurance plans. Our top insurance company partners include:",
    arrayList: [
      "Husky",
      "Cigna",
      "CVS Caremark",
      "Medicaid",
      "Aetna",
      "AARP",
      "Optum RX",
      "Express Scripts",
    ],
  };

  return (
    <>
      <Home />
      <Address />
      <Navbar />
      <div className="containerMedia">
        <MediaRight {...insuranceDetails} />
      </div>
      <Footer />
    </>
  );
};
export default InsurancePage;

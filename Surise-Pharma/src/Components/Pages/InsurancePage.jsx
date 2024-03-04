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
    "We welcome the majority of major insurance plans, and among our key insurance partners are:";
  const arrayList = [
    "Medicaid",
    "Husky",
    "Aetna",
    "Cigna",
    "AARP",
    "CVS Caremark",
    "Express Scripts",
    "Optum RX",
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

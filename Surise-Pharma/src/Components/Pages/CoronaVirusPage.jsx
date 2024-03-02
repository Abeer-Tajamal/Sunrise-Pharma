import Coronavirus from "../CoronaVirusForm/CoronaVirusForm";
import Address from "../Reuseable Components/Address/Address";
import useDynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const CoronaVirusPage = () => {
  useDynamicPageTitle(
    "Coronavirus Updates & Information - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  return (
    <>
      <Address />
      <Navbar />
      <Coronavirus />
      <Footer />
    </>
  );
};

export default CoronaVirusPage;

import Address from "../Reuseable Components/Address/Address";
import useDynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import Navbar from "../Reuseable Components/NavBar/NavBar";
import TransferPrescription from "../Reuseable Components/TransferPrescription/TransferPrescription";

const TransferAPrescription = () => {
  useDynamicPageTitle(
    "New Patient Form - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  return (
    <>
      <Address />
      <Navbar />
      <TransferPrescription />
      <Footer />
    </>
  );
};

export default TransferAPrescription;

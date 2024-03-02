import Address from "../Reuseable Components/Address/Address";
import useDynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import Navbar from "../Reuseable Components/NavBar/NavBar";
import CenteredHeading from "../Reuseable Components/PageHeader/PageHeader";
import AdditionalService from "../Reuseable Components/Services/AdditionalService/AdditionalService";
import Services from "../Reuseable Components/Services/Services";

const ServicesPage = () => {
  useDynamicPageTitle(
    "Pharmacy Services - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  return (
    <>
      <Address />
      <Navbar />
      <CenteredHeading heading="Pharmacy Services" />
      <Services />
      <CenteredHeading heading="Additional Services" />
      <AdditionalService />
      <Footer />
    </>
  );
};

export default ServicesPage;

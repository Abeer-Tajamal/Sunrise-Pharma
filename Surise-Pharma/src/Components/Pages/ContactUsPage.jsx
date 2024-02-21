import ContactCard from "../Cards/ContactCard/ContactCard";
import GoogleMap from "../Google Map/GoogleMap";
import Address from "../Reuseable Components/Address/Address";
import useDynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import Navbar from "../Reuseable Components/NavBar/NavBar";
import Home from "../StickyHeader/StickyHeader";
const ContactUsPage = () => {
  useDynamicPageTitle(
    "Contact Us - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );
  return (
    <>
      <Home />
      <Address />
      <Navbar />
      <br />
      <ContactCard />
      <GoogleMap />
      <Footer />
    </>
  );
};

export default ContactUsPage;

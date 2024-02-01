import OutlinedCard from "../Cards/OutlinedCard/OutlinedCard";
import GoogleMap from "../Google Map/GoogleMap";
import Address from "../Reuseable Components/Address/Address";
import useDynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import Home from "../StickyHeader/StickyHeader";
const ContactUsPage = () => {
  useDynamicPageTitle(
    "Contact Us - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );
  return (
    <>
      <Home />
      <Address />
      <OutlinedCard />
      <GoogleMap />
      <Footer />
    </>
  );
};

export default ContactUsPage;
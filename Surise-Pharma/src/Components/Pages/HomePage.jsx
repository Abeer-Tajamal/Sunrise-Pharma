import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import Footer from "../Reuseable Components/Footer/Footer";
import NavBar from "../Reuseable Components/NavBar/NavBar";
import OutlinedCard from "../Cards/OutlinedCard/OutlinedCard";
import SimpleSlider from "../Slider/SimpleSlider";
import MediaCard from "../Cards/MediaCard/MediaCard";
import CareBeyondDrugs from "../Care Beyond Drugs/CareBeyondDrugs";
import Testimonals from "../Cards/Testimonial/Testimonial";
import Services from "../Cards/ServiceCard";
import TestimonialHeader from "../Reuseable Components/PageHeader/PageHeader";
import HearFromYou from "../Hear From You/HearFromYou";
import PharmacyInsider from "../Pharmacy Insider/PharmacyInsider";
import TitleText from "../TitleText/TitleText";

const HomePage = () => {
  return (
    <>
      <Home />
      <Address />
      <NavBar />
      <br />
      <SimpleSlider />
      <OutlinedCard />
      <br />
      <TitleText />
      <br />
      <MediaCard />
      <br />
      <PharmacyInsider />
      <CareBeyondDrugs />
      <TestimonialHeader heading="Read Our Patient Reviews" />
      <Testimonals />
      <br />
      <br />
      <Services />
      <br />
      <HearFromYou />
      <Footer />
    </>
  );
};

export default HomePage;

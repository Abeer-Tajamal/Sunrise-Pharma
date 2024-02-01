import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import Footer from "../Reuseable Components/Footer/Footer";
import NavBar from "../Reuseable Components/NavBar/NavBar";
import OutlinedCard from "../Cards/OutlinedCard/OutlinedCard";
import SimpleSlider from "../Slider/SimpleSlider";
import MediaCard from "../Cards/MediaCard/MediaCard";
import Testimonals from "../Cards/Testimonial/Testimonial";
import Services from "../Cards/ServiceCard";
import TestimonialHeader from '../Reuseable Components/PageHeader/PageHeader';

const HomePage = () => {
  return (
    <>
      <Home />
      <Address />
      {/* <NavBar /> */}
      <br />
      <SimpleSlider />
      <br />
      <OutlinedCard />
      <MediaCard />
      <TestimonialHeader heading="Read Our Patient Reviews" />
      <Testimonals />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;

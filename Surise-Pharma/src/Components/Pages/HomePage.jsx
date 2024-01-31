import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import Footer from "../Reuseable Components/Footer/Footer";
import NavBar from "../Reuseable Components/NavBar/NavBar";
import OutlinedCard from "../Cards/OutlinedCard/OutlinedCard";
import SimpleSlider from "../Slider/SimpleSlider";
import MediaCard from "../Cards/MediaCard/MediaCard";
import Testimonals from "../Cards/Testimonial/Testimonial";
import Services from "../Cards/ServiceCard";

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
      <Testimonals />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;

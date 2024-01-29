import Home from "../Home";
import Address from "../Reuseable Components/Address/Address";
import Footer from "../Reuseable Components/Footer/Footer";
import NavBar from "../Reuseable Components/NavBar/NavBar";
import OutlinedCard from "../Cards/OutlinedCard";
import SimpleSlider from "../Slider/SimpleSlider";
import MediaCard from "../Cards/MediaCard" ;
import Testimonals from "../Cards/Testimonial"

const HomePage = () => {
  return (
    <>
      <Home />
      <Address />
      {/* <NavBar /> */}
      <SimpleSlider />
      {/* <OutlinedCard /> */}
      {/* <MediaCard /> */}
      {/* <Testimonals /> */}
      <Footer />
    </>
  );
};

export default HomePage;

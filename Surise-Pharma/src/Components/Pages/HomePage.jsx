import Home from "../Home";
import Address from "../Reuseable Components/Address/Address";
import Footer from "../Reuseable Components/Footer/Footer";
import NavBar from "../Reuseable Components/NavBar/NavBar";
import SimpleSlider from "../Slider/SimpleSlider";

const HomePage = () => {
  return (
    <>
      <Home />
      <Address />
      {/* <NavBar /> */}
      <SimpleSlider />
      <Footer />
    </>
  );
};

export default HomePage;

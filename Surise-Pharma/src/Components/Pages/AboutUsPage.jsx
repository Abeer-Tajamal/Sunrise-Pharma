import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import AboutCards from "../Cards/About Card/AboutCard";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import Footer from "../Reuseable Components/Footer/Footer";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const AboutUsPage = () => {
  DynamicPageTitle(
    "About Our Pharmacy - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/About us/About Us.jpg";
  const description = "Sunrise Pharmacy lives on its tagline ”Care Beyond Drugs” in serving our patients. We provide excellent customer service not only for your prescriptions needs but also for Natural Therapies and Organic Therapies to the Orange, West Haven, Milford, Derby, New Haven and Woodbridge communities.";
  const description2 = "Our staff at Sunrise Pharmacy ensures the efficient free-flowing healthcare process by coordinating with Doctors and Nurses. Let’s join hands for all your healthcare needs.";
  const arrayList = [];

  return (
    <>
      <Home />
      <Address />
      <Navbar />
      <PageHeader heading="About Us" />
      <AboutCards />
      <MediaRight image={image} description={description} description2={description2} array={arrayList} />
      <Footer />
    </>
  );
};

export default AboutUsPage;

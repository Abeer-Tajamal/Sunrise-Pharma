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
  const description =
    "Sunrise Pharmacy embodies the essence of its tagline, 'Care Beyond Drugs,' in catering to our patients. We deliver outstanding customer service, addressing not only your prescription requirements but also extending our expertise to Natural Therapies and Organic Therapies for the Orange, West Haven, Milford, Derby, New Haven, and Woodbridge communities.";
  const description2 =
    "The dedicated staff at Sunrise Pharmacy is committed to ensuring an efficient and free-flowing healthcare process. Through close coordination with doctors and nurses, we strive to provide comprehensive support. Let's join hands and embark on a journey to address all your healthcare needs with care and expertise.";
  const arrayList = [];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="About Us" />
      <AboutCards />
      <MediaRight
        image={image}
        description={description}
        description2={description2}
        array={arrayList}
      />
      <Footer />
    </>
  );
};

export default AboutUsPage;

import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const MedPrePoursPage = () => {
  DynamicPageTitle(
    "Med Pre-Pours - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Services/Med Pre-Pours/Med Pre-Pours.jpg";
  const description =
    "Med Pre-pours stand as a testament to our commitment to your convenience. We go the extra mile by efficiently pre-organizing your medications, sparing you the effort. Our diverse range of services offers multiple avenues to meet this goal, ensuring a hassle-free and tailored experience for your medication needs:";
  const arrayList = [
    "Dispill: Medications organized based on designated time intervals, with each slot distinguished by distinct colors.",
    "Blister Packing: Weekly or monthly blister packs designed for morning, afternoon, evening, or bedtime doses.",
    "Med-Box: Easy-to-open plastic medication boxes with designated days and times.",
  ];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Med Pre-Pours" />
      <MediaRight image={image} description={description} array={arrayList} />
      <Footer />
    </>
  );
};
export default MedPrePoursPage;

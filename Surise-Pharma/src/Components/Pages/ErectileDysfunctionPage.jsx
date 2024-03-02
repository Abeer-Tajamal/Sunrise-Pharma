import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const ErectileDysfunctionPage = () => {
  DynamicPageTitle(
    "Erectile Dysfunction - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image =
    "./Assets/Services/Erectile Dysfunction/Erectile Dysfunction.jpg";
  const description =
    "You can feel comfortable discussing your ED questions and concerns with our pharmacist because we are committed to respecting your privacy with private consultations and secure online refills. Contact us for details or transfer your prescription today.";
  const arrayList = [];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Erectile Dysfunction" />
      <MediaRight array={arrayList} image={image} description={description} />
      <Footer />
    </>
  );
};
export default ErectileDysfunctionPage;

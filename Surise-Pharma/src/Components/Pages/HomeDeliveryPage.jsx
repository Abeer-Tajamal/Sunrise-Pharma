import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const HomeDeliveryPage = () => {
  DynamicPageTitle(
    "Home Delivery - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Services/Home Delivery.png";
  const description =
    "Unable to make it to the pharmacy? No worries. We provide complimentary delivery to the neighboring Orange area for your convenience.";
  const description2 =
    "Additionally, we are able to deliver any over-the-counter items you may need along with your prescription.";
  const description3 =
    "Reach out to us for more information or to arrange your upcoming delivery.";
  const arrayList = [];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Home Delivery" />
      <MediaRight
        array={arrayList}
        image={image}
        description={description}
        description2={description2}
        description3={description3}
      />
      <Footer />
    </>
  );
};
export default HomeDeliveryPage;

import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const LeaderProductsPage = () => {
  DynamicPageTitle(
    "LEADER™ Products - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Services/Leader Producrs/Leader Products.png";
  const description =
    "We provide LEADER™ high-quality products that incorporate identical active ingredients found in national brands but at a more affordable price.";
  const arrayList = [];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="LEADER™ Products" />
      <MediaRight array={arrayList} image={image} description={description} />
      <Footer />
    </>
  );
};
export default LeaderProductsPage;

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
    "We offer LEADER™ high-quality products which contain the same active ingredients as national brands, at a lower cost.";
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

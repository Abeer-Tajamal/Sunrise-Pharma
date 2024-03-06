import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const FreeDeliveryPage = () => {
  DynamicPageTitle(
    "Free Delivery - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Free Delivery/Free Delivery.jpg";
  const description = "Ensure your safety by staying home. With Sunrise Pharmacy, you won't have to endure lines for prescription pickups or drop-offs. We deliver your medications right to your doorstep, making it incredibly convenient for you.";
  const arrayList = [
    "Delivery and Pickup at No Cost.",
    "Delivery prioritized based on the patient's requirements.",
    "Delivery to your location is also an option. Feel free to coordinate the schedule with us at your convenience.",
  ];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Free Delivery" />
      <MediaRight
        image={image}
        description={description}
        array={arrayList}
      />
      <Footer />
    </>
  );
};
export default FreeDeliveryPage;

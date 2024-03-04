import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const HomeDeliveryPage = () => {
  DynamicPageTitle(
    "Medication Synchronization - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image =
    "./Assets/Services/Medicatiorn Synchronization/Medication Synchronization.jpg";
  const description =
    "Do you often encounter difficulties in keeping track of your medication refills and collecting your prescriptions? If your answer is yes, you might find significant benefits in considering medication synchronization. This service ensures a streamlined and coordinated approach to managing your medications, making the process more convenient and efficient for you.";
  const description2 =
    "Medication Synchronization, also known as med sync, is a program available at our pharmacy designed to align your medication refills. This enables you to conveniently collect ALL your medications on a single day each month.";
  const description3 =
    "Engage in a conversation with one of our staff members today to explore the process of enrolling in med sync.";
  const arrayList = [];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Medication Synchronization" />
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

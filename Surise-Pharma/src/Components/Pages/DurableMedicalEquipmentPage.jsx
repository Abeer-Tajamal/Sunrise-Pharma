import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const DurableMedicalEquipmentPage = () => {
  DynamicPageTitle(
    "Durable Medical Equipment - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Services/Medical Equipment.jpg";
  const description =
    "Our pharmacy provides a wide range of medical equipment and supplies.";
  const description2 =
    "Our range of medical equipment encompasses, but is not restricted to:";
  const description4 =
    "Should you require medical equipment, supplies, or have any inquiries, don't hesitate to consult with our staff today. We strive to simplify the process of obtaining the necessary equipment, including handling the billing. We are adept at billing Medicare and most insurance companies, ensuring a seamless experience for you.";
  const arrayList = [
    "Walking aids like canes and walkers are available in our equipment inventory.",
    "Bathroom fixtures like benches are part of our available equipment.",
    "Orthopedic items like back support belts and compression stockings are included in our inventory.",
    "Nebulizers",
  ];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Durable Medical Equipment" />
      <MediaRight
        image={image}
        description={description}
        description2={description2}
        array={arrayList}
        description4={description4}
      />
      <Footer />
    </>
  );
};
export default DurableMedicalEquipmentPage;

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
    "Our pharmacy offers an extensive variety of medical equipment and supplies.";
  const description2 =
    "Our medical equipment may include, but is not limited to:";
  const description4 =
    "If you are in need of any medical equipment or supplies or just have a question, ask a staff member today. Our staff will make it as easy as possible to get the equipment you need, including the billing. We will bill Medicare and most insurance companies.";
  const arrayList = [
    "Equipment to assist walking such as canes and walkers",
    "Bathroom equipment such as benches",
    "Orthopedic supplies such as back support belts and compression stockings",
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

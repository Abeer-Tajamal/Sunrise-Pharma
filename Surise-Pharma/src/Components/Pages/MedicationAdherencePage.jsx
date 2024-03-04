import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const MedicationAdherencePage = () => {
  DynamicPageTitle(
    "Medication Adherence - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image =
    "./Assets/Services/Medication Adherence/Medication Adherence.jpeg";
  const description =
    "Approximately 50 percent or more of medications prescribed for chronic conditions, like high cholesterol and diabetes, are not adhered to as directed.";
  const description2 =
    "Non-adherence to medication can result in deteriorating health conditions, hospitalizations, and even fatalities. Regardless of the reason for medication non-adherence, we have a solution tailored for you. Consult with one of our team members today to discover how we can assist you.";
  const description3 =
    "Inquire with any of our staff today about our pill-packaging service and the steps to get enrolled.";
  const arrayList = [];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Medication Adherence" />
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
export default MedicationAdherencePage;

import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const MedicationTherapyManagementPage = () => {
  DynamicPageTitle(
    "Medication Therapy Management - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image =
    "./Assets/Services/Medication Management/Medication Management.jpg";
  const description =
    "Medication therapy management, otherwise known as MTM, is a term used for a program to help you manage your medications and health conditions.";
  const description4 =
    "If you answered yes to any of these questions, you may benefit from medication therapy management. With this program, our pharmacists will ensure you are getting the most benefit from your medications. In addition, our pharmacists can help you better manage your medications and health conditions, so you can live a healthier life.";
  const description5 =
    "Make an appointment today for a medication therapy management session with one of our pharmacists.";
  const arrayList = [
    "Do you take several medications for several different health conditions?",
    "Are you finding it difficult to manage your health and your medications?",
    "Are you having any side effects from your medications?",
    "Do you have any questions about your medications?",
    "Do you want to know how best to take your medications to get the most from your medications?",
    "Do you take medications that require close monitoring such as medication levels?",
    "Have you been hospitalized recently?",
    "Would you like to know if you are up-to-date on the recommended vaccines?",
    "Would you like to have a complete list of the medications you take for your personal use?",
    "Do you have any concerns about medication costs?",
    "Would you like to receive education on diet and exercise?",
  ];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Medication Therapy Management" />
      <MediaRight
        image={image}
        description={description}
        array={arrayList}
        description4={description4}
        description5={description5}
      />
      <Footer />
    </>
  );
};
export default MedicationTherapyManagementPage;

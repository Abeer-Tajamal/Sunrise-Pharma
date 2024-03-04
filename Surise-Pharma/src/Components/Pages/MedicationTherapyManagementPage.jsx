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
    "Medication Therapy Management, often referred to as MTM, is a program designed to assist you in effectively managing both your medications and health conditions.";
  const description4 =
    "If you responded affirmatively to any of these inquiries, you might find value in our Medication Therapy Management program. Through this initiative, our pharmacists will ensure you derive maximum benefits from your medications. Furthermore, they can assist you in more effectively managing your medications and health conditions, fostering a healthier life for you.";
  const description5 =
    "Make an appointment today for a medication therapy management session with one of our pharmacists.";
  const arrayList = [
    "Are you on multiple medications for various health conditions?",
    "Is it challenging for you to oversee both your health and medication regimen?",
    "Are you experiencing any adverse effects from your medications?",
    "Do you have inquiries regarding your medications?",
    "Would you like guidance on the optimal way to take your medications for maximum effectiveness?",
    "Are you currently using medications that demand careful monitoring, such as medication levels?",
    "Did you undergo hospitalization recently?",
    "Are you interested in finding out if you have received all the recommended vaccines up to the present?",
    "Do you wish to obtain a comprehensive list of the medications you are currently taking for your personal reference?",
    "Do you have any concerns about medication costs?",
    "Would you be interested in receiving guidance on diet and exercise?",
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

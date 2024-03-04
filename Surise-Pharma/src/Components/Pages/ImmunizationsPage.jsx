import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const ImmunizationsPage = () => {
  DynamicPageTitle(
    "Immunizations and Flu Shots - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Services/Immunization/Immunization.jpg";
  const description =
    "In the realm of disease prevention, immunizations play a crucial role. Vaccination not only safeguards you but also those in your vicinity. Our primary emphasis is to assist you and your loved ones in staying current with recommended vaccines. We provide a diverse range of immunizations, and some of the vaccines we offer are detailed below:";
  const description4 =
    "Our proficient staff can readily administer these immunizations right here at the pharmacy. Connect with a staff member today to discuss the range of immunizations we provide.";
  const arrayList = [
    "COVID-19",
    "Flu",
    "Hep B or Hep A/B",
    "HPV",
    "Measles/Mumps/Rubella",
    "Meningococcal",
    "Pneumococcal",
    "Shingles",
    "Tdap or TD",
    "Travel vaccines",
  ];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Immunizations" />
      <MediaRight
        image={image}
        description={description}
        array={arrayList}
        description4={description4}
      />
      <Footer />
    </>
  );
};
export default ImmunizationsPage;

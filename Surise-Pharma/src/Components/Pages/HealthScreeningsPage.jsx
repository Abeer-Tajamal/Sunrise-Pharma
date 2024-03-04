import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const HealthScreeningsPage = () => {
  DynamicPageTitle(
    "Health Screenings - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Services/Health Screening/Health Screening.jpg";
  const description =
    "Looking for a health checkup without visiting the doctor? Take advantage of our onsite health screenings, providing valuable health information without the need for a doctor's visit.";
  const description2 =
    "We provide an array of screenings, including but not limited to the following:";
  const description4 =
    "Our exceptionally skilled staff is well-equipped to conduct these screenings, offering valuable insights into your health, health objectives, and strategies to achieve them. Connect with one of our staff members to explore further details about our health screening services.";
  const arrayList = ["Blood pressure", "Blood glucose (sugar)", "Cholesterol"];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Health Screenings" />
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
export default HealthScreeningsPage;

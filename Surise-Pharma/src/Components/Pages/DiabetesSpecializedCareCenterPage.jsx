import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const DiabetesSpecializedCareCenterPage = () => {
  DynamicPageTitle(
    "Diabetes Specialized Care Center - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  const image = "./Assets/Services/Diabetes Care/Diabetes Care.jpg";
  const description = "We acknowledge the challenges of managing diabetes. Our pharmacy team, extensively trained, specializes in providing support for patients dealing with Type 1, Type 2, and Gestational diabetes.";
  const description2 = "We are here to assist you in comprehending and handling your diabetes through specialized monitoring, medications, and recommendations. Our support enables you to independently maintain a healthy lifestyle with diabetes.";
  const description3 = "Engage with a member of our pharmacy team today to learn more about leading a healthy life with diabetes.";
  const arrayList = [];

  return (
    <>
      <Address />
      <Navbar />
      <PageHeader heading="Diabetes Specialized Care Center" />
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
export default DiabetesSpecializedCareCenterPage;

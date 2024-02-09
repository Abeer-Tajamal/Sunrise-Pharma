import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const DiabetesSpecializedCareCenterPage = () => {
    DynamicPageTitle("Diabetes Specialized Care Center - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const image = "./Assets/Services/Diabetes Care/Diabetes Care.jpg";
    const description = "We understand that managing diabetes can be a challenging task. Our pharmacy team has received extensive training and are specialized in supporting patients with Type 1, Type 2 and Gestational diabetes.";
    const description2 = "We can help you understand and manage your diabetes with specialized monitoring, medications, and recommendations that can help you independently maintain a healthy lifestyle with diabetes.";
    const description3 = "Talk to a member of our pharmacy staff today for more information on living well with diabetes.";
    const arrayList = [];

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Diabetes Specialized Care Center"/>
            <MediaRight array={arrayList} image={image} description={description} description2={description2} description3={description3} />
            <Footer />
        </>
    );
};
export default DiabetesSpecializedCareCenterPage;

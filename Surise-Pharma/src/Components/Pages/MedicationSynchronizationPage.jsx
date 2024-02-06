import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const HomeDeliveryPage = () => {
    DynamicPageTitle("Medication Synchronization - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const deliveryDetails = {
        image: "./Assets/Services/Medicatiorn Synchronization/Medication Synchronization.jpg",
        description:
            "Do you ever find it difficult to keep up with your medication refills and picking up your medications? If you answered yes, you may benefit from medication synchronization.",
        description2:
            "Med Synchronization, also called med sync, is a program we offer here at the pharmacy to help synchronize your medication refills so that you will be able to pick up ALL of your medications on a single day each month.",
        description3:
            "Speak to a staff member today about how we can get you set up on med sync."
    };

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Medication Synchronization"/>
            <div className="containerMedia">
                <MediaRight {...deliveryDetails} />
            </div>
            <Footer />
        </>
    );
};
export default HomeDeliveryPage;

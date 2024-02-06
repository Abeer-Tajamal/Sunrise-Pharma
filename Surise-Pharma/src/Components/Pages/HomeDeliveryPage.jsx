import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const HomeDeliveryPage = () => {
    DynamicPageTitle("Home Delivery - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const deliveryDetails = {
        image: "./Assets/Services/Home Delivery.png",
        description:
            "Don't have time to make it to the pharmacy? No problem. We offer free delivery to the nearby Orange area for your convenience.",
        description2:
            "We can also deliver any OTC items you request along with your prescription.",
        description3:
            "Contact us for details or to schedule your next delivery."
    };

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Home Delivery"/>
            <div className="containerMedia">
                <MediaRight {...deliveryDetails} />
            </div>
            <Footer />
        </>
    );
};
export default HomeDeliveryPage;

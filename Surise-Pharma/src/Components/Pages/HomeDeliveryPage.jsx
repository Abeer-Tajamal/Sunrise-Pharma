import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const HomeDeliveryPage = () => {
    DynamicPageTitle("Home Delivery - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const image = "./Assets/Services/Home Delivery.png";
    const description = "Don't have time to make it to the pharmacy? No problem. We offer free delivery to the nearby Orange area for your convenience.";
    const description2 = "We can also deliver any OTC items you request along with your prescription.";
    const description3 = "Contact us for details or to schedule your next delivery.";
    const arrayList = [];

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Home Delivery"/>
            <MediaRight array={arrayList} image={image} description={description} description2={description2} description3={description3} />
            <Footer />
        </>
    );
};
export default HomeDeliveryPage;

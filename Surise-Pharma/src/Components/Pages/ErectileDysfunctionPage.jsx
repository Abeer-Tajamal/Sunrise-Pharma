import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const ErectileDysfunctionPage = () => {
    DynamicPageTitle("Erectile Dysfunction - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const deliveryDetails = {
        image: "./Assets/Services/Erectile Dysfunction/Erectile Dysfunction.jpg",
        description:
            "You can feel comfortable discussing your ED questions and concerns with our pharmacist because we are committed to respecting your privacy with private consultations and secure online refills. Contact us for details or transfer your prescription today."
    };

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Erectile Dysfunction"/>
            <div className="containerMedia">
                <MediaRight {...deliveryDetails} />
            </div>
            <Footer />
        </>
    );
};
export default ErectileDysfunctionPage;

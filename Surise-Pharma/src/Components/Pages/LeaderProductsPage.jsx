import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const LeaderProductsPage = () => {
    DynamicPageTitle("LEADER™ Products - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const deliveryDetails = {
        image: "./Assets/Services/Leader Producrs/Leader Products.png",
        description:
            "We offer LEADER™ high-quality products which contain the same active ingredients as national brands, at a lower cost."
    };

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="LEADER™ Products"/>
            <div className="containerMedia">
                <MediaRight {...deliveryDetails} />
            </div>
            <Footer />
        </>
    );
};
export default LeaderProductsPage;

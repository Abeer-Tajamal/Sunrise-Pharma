import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const Covid19Page = () => {
    DynamicPageTitle("COVID-19 Testing - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const deliveryDetails = {
        image: "./Assets/Home Page/Covid-19 Testing.jpg",
        description:
            "Do you have symptoms of COVID-19 but no time to go to the doctor? We offer rapid COVID-19 tests.",
        description2:
            "Whenever you feel like you COVID-19, we can be your one-stop shop. Our highly qualified pharmacists can evaluate you, perform the COVID-19 test and make sure you get the right medications.",
        description3:
            "Speak to one of our staff members for more information on our COVID-19 testing."
    };

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="COVID-19 Testing"/>
            <div className="containerMedia">
                <MediaRight {...deliveryDetails} />
            </div>
            <Footer />
        </>
    );
};
export default Covid19Page;

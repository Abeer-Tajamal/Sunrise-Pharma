import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const MedPrePoursPage = () => {
    DynamicPageTitle("Med Pre-Pours - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const image = "./Assets/Services/Med Pre-Pours/Med Pre-Pours.jpg";
    const description = "Med Pre-pours for the convenience of the people. We support you by pre-organizing the medication in a timely fashion so you don't have to. We offer a variety of ways to serve this purpose:";
    const arrayList = [
        "Dispill: Medicines arranged according to a specific time distinguishable from the other time-slot by colors.",
        "Blister Packing: Weekly/Monthly blisters for Morning/Afternoon/Evenings or at Bedtime.",
        "Med-Box: East to open plastic med-boxes with specified days and times.",
    ];

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Med Pre-Pours" />
            <MediaRight image={image} description={description} array={arrayList} />
            <Footer />
        </>
    );
};
export default MedPrePoursPage;

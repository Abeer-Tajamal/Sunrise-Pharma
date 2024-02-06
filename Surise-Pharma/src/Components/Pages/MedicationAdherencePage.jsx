import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const MedicationAdherencePage = () => {
    DynamicPageTitle("Medication Adherence - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const deliveryDetails = {
        image: "./Assets/Services/Medication Adherence/Medication Adherence.jpeg",
        description:
            "An estimated 50 percent or more of medications for chronic conditions, such as high cholesterol and diabetes, are not taken as prescribed.",
        description2:
            "Medication non-adherence can lead to worsening health conditions, hospitalizations and death. Whatever the reason is for medication non-adherence, we have a solution for you. Ask one of our team members how we can help you today.",
        description3:
            "Ask any of our staff today about our pill-packaging service and how you can get signed up."
    };

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Medication Adherence"/>
            <div className="containerMedia">
                <MediaRight {...deliveryDetails} />
            </div>
            <Footer />
        </>
    );
};
export default MedicationAdherencePage;

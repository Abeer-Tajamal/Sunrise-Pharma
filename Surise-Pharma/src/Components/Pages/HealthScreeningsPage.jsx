import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const HealthScreeningsPage = () => {
    DynamicPageTitle("Health Screenings - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const image = "./Assets/Services/Health Screening/Health Screening.jpg";
    const description = "Want to get a health checkup without going to the doctor? We offer onsite health screenings that allow you to get more information on your health without having to make a trip to the doctor.";
    const description2 = "We offer a variety of screenings, including the following:";
    const description4 = "Our highly qualified staff can provide these screenings to give you more information on your health, health goals, and ways to reach those goals. Speak to one of our staff members to learn more about our health screenings."
    const arrayList = [
        "Blood pressure",
        "Blood glucose (sugar)",
        "Cholesterol",
    ];

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Health Screenings" />
            <MediaRight image={image} description={description} description2={description2} array={arrayList} description4={description4} />
            <Footer />
        </>
    );
};
export default HealthScreeningsPage;

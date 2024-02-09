import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";

const ImmunizationsPage = () => {
    DynamicPageTitle("Immunizations and Flu Shots - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const image = "./Assets/Services/Immunization/Immunization.jpg";
    const description = "When it comes to disease prevention, immunizations are key. Getting vaccinated protects you and those around you. Our main focus is to help you and your loved ones stay up-to-date on the recommended vaccines. We offer a variety of immunizations. Some of the vaccinations we offer are listed below:";
    const description4 = "Our highly qualified staff can easily administer these immunizations here at the pharmacy. Speak to a staff member today about the immunizations we offer."
    const arrayList = [
        "COVID-19",
        "Flu",
        "Hep B or Hep A/B",
        "HPV",
        "Measles/Mumps/Rubella",
        "Meningococcal",
        "Pneumococcal",
        "Shingles",
        "Tdap or TD",
        "Travel vaccines",
    ];

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Immunizations" />
            <MediaRight image={image} description={description} array={arrayList} description4={description4} />
            <Footer />
        </>
    );
};
export default ImmunizationsPage;

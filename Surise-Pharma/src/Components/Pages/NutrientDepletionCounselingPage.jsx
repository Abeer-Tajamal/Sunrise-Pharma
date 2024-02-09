import Home from "../StickyHeader/StickyHeader";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import PageHeader from "../Reuseable Components/PageHeader/PageHeader"
import Navbar from "../Reuseable Components/NavBar/NavBar";
import ColorButtons from '../Reuseable Components/Button/button';

const NutrientDepletionCounselingPage = () => {
    DynamicPageTitle("Nutrient Depletion Counseling - Sunrise Pharmacy - Your Local Orange Pharmacy");

    const image = "./Assets/Services/Nutrient Depletion Counseling.jpg";
    const description = "Here at Sunrise Pharmacy, our goal is to ensure you are receiving the maximum benefit from your medications.";
    const description4 = "If you answered yes to any of these questions, you may benefit from nutrient depletion counseling."
    const description5 = "While medications are a great way to help you manage your symptoms, they can also deplete your body of vital nutrients. Fortunately, our expert pharmacy staff is trained in identifying drug-induced nutrient depletion and providing medication counseling to help your medication work with you, not against you.";
    const description6 = "With this program, our knowledgeable staff will evaluate your medications, answer any questions you may have, and discuss suggested diet changes, recommenced vitamins and supplements, and more. If you feel like nutrient depletion counseling is right for you, click the button below to schedule a personal consultation with one of our skilled staff members today.";
    const arrayList = [
        "Are you experiencing side effects from a medication that you are currently taking?",
        "Are you taking a medication that depletes other key nutrients?",
        "Are you looking for ways to boost your overall immunity, health, and wellness?",
        "Are you having trouble sleeping on your medication?",
        "Do you lack energy on a daily basis?",
    ];

    const description7 = "Our pharmacists are also specially trained to recommend vitamins and supplements that may help offset drug induced nutrient depletions and expand your wellness.";
    const description8 = "We carry an extensive line of vitamins and supplements that are clinically-tested and hand-picked by our team, including:";
    const arrayList2 = [
        "Probiotics",
        "Vitamin B",
        "Vitamin C",
        "Vitamin D",
        "Zinc",
        "Elderberry",
        "CoQ10",
        "Fish Oil - Omega 3 Fatty Acids",
        "Melatonin",
        "Magnesium",
        "Multi Vitamins",
        "Calcium",
        "Iron",
        "...and more!"
    ];

    return (
        <>
            <Home />
            <Address />
            <Navbar />
            <PageHeader heading="Nutrient Depletion Counseling" />
            <MediaRight image={image} description={description} array={arrayList} description4={description4} description5={description5} description6={description6} />
            <ColorButtons
                buttonLink="/contact"
                label="Contact Us"
            />
            <MediaRight description={description7} description2={description8} array={arrayList2}/>
            <Footer />
        </>
    );
};
export default NutrientDepletionCounselingPage;

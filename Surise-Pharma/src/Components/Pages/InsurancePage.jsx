import Home from "../Home";
import Address from "../Reuseable Components/Address/Address";
import MediaRight from "../Reuseable Components/Media Right/MediaRight"
import Footer from "../Reuseable Components/Footer/Footer";
import DynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle"

const InsurancePage = () => {

    DynamicPageTitle('Sunrise Pharmacy - Your Local Orange Pharmacy');

    const insuranceDetails = {
        image: "./Assets/Insurance/Insurance.jpg",
        title: "Insurance",
        description: "We accept most major insurance plans. Our top insurance company partners include:"
    }

    return (
        <>
            <Home />
            <Address />
            <MediaRight {...insuranceDetails} />
            <ul>
                <li>Husky</li>
                <li>Cigna</li>
                <li>CVS Caremark</li>
                <li>Medicaid</li>
                <li>Aetna</li>
                <li>AARP</li>
                <li>Optum RX</li>
                <li>Express Scripts</li>
            </ul>
            <Footer />
        </>
    );
}
export default InsurancePage
import Address from "../Reuseable Components/Address/Address";
import useDynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import Navbar from "../Reuseable Components/NavBar/NavBar";
import "./InsurancePage.css"

const PrivacyPolicyPage = () => {
    useDynamicPageTitle(
        "Patient Privacy Policy - Sunrise Pharmacy - Your Local Orange Pharmacy"
    );

    return (
        <>
            <Address />
            <Navbar />
            <div className="privacy-content">
                <p>Please contact your local pharmacy for more information about their privacy policies.</p>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;

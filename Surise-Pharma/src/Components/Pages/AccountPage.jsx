import AddressBar from "../Reuseable Components/Address/Address";
import Navbar from "../Reuseable Components/NavBar/NavBar";
import MediaTop from "../Media Top/TopMedia";
import Footer from "../Reuseable Components/Footer/Footer";
import useDynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import "./InsurancePage.css";

const AccountPage = () => {
  useDynamicPageTitle(
    "My Account - Sunrise Pharmacy - Your Local Orange Pharmacy"
  );

  return (
    <>
      <AddressBar />
      <Navbar />
      <div className="account-header">
        <h1>Quick Refill</h1>
        <p>Refill a prescription with Sunrise Pharmacy</p>
      </div>
      <MediaTop />
      <Footer />
    </>
  );
};

export default AccountPage;

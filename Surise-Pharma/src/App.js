import HomePage from "./Components/Pages/HomePage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import InsurancePage from "./Components/Pages/InsurancePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUsPage from "./Components/Pages/ContactUsPage";
import ServicesPage from "./Components/Pages/ServicesPage";
import AccountPage from "./Components/Pages/AccountPage";
import HomeDeliveryPage from "./Components/Pages/HomeDeliveryPage";
import MedicationSynchronizationPage from "./Components/Pages/MedicationSynchronizationPage";
import MedicationAdherencePage from "./Components/Pages/MedicationAdherencePage";
import LeaderProductsPage from "./Components/Pages/LeaderProductsPage";
import ErectileDysfunctionPage from "./Components/Pages/ErectileDysfunctionPage";
import DiabetesSpecializedCareCenterPage from "./Components/Pages/DiabetesSpecializedCareCenterPage";
import Covid19Page from "./Components/Pages/Covid19Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route excat path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/pharmacy" element={<ServicesPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/home-delivery" element={<HomeDeliveryPage />} />
        <Route path="/medication-synchronization" element={<MedicationSynchronizationPage />} />
        <Route path="/medication-adherence" element={<MedicationAdherencePage />} />
        <Route path="/leader-products" element={<LeaderProductsPage />} />
        <Route path="/erectile-dysfunction" element={<ErectileDysfunctionPage />} />
        <Route path="/diabetes-specialized-care-center" element={<DiabetesSpecializedCareCenterPage />} />
        <Route path="/covid-19-testing" element={<Covid19Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

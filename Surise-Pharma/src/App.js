import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Components/Pages/HomePage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import InsurancePage from "./Components/Pages/InsurancePage";
import ContactUsPage from "./Components/Pages/ContactUsPage";
import ServicesPage from "./Components/Pages/ServicesPage";
import AccountPage from "./Components/Pages/AccountPage";
import HomeDeliveryPage from "./Components/Pages/HomeDeliveryPage";
import MedicationSynchronizationPage from "./Components/Pages/MedicationSynchronizationPage";
import MedicationAdherencePage from "./Components/Pages/MedicationAdherencePage";
import LeaderProductsPage from "./Components/Pages/LeaderProductsPage";
import DiabetesSpecializedCareCenterPage from "./Components/Pages/DiabetesSpecializedCareCenterPage";
// import ErectileDysfunctionPage from "./Components/Pages/ErectileDysfunctionPage";
// import Covid19Page from "./Components/Pages/Covid19Page";
import TemsConditionPage from "./Components/Pages/TermsConditionsPage";
import PrivacyPolicyPage from "./Components/Pages/PrivacyPolicyPage";
import MyForm from "./Components/Reuseable Components/Form/Form";
import CoronaVirusPage from "./Components/Pages/CoronaVirusPage";
import TransferAPrescription from "./Components/Pages/TransferAPrescription";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/contact", element: <ContactUsPage /> },
  { path: "/insurance", element: <InsurancePage /> },
  { path: "/pharmacy", element: <ServicesPage /> },
  { path: "/account", element: <AccountPage /> },
  { path: "/home-delivery", element: <HomeDeliveryPage /> },
  {
    path: "/medication-synchronization",
    element: <MedicationSynchronizationPage />,
  },
  { path: "/medication-adherence", element: <MedicationAdherencePage /> },
  { path: "/leader-products", element: <LeaderProductsPage /> },
  {
    path: "/diabetes-specialized-care-center",
    element: <DiabetesSpecializedCareCenterPage />,
  },
  { path: "/terms-conditions", element: <TemsConditionPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
  { path: "/refill", element: <MyForm /> },
  { path: "/coronavirus", element: <CoronaVirusPage /> },
  { path: "/pharmacy-near-me-orange-ct", element: <TransferAPrescription /> },
  // { path: "/erectile-dysfunction", element: <ErectileDysfunctionPage /> },
  // { path: "/covid-19-testing", element: <Covid19Page /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

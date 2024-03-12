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
import MyForm from "./Components/Reuseable Components/Form/Form";
import CoronaVirusPage from "./Components/Pages/CoronaVirusPage";
import TransferAPrescription from "./Components/Pages/TransferAPrescription";
import ImmunizationsPage from "./Components/Pages/ImmunizationsPage";
import DurableMedicalEquipmentPage from "./Components/Pages/DurableMedicalEquipmentPage";
import MedPrePoursPage from "./Components/Pages/MedPre-PoursPage";
import HealthScreeningsPage from "./Components/Pages/HealthScreeningsPage";
import MedicationTherapyManagementPage from "./Components/Pages/MedicationTherapyManagementPage";
import NutrientDepletionCounselingPage from "./Components/Pages/NutrientDepletionCounselingPage";
import FreeDeliveryPage from "./Components/Pages/FreeDeliveryPage";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/contact", element: <ContactUsPage /> },
  { path: "/insurance", element: <InsurancePage /> },
  { path: "/pharmacy", element: <ServicesPage /> },
  { path: "/account", element: <AccountPage /> },
  { path: "/home-delivery", element: <HomeDeliveryPage /> },
  { path: "/medication-synchronization", element: <MedicationSynchronizationPage /> },
  { path: "/medication-adherence", element: <MedicationAdherencePage /> },
  { path: "/leader-products", element: <LeaderProductsPage /> },
  { path: "/diabetes-specialized-care-center", element: <DiabetesSpecializedCareCenterPage /> },
  { path: "/refill", element: <MyForm /> },
  { path: "/vaccines", element: <CoronaVirusPage /> },
  { path: "/pharmacy-near-me-orange-ct", element: <TransferAPrescription /> },
  { path: "/immunizations", element: <ImmunizationsPage /> },
  { path: "/durable-medical-equipment", element: <DurableMedicalEquipmentPage /> },
  { path: "/med-pre-pours", element: <MedPrePoursPage /> },
  { path: "/health-screenings", element: <HealthScreeningsPage /> },
  { path: "/medication-therapy-management", element: <MedicationTherapyManagementPage /> },
  { path: "/nutrient-depletion-counseling", element: <NutrientDepletionCounselingPage /> },
  { path: "/free-delivery", element: <FreeDeliveryPage /> },
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
import HomePage from "./Components/Pages/HomePage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import InsurancePage from "./Components/Pages/InsurancePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUsPage from "./Components/Pages/ContactUsPage";
import ServicesPage from "./Components/Pages/ServicesPage";
import AccountPage from "./Components/Pages/AccountPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

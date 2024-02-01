import HomePage from "./Components/Pages/HomePage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import InsurancePage from "./Components/Pages/InsurancePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUsPage from "./Components/Pages/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route excat path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

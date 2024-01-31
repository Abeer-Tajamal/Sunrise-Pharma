import HomePage from "./Components/Pages/HomePage";
import AboutUsPage from "./Components/Pages/AboutUsPage";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route excat path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

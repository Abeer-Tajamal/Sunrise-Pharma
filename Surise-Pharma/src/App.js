import HomePage from "./Components/Pages/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route excat path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

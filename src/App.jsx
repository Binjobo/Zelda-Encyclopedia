import { Route, Routes } from "react-router-dom";
import MasterSearch from "./components/MasterSearch";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";
import CreaturesPage from "../src/pages/Category/CreaturesPage";
import EquipmentPage from "../src/pages/Category/EquipmentPage";
import MaterialsPage from "../src/pages/Category/MaterialsPage";
import MonstersPage from "../src/pages/Category/MonstersPage";
import TreasurePage from "../src/pages/Category/TreasurePage";

const App = () => {
  return (
    <>
      <div className="app">
        <h1>Zelda Wikipage</h1>
      </div>
      <MasterSearch />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatures" element={<CreaturesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/monsters" element={<MonstersPage />} />
        <Route path="/treasure" element={<TreasurePage />} />
      </Routes>
      <HomePage />
    </>
  );
};

export default App;

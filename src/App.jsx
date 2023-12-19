import { Route, Routes } from "react-router-dom";
import MasterSearch from "./components/MasterSearch";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";
import CreaturesPage from "./pages/Categories/Creatures/CreaturesPage";
import EquipmentPage from "./pages/Categories/Equipment/EquipmentPage";
import MaterialsPage from "./pages/Categories/Materials/MaterialsPage";
import MonstersPage from "./pages/Categories/Monsters/MonstersPage";
import TreasurePage from "./pages/Categories/Treasure/TreasurePage";
import "./App.css";

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

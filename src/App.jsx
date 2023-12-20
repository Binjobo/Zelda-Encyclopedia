import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";
import CreaturesPage from "./pages/Categories/Creatures/CreaturesPage";
import EquipmentPage from "./pages/Categories/Equipment/EquipmentPage";
import MaterialsPage from "./pages/Categories/Materials/MaterialsPage";
import MonstersPage from "./pages/Categories/Monsters/MonstersPage";
import TreasurePage from "./pages/Categories/Treasure/TreasurePage";
import FavouritesPage from "./pages/Favourite/FavouritesPage";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <h1>Zelda Wikipage</h1>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatures" element={<CreaturesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/monsters" element={<MonstersPage />} />
        <Route path="/treasure" element={<TreasurePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
};

export default App;

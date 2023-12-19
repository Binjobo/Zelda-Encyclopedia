import { useEffect, useState } from "react";
import TreasureCard from "./TreasureCard";

const TreasurePage = () => {
  const [treasures, setTreasures] = useState([]);

  const URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure";

  const searchTreasures = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTreasures(data.data);
  };

  useEffect(() => {
    searchTreasures();
  }, []);

  treasures.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <h1>All Treasures</h1>

      <div className="allSearch">
        {treasures.map((treasure) => (
          <TreasureCard key={treasure.id} treasure={treasure} />
        ))}
      </div>
    </>
  );
};

export default TreasurePage;

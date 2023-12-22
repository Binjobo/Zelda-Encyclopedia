import { useEffect, useState } from "react";
import CreatureCard from "./CreatureCard";

const CreaturePage = () => {
  const [creatures, setCreatures] = useState([]);

  const URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures";

  const searchCreatures = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCreatures(data.data);
  };

  useEffect(() => {
    searchCreatures();
  }, []);

  // Sort creatures alphabetically by name
  creatures.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <h1>All Creatures</h1>

      <div className="allSearch">
        {creatures.map((creature) => (
          <CreatureCard key={creature.id} creature={creature} />
        ))}
      </div>
    </>
  );
};

export default CreaturePage;

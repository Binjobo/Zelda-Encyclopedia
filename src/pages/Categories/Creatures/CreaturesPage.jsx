import { useEffect, useState } from "react";
import CreatureCard from "./CreatureCard";

const CreaturePage = () => {
  const [creatures, setCreatures] = useState([]);

  const URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures";

  const searchCreatures = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data.data);
    setCreatures(data.data);
  };

  useEffect(() => {
    searchCreatures();
  }, []);

  return (
    <>
      <h1>All Creatures</h1>

      <div className="monsterSearch">
        {creatures.map((creature) => (
          <CreatureCard key={creature.id} creature={creature} />
        ))}
      </div>
    </>
  );
};

export default CreaturePage;

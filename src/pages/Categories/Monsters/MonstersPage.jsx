import { useEffect, useState } from "react";
import MonsterCard from "./MonsterCard";

const MonsterPage = () => {
  const [monsters, setMonsters] = useState([]);

  const URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";

  const searchMonsters = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setMonsters(data.data);
  };

  useEffect(() => {
    searchMonsters();
  }, []);

  monsters.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <h1>All Monsters</h1>

      <div className="allSearch">
        {monsters.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} />
        ))}
      </div>
    </>
  );
};

export default MonsterPage;

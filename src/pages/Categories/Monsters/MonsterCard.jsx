import { useState } from "react";
import MonsterInfo from "./MonsterInfo";

const MonsterCard = ({ monster }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [monsterInfo, setMonsterInfo] = useState([]);

  const searchZeldaMonster = async (entryMonster) => {
    const response = await fetch(`${URL}${entryMonster}`);
    const data = await response.json();
    setMonsterInfo(data.data);
  };

  const handleClick = () => {
    searchZeldaMonster(monster.id);
  };
  return (
    <>
      <div>
        <p onClick={handleClick}>{monster.name}</p>
      </div>
      <div className="searchResult">
        {Object.keys(monsterInfo).length > 0 && (
          <MonsterInfo info={monsterInfo} />
        )}
      </div>
    </>
  );
};

export default MonsterCard;

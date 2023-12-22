import { useState } from "react";
import MonsterInfo from "./MonsterInfo";

const MonsterCard = ({ monster }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [monsterInfo, setMonsterInfo] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(false); // New state variable added

  const searchZeldaMonster = async (entryMonster) => {
    const response = await fetch(`${URL}${entryMonster}`);
    const data = await response.json();
    setMonsterInfo(data.data);
    setIsInfoVisible(true); // Added to show the equipment info when data is received
  };

  const handleClick = () => {
    if (!isInfoVisible) {
      searchZeldaMonster(monster.id);
    } else {
      setIsInfoVisible(false);
    }
  };

  return (
    <>
      <div>
        <p onClick={handleClick}>{monster.name}</p>
      </div>
      <div className="searchResult">
        {isInfoVisible && <MonsterInfo info={monsterInfo} />}
        <hr />
      </div>
    </>
  );
};

export default MonsterCard;

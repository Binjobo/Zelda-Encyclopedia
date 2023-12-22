import { useState } from "react";
import CreaturesInfo from "./CreaturesInfo";

const CreatureCard = ({ creature }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [creatureInfo, setCreatureInfo] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(false); // New state variable added

  const searchZeldaCreature = async (entryCreature) => {
    const response = await fetch(`${URL}${entryCreature}`);
    const data = await response.json();
    setCreatureInfo(data.data);
    setIsInfoVisible(true); // Added to show the creature info when data is received
  };

  const handleClick = () => {
    if (!isInfoVisible) {
      searchZeldaCreature(creature.id);
    } else {
      setIsInfoVisible(false);
    }
  };

  return (
    <>
      <div>
        <p onClick={handleClick}>{creature.name}</p>
      </div>
      <div className="searchResult">
        {isInfoVisible && <CreaturesInfo info={creatureInfo} />}
        <hr />
      </div>
    </>
  );
};

export default CreatureCard;

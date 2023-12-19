import { useState } from "react";
import CreaturesInfo from "./CreaturesInfo";
// import { NavLink } from "react-router-dom";

const CreatureCard = ({ creature }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [creatureInfo, setCreatureInfo] = useState([]);
  //   const [searchCreatureTerm, setSearchCreatureTerm] = useState("");

  const searchZeldaCreature = async (entryCreature) => {
    const response = await fetch(`${URL}${entryCreature}`);
    const data = await response.json();
    setCreatureInfo(data.data);
  };

  const handleClick = () => {
    // console.log("clicked");
    // searchZeldaCreature(searchCreatureTerm);
    searchZeldaCreature(creature.id);
  };
  return (
    <>
      <div>
        <p onClick={handleClick}>{creature.name}</p>
      </div>
      <div className="searchResult">
        {Object.keys(creatureInfo).length > 0 && (
          <CreaturesInfo info={creatureInfo} />
        )}
      </div>
    </>
  );
};

export default CreatureCard;

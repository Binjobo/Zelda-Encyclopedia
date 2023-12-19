import { useState } from "react";
import CreaturesInfo from "./CreaturesInfo";
// import { NavLink } from "react-router-dom";

const CreatureCard = ({ creature }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [creatureInfo, setCreatureInfo] = useState([]);
  //   const [searchCreatureTerm, setSearchCreatureTerm] = useState("");
  const [isInfoVisible, setIsInfoVisible] = useState(false); // New state variable added

  const searchZeldaCreature = async (entryCreature) => {
    const response = await fetch(`${URL}${entryCreature}`);
    const data = await response.json();
    setCreatureInfo(data.data);
    setIsInfoVisible(true); // Added to show the equipment info when data is received
  };

  // //previous code
  // const handleClick = () => {
  //   // console.log("clicked");
  //   // searchZeldaCreature(searchCreatureTerm);
  //   searchZeldaCreature(creature.id);
  // };
  // return (
  //   <>
  //     <div>
  //       <p onClick={handleClick}>{creature.name}</p>
  //     </div>
  //     <div className="searchResult">
  //       {Object.keys(creatureInfo).length > 0 && (
  //         <CreaturesInfo info={creatureInfo} />
  //       )}
  //     </div>
  //   </>
  // );

  const handleClick = () => {
    if (!isInfoVisible) {
      searchZeldaCreature(creature.id);
    } else {
      setIsInfoVisible(false);
    }
  };

  // const toggleInfoVisibility = () => {
  //   setIsInfoVisible((prevIsInfoVisible) => !prevIsInfoVisible);
  // };

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

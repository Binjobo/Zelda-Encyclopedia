import { useState } from "react";
import TreasureInfo from "./TreasureInfo";

const TreasureCard = ({ treasure }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [treasureInfo, setTreasureInfo] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(false); // New state variable added

  const searchZeldaTreasure = async (entryTreasure) => {
    const response = await fetch(`${URL}${entryTreasure}`);
    const data = await response.json();
    setTreasureInfo(data.data);
    setIsInfoVisible(true); // Added to show the equipment info when data is received
  };

  // //previous code
  // const handleClick = () => {
  //   searchZeldaTreasure(treasure.id);
  // };
  // return (
  //   <>
  //     <div>
  //       <p onClick={handleClick}>{treasure.name}</p>
  //     </div>
  //     <div className="searchResult">
  //       {Object.keys(treasureInfo).length > 0 && (
  //         <TreasureInfo info={treasureInfo} />
  //       )}
  //     </div>
  //   </>
  // );

  const handleClick = () => {
    if (!isInfoVisible) {
      searchZeldaTreasure(treasure.id);
    } else {
      setIsInfoVisible(false);
    }
  };

  return (
    <>
      <div>
        <p onClick={handleClick}>{treasure.name}</p>
      </div>
      <div className="searchResult">
        {isInfoVisible && <TreasureInfo info={treasureInfo} />}
        <hr />
      </div>
    </>
  );
};

export default TreasureCard;

import { useState } from "react";
import TreasureInfo from "./TreasureInfo";

const TreasureCard = ({ treasure }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [treasureInfo, setTreasureInfo] = useState([]);

  const searchZeldaTreasure = async (entryTreasure) => {
    const response = await fetch(`${URL}${entryTreasure}`);
    const data = await response.json();
    setTreasureInfo(data.data);
  };

  const handleClick = () => {
    searchZeldaTreasure(treasure.id);
  };
  return (
    <>
      <div>
        <p onClick={handleClick}>{treasure.name}</p>
      </div>
      <div className="searchResult">
        {Object.keys(treasureInfo).length > 0 && (
          <TreasureInfo info={treasureInfo} />
        )}
      </div>
    </>
  );
};

export default TreasureCard;

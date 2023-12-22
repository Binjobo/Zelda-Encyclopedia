import { useState } from "react";
import MaterialInfo from "./MaterialInfo";

const MaterialCard = ({ material }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [materialInfo, setMaterialInfo] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const searchZeldaMaterial = async (entryMaterial) => {
    const response = await fetch(`${URL}${entryMaterial}`);
    const data = await response.json();
    setMaterialInfo(data.data);
    setIsInfoVisible(true);
  };

  const handleClick = () => {
    if (!isInfoVisible) {
      searchZeldaMaterial(material.id);
    } else {
      setIsInfoVisible(false);
    }
  };

  return (
    <>
      <div>
        <p onClick={handleClick}>{material.name}</p>
      </div>
      <div className="searchResult">
        {isInfoVisible && <MaterialInfo info={materialInfo} />}
        <hr />
      </div>
    </>
  );
};

export default MaterialCard;

import { useState } from "react";
import MaterialInfo from "./MaterialInfo";

const MaterialCard = ({ material }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [materialInfo, setMaterialInfo] = useState([]);

  const searchZeldaMaterial = async (entryMaterial) => {
    const response = await fetch(`${URL}${entryMaterial}`);
    const data = await response.json();
    setMaterialInfo(data.data);
  };

  const handleClick = () => {
    searchZeldaMaterial(material.id);
  };
  return (
    <>
      <div>
        <p onClick={handleClick}>{material.name}</p>
      </div>
      <div className="searchResult">
        {Object.keys(materialInfo).length > 0 && (
          <MaterialInfo info={materialInfo} />
        )}
      </div>
    </>
  );
};

export default MaterialCard;

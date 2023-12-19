import { useState } from "react";
import EquipmentInfo from "./EquipmentInfo";

const EquipmentCard = ({ equipment }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [equipmentInfo, setEquipmentInfo] = useState([]);

  const searchZeldaEquipment = async (entryEquipment) => {
    const response = await fetch(`${URL}${entryEquipment}`);
    const data = await response.json();
    setEquipmentInfo(data.data);
  };

  const handleClick = () => {
    searchZeldaEquipment(equipment.id);
  };
  return (
    <>
      <div>
        <p onClick={handleClick}>{equipment.name}</p>
      </div>
      <div className="searchResult">
        {Object.keys(equipmentInfo).length > 0 && (
          <EquipmentInfo info={equipmentInfo} />
        )}
      </div>
    </>
  );
};

export default EquipmentCard;

import { useState } from "react";
import EquipmentInfo from "./EquipmentInfo";

const EquipmentCard = ({ equipment }) => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [equipmentInfo, setEquipmentInfo] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(false); // New state variable added

  const searchZeldaEquipment = async (entryEquipment) => {
    const response = await fetch(`${URL}${entryEquipment}`);
    const data = await response.json();
    setEquipmentInfo(data.data);
    setIsInfoVisible(true); // Added to show the equipment info when data is received
  };

  const handleClick = () => {
    if (!isInfoVisible) {
      searchZeldaEquipment(equipment.id);
    } else {
      setIsInfoVisible(false);
    }
  };

  return (
    <>
      <div>
        <p onClick={handleClick}>{equipment.name}</p>
      </div>
      <div className="searchResult">
        {isInfoVisible && <EquipmentInfo info={equipmentInfo} />}
        <hr />
      </div>
    </>
  );
};

export default EquipmentCard;

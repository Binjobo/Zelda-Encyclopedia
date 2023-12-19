import { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";

const EquipmentPage = () => {
  const [equipments, setEquipments] = useState([]);

  const URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment";

  const searchEquipments = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setEquipments(data.data);
  };

  useEffect(() => {
    searchEquipments();
  }, []);

  equipments.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <h1>All Equipments</h1>

      <div className="allSearch">
        {equipments.map((equipment) => (
          <EquipmentCard key={equipment.id} equipment={equipment} />
        ))}
      </div>
    </>
  );
};

export default EquipmentPage;

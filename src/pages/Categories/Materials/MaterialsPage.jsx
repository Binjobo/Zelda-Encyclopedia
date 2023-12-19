import { useEffect, useState } from "react";
import MaterialCard from "./MaterialCard";

const MaterialsPage = () => {
  const [materials, setMaterials] = useState([]);

  const URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials";

  const searchMaterials = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setMaterials(data.data);
  };

  useEffect(() => {
    searchMaterials();
  }, []);

  return (
    <>
      <h1>All Materials</h1>

      <div className="allSearch">
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </>
  );
};

export default MaterialsPage;

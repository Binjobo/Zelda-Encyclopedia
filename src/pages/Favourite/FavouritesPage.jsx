import { useEffect, useState } from "react";

const token =
  "pat25EyzKvJoj1BUU.0a96356610f1b48c626f505d70f23c1e9552fa55d668dd86fccc7022be45d6e2";

export default function Airtable() {
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://api.airtable.com/v0/appLljWmxo7jCt4Z0/Favourites/";

      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setFavItems(data.records);
    })();
  }, []);

  const handleCreate = async () => {
    const data = {
      fields: {
        Locations: "PrincessNecluda SeaLanayru Sea",
        Category: "creatures",
        Name: "armored porgy",
        Description:
          "This porgy's body is covered in armor-hard scales. The compounds in its scales, when cooked into a dish, fortify your bones and temporarily boost your defense.",
        Image:
          "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/armored_porgy/image",
      },
    };

    const url = "https://api.airtable.com/v0/appLljWmxo7jCt4Z0/Favourites/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    setFavItems([jsonData, ...favItems]);
  };

  const handleDelete = async () => {
    const airtableId = "recqWEHUgakfPBHP3";
    const url = `https://api.airtable.com/v0/appLljWmxo7jCt4Z0/Favourites/${airtableId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonData = await response.json();
    setFavItems(favItems.filter((p) => p.id !== jsonData.id));
  };

  return (
    <>
      <h2>Airtable</h2>
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleDelete}>Delete</button>
      <pre>{JSON.stringify(favItems, null, 2)}</pre>
    </>
  );
}

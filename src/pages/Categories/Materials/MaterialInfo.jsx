import { useState } from "react";

const token =
  "pat25EyzKvJoj1BUU.0a96356610f1b48c626f505d70f23c1e9552fa55d668dd86fccc7022be45d6e2";

const MaterialInfo = ({ info }) => {
  const [favItems, setFavItems] = useState([]);

  const addToFavourites = async () => {
    const data = {
      fields: {
        Locations: info.common_locations?.toString(),
        Category: info.category?.toString(),
        Name: info.name,
        "Item Drops": info.drops?.toString(),
        Description: info.description?.toString(),
        Image: info.image,
      },
    };

    // console.log(JSON.stringify(data));

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

    // Show pop-up message
    window.alert("Added to Favourites!");
  };

  return (
    <div className="info">
      <div className="name">
        <h2>Name</h2>
        <p>{info.name}</p>
      </div>

      <div className="category">
        <h2>Category</h2>
        <p>{info.category}</p>
      </div>

      <div className="locations">
        <h2>Locations</h2>
        <p>{info.common_locations}</p>
      </div>

      <div className="description">
        <h2>Description</h2>
        <p>{info.description}</p>
      </div>

      <div className="drops">
        <h2>Items Drops</h2>
        <p>{info.drops}</p>
      </div>

      <div className="picture">
        <h2>Image</h2>
        <img
          src={
            info.image !== "N/A"
              ? info.image
              : "https://via.placeholder.com/200"
          }
          alt={info.name}
        />
      </div>

      <div className="favourites">
        <button className="favouritesButton" onClick={addToFavourites}>
          Add to Favourites
        </button>
      </div>
    </div>
  );
};

export default MaterialInfo;

import { useEffect, useState } from "react";
import FavoriteItemInfo from "./FavoriteItemInfo";
// import ResultInfo from "../Home/ResultInfo";

const token =
  "pat25EyzKvJoj1BUU.0a96356610f1b48c626f505d70f23c1e9552fa55d668dd86fccc7022be45d6e2";

export default function FavouritesPage() {
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

  const handleDelete = async (itemId) => {
    // const itemId = "reckPIk61xqZt1AHe";
    const url = `https://api.airtable.com/v0/appLljWmxo7jCt4Z0/Favourites/${itemId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // const jsonData = await response.json();
    // setFavItems(favItems.filter((p) => p.id !== jsonData.id));

    //from chatGPT (dunno why it works)
    if (response.ok) {
      // Remove the deleted item from the state
      setFavItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    }
  };

  console.log(favItems);

  return (
    <>
      {favItems.map((item) => (
        <FavoriteItemInfo
          key={item.id}
          info={item.fields}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </>
  );
}

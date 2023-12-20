import { useState } from "react";
import SearchIcon from "../../components/searchIcon.svg";
import ResultInfo from "./ResultInfo";

const MasterSearch = () => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [itemInfo, setItemInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // new code
  const [favorites, setFavorites] = useState([]);

  const searchZeldaItem = async (entryItem) => {
    const response = await fetch(`${URL}${entryItem}`);
    const data = await response.json();
    setItemInfo(data.data);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchZeldaItem(searchTerm);
  };

  // new code
  const addToFavorites = () => {
    // Check if the item is already in favorites to avoid duplicates
    if (!favorites.some((fav) => fav.name === itemInfo.name)) {
      setFavorites([...favorites, itemInfo]);
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Exact Name (e.g. silver lynel)"
          value={searchTerm}
          onChange={handleInput}
          spellCheck="false"
        />
        <button type="submit">
          <img className="searchIcon" src={SearchIcon} alt="search icon" />
        </button>
      </form>

      {/* <div className="searchResult">
        {Object.keys(itemInfo).length > 0 && <ResultInfo info={itemInfo} />}
      </div> */}

      {/* new code */}
      <div className="searchResult">
        {Object.keys(itemInfo).length > 0 && (
          <>
            <ResultInfo info={itemInfo} />
            <button className="addToFavButton" onClick={addToFavorites}>
              Add to Favourites
            </button>
          </>
        )}
      </div>

      <div className="addToFav">
        <hr className="space" />
        <h1>Favourite items</h1>
        <ul>
          {favorites.map((fav) => (
            <li key={fav.name}>{fav.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MasterSearch;

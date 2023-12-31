import { useState } from "react";
import SearchIcon from "../../components/searchIcon.svg";
import ResultInfo from "./ResultInfo";

const MasterSearch = () => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [itemInfo, setItemInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favItems, setFavItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchZeldaItem = async (entryItem) => {
    const response = await fetch(`${URL}${entryItem}`);
    const data = await response.json();
    setItemInfo(data.data);
    console.log(data.data);
    if (Object.keys(data.data).length === 0) {
      setErrorMessage("Invalid Search Name");
    } else {
      setItemInfo(data.data);
    }
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    await searchZeldaItem(searchTerm);
  };

  const handleAddToFavorites = (newItem) => {
    setFavItems([newItem, ...favItems]);
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

      <div className="searchResult">
        {Object.keys(itemInfo).length > 0 && (
          <ResultInfo
            info={itemInfo}
            favItems={favItems}
            setFavItems={setFavItems}
            onAddToFavorites={handleAddToFavorites}
          />
        )}
      </div>
      <p className="errorMessage">{errorMessage}</p>
    </>
  );
};

export default MasterSearch;

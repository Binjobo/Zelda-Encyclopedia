import { useState } from "react";
// import { useEffect } from "react";
import SearchIcon from "./searchIcon.svg";
import ResultInfo from "./ResultInfo";

const MasterSearch = () => {
  const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

  const [itemInfo, setItemInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchZeldaItem = async (entryItem) => {
    const response = await fetch(`${URL}${entryItem}`);
    const data = await response.json();
    setItemInfo(data.data);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    searchZeldaItem(searchTerm);
  };

  return (
    <>
      <div className="search">
        <input
          placeholder="Enter Exact Name"
          value={searchTerm}
          onChange={handleInput}
        ></input>
        <img
          className="searchIcon"
          src={SearchIcon}
          alt="search icon"
          onClick={handleClick}
        ></img>
      </div>

      <div className="searchResult">
        {Object.keys(itemInfo).length > 0 && <ResultInfo info={itemInfo} />}
      </div>
    </>
  );
};

export default MasterSearch;

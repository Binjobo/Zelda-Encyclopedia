import { useState } from "react";
// import { useEffect } from "react";
import SearchIcon from "./searchIcon.svg";
import ResultInfo from "./ResultInfo";

const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";

const App = () => {
  const [itemInfo, setItemInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchZeldaItem = async (entryItem) => {
    const response = await fetch(`${URL}${entryItem}`);
    const data = await response.json();
    // console.log(data.data);
    setItemInfo(data.data);
  };

  // useEffect(() => {
  //   searchZeldaItem();
  // }, []);

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    searchZeldaItem(searchTerm);
  };

  return (
    <>
      <div className="app">
        <h1>Zelda Wikipage</h1>
      </div>

      <div className="search">
        <input
          placeholder="Search item"
          value={searchTerm}
          onChange={handleInput}
        ></input>
        <img src={SearchIcon} alt="search icon" onClick={handleClick}></img>
      </div>

      {/* <div className="searchResult">
        {itemInfo.map((info) => (
          <ResultInfo key={info.id} info={info} />
        ))}
      </div> */}

      <div className="searchResult">
        {Object.keys(itemInfo).length > 0 && <ResultInfo info={itemInfo} />}
      </div>
    </>
  );
};

export default App;

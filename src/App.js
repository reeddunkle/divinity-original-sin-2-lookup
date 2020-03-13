import React, { useEffect, useState } from "react";
import "./styles.css";
import { SearchResults } from "./components";
import { searchCures } from "./util";

import SKILLS from "./data/skills.json";
import STATUS_EFFECTS from "./data/statusEffects.json";

export default function App() {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [cureResults, setCureResults] = useState([]);

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setData({
      skills: SKILLS,
      statusEffects: STATUS_EFFECTS
    });
  }, []);

  useEffect(() => {
    const cureResults =
      searchValue.length > 2
        ? searchCures(searchValue.toLowerCase(), data)
        : [];
    setCureResults(cureResults);
  }, [data, searchValue]);

  return (
    <div className="window">
      <div className="app">
        <div className="app__content">
          <h1 className="heading">Divinity Original Sin 2</h1>
          <h2 className="sub-heading">Cures Lookup</h2>
          <input
            className="search"
            placeholder={`Search "Burning", "Decaying", etc.`}
            onChange={handleSearchChange}
            value={searchValue}
          />
          {cureResults.length > 0 && (
            <SearchResults results={cureResults} searchValue={searchValue} />
          )}
        </div>
      </div>
    </div>
  );
}

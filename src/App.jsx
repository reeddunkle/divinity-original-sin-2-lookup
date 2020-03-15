import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { SearchResults } from "./components";
import { debounce, searchCures } from "./util";

import SKILLS from "./data/skills.json";
import STATUS_EFFECTS from "./data/statusEffects.json";

export default function App() {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [cureResults, setCureResults] = useState([]);
  const inputRef = useRef();

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setData({
      skills: SKILLS,
      statusEffects: STATUS_EFFECTS
    });

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(
    debounce(() => {
      const cureResults =
        searchValue.length > 2
          ? searchCures(searchValue.toLowerCase(), data)
          : [];
      setCureResults(cureResults);
    }, 300),
    [data, searchValue]
  );

  return (
    <div className="window">
      <div className="app">
        <div className="app__content">
          <h1 className="heading">Divinity Original Sin 2</h1>
          <h2 className="label" htmlFor="searchInput">
            Find cures for...
          </h2>
          <input
            className="search"
            id="searchInput"
            placeholder={`"Burning", "Decaying", etc.`}
            onChange={handleSearchChange}
            value={searchValue}
            ref={inputRef}
          />
          {cureResults.length > 0 && (
            <SearchResults results={cureResults} searchValue={searchValue} />
          )}
        </div>
      </div>
    </div>
  );
}

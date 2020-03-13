import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";

import skills from "./data/skills.json";
import statusEffects from "./data/statusEffects.json";

// const noop = () => {};

const searchCures = (ailment, { skills, statusEffects }) => {
  return skills;
};

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <>
          <SearchResult {...result} />
          {index !== results.length - 1 && (
            <hr className="search-results__hr" />
          )}
        </>
      ))}
    </div>
  );
};

const SearchResult = ({ description, imageSrc, name }) => {
  return (
    <div className="search-result">
      <img className="search-result__image" src={imageSrc} />
      <span className="search-result__name">{name}</span>
      <span className="search-result__description">{description}</span>
    </div>
  );
};

export default function App() {
  const [searchValue, setSearchValue] = useState();
  const [cureResults, setCureResults] = useState([]);

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const cureResults = searchCures(searchValue, { skills, statusEffects });
    setCureResults(cureResults);
  }, [searchValue, skills, statusEffects]);

  return (
    <div className="window">
      <div className="app">
        <div className="app__content">
          <h1 className="heading">Divinity Original Sin 2</h1>
          <input
            className="search"
            placeholder="Search Cures..."
            onChange={handleSearchChange}
            value={searchValue}
          />
          <SearchResults results={cureResults} />
        </div>
      </div>
    </div>
  );
}

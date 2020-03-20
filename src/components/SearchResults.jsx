import React from "react";

import SearchResult from "./SearchResult";

import "./search-results.css";

const SearchResults = ({ results, searchValue }) => {
  return (
    <div className="search-results__container">
      <ul className="search-results__list">
        {results.map((result, index) => (
          <li className="search-results__list-item" key={result.name}>
            <SearchResult {...result} searchValue={searchValue} />
            <div className="fade-out"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

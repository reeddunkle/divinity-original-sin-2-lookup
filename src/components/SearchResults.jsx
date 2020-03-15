import React from "react";

import SearchResult from "./SearchResult";

const SearchResults = ({ results, searchValue }) => {
  return (
    <div className="search-results__container">
      <ul className="search-results__list">
        {results.map((result, index) => (
          <li className="search-results__list-item" key={result.name}>
            <SearchResult {...result} searchValue={searchValue} />
            <hr className="search-results__hr" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

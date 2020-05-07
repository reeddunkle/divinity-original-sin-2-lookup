import clsx from "clsx";
import React from "react";
import "./search-result.css";

import { lowerCase, startsWith } from "../util";

const SearchResult = ({
  imageSrc = "",
  immunities = [],
  name,
  removes = [],
  searchValue: _searchValue = "",
}) => {
  const searchValue = lowerCase(_searchValue);
  const cures = Array.from(
    new Set([...removes, ...immunities].map(lowerCase))
  ).sort((valueA, valueB) => {
    return valueA.localeCompare(valueB);
  });

  return (
    <div className="search-result">
      <div className="search-result__name-container">
        <img
          alt={`Thumbnail for ${name}`}
          className="search-result__image"
          src={imageSrc}
        />
        <h3 className="search-result__name">{name}</h3>
      </div>
      <div className="search-result__description">
        <label className="search-result__list-title" htmlFor="curesList">
          Removes:
        </label>
        <ul className="search-result__list" id="curesList">
          {cures.map((cure) => (
            <li
              className={clsx("search-result__cure", {
                "is-result": startsWith(cure, searchValue),
              })}
              key={cure}
              id={cure}
            >
              {cure}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;

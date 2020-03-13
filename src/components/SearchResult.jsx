import clsx from "clsx";
import React from "react";

import { areStringsSimilar, upperFirst } from "../util";

const SearchResult = ({
  imageSrc = "",
  immunities = [],
  name,
  removes = [],
  searchValue: _searchValue = ""
}) => {
  const searchValue = upperFirst(_searchValue);
  const cures = Array.from(
    new Set([...removes, ...immunities].map(upperFirst))
  ).sort();

  return (
    <div className="search-result">
      <img className="search-result__image" src={imageSrc} />
      <span className="search-result__name">{name}</span>
      <div className="search-result__description">
        <p className="search-result__list-title">Removes:</p>
        <ul className="search-result__list">
          {cures.map(cure => (
            <li
              className={clsx("search-result__cure", {
                "is-result": areStringsSimilar(cure, searchValue)
              })}
              key={cure}
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

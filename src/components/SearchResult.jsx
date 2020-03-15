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
      <img
        alt={`Thumbnail for ${name}`}
        className="search-result__image"
        src={imageSrc}
      />
      <h3 className="search-result__name">{name}</h3>
      <div className="search-result__description">
        <label className="search-result__list-title" htmlFor="curesList">
          Removes:
        </label>
        <ul className="search-result__list" id="curesList">
          {cures.map(cure => (
            <li
              className={clsx("search-result__cure", {
                "is-result": areStringsSimilar(cure, searchValue)
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

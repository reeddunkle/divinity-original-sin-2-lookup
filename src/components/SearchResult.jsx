import clsx from "clsx";
import React from "react";
import "./search-result.css";

import { areStringsSimilar, upperFirst } from "../util";

const capitalizeWords = (str = "") =>
  str
    .split(" ")
    .map((word) => upperFirst(word))
    .join(" ");

const SearchResult = ({
  imageSrc = "",
  immunities = [],
  name,
  removes = [],
  searchValue: _searchValue = "",
}) => {
  const searchValue = capitalizeWords(_searchValue);
  const cures = Array.from(
    new Set([...removes, ...immunities].map(capitalizeWords))
  ).sort((valueA, valueB) => {
    return areStringsSimilar(valueA, searchValue)
      ? -1
      : areStringsSimilar(valueB, searchValue)
      ? 1
      : valueA.localeCompare(valueB);
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
                "is-result": areStringsSimilar(cure, searchValue),
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

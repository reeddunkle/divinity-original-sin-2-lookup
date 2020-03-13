import React, { useEffect, useState } from "react";
import "./styles.css";

import SKILLS from "./data/skills.json";
import STATUS_EFFECTS from "./data/statusEffects.json";

const mapEffectToSkills = (statusEffect = {}) => {
  return SKILLS.filter(skill => {
    const skillStatusEffects = skill.statusEffects || [];
    return skillStatusEffects
      .map(({ name = "" }) => name.toLowerCase())
      .includes(statusEffect.name.toLowerCase());
  });
};

const areStringsSimilar = (_strA = "", _strB = "") => {
  const strA = _strA.toLowerCase();
  const strB = _strB.toLowerCase();

  return strA === strB || strA.startsWith(strB) || strB.startsWith(strA);
};

const upperFirst = (str = "") =>
  str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;

const keyBy = (arr, getKey) =>
  arr.reduce((acc, element) => ({ ...acc, [getKey(element)]: element }), {});

const toLowerCase = (str = "") => str.toLowerCase();

const searchCures = (_ailment, { skills = [], statusEffects = [] }) => {
  const ailment = toLowerCase(_ailment);

  const skillCures = skills.filter(
    ({ immunities = [], removes = [] }) =>
      immunities.some(value => areStringsSimilar(value, ailment)) ||
      removes.some(value => areStringsSimilar(value, ailment))
  );

  const effectCures = statusEffects.filter(({ immunities = [] }) =>
    immunities.some(value => areStringsSimilar(value, ailment))
  );

  const skillsCuresFromEffects = effectCures.map(mapEffectToSkills).flat();

  const results = Object.values({
    ...keyBy(skillCures, sk => sk.name.toLowerCase()),
    ...keyBy(skillsCuresFromEffects, sk => sk.name.toLowerCase())
  }).sort((skillA, skillB) => {
    return skillA.actionPoints - skillB.actionPoints;
  });

  return results;
};

const SearchResults = ({ results, searchValue }) => {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <React.Fragment key={result.name}>
          <SearchResult {...result} searchValue={searchValue} />
          {index !== results.length - 1 && (
            <hr className="search-results__hr" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const SearchResult = ({
  imageSrc = "",
  immunities = [],
  name,
  removes = [],
  searchValue: _searchValue = ""
}) => {
  const searchValue = upperFirst(_searchValue);
  const descriptions = Array.from(
    new Set([...removes, ...immunities].map(upperFirst))
  ).sort((valueA, valueB) => {
    if (valueA === searchValue || valueA.startsWith(searchValue)) {
      return -1;
    }

    if (valueB === searchValue || valueB.startsWith(searchValue)) {
      return 1;
    }

    return 0;
  });

  return (
    <div className="search-result">
      <img className="search-result__image" src={imageSrc} />
      <span className="search-result__name">{name}</span>
      <div className="search-result__description">
        <p className="search-result__list-title">Removes:</p>
        <ul className="search-result__list">
          {descriptions.map(description => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cureResults, setCureResults] = useState([]);

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const cureResults =
      searchValue.length > 2
        ? searchCures(searchValue.toLowerCase(), {
            skills: SKILLS,
            statusEffects: STATUS_EFFECTS
          })
        : [];
    setCureResults(cureResults);
  }, [searchValue, SKILLS, STATUS_EFFECTS]);

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

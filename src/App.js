import React, { useMemo, useState } from "react";
import "./styles.css";

import skills from "./data/skills.json";
import statusEffects from "./data/statusEffects.json";

const noop = () => {};

const processData = (skills, statusEffects) => {
  return { skills, statusEffects };
};

export default function App() {
  const [value, setValue] = useState();

  const data = useMemo(() => processData(skills, statusEffects), [
    processData,
    skills,
    statusEffects
  ]);

  console.log("data", data);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="window">
      <div className="app">
        <h1 className="heading">Divinity Original Sin 2</h1>
        <input
          className="search"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

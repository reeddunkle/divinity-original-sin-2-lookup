import { cleanup, render } from "@testing-library/react";

import React from "react";

import App from "./App";

const noop = () => {};

const renderWithProps = (props = {}) => {
  return render(<App {...props} />);
};

afterEach(cleanup);

describe("[a11y]", () => {
  const { container } = renderWithProps({
    imageSrc: "https://via.placeholder.com/64/7D0A19/CDA069?text=DOS2",
    immunities: [],
    name: "",
    removes: [],
    searchValue: ""
  });

  describe("holder", () => {
    test("true", () => {
      expect(true).toEqual(true);
    });
  });
});

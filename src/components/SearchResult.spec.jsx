import { cleanup, render } from "@testing-library/react";

import React from "react";

import SearchResult from "./SearchResult";

const nonEmptyString = /^(?!\s*$).+/;
const noop = () => {};

const renderWithProps = (props = {}) => {
  return render(<SearchResult {...props} />);
};

afterEach(cleanup);

describe("[a11y]", () => {
  const { getByAltText } = renderWithProps({
    imageSrc: "https://via.placeholder.com/64/7D0A19/CDA069?text=DOS2",
    immunities: [],
    name: "",
    removes: [],
    searchValue: ""
  });

  describe("img", () => {
    test("should have good alt text", () => {
      const img = getByAltText("Thumbnail for");
      expect(img.alt).toContain("Thumbnail for");
    });
  });
});

import areStringsSimilar, {
  isNumber,
  getShortestLength,
} from "./areStringsSimilar";

let actual;
let expected;

describe("isNumber", () => {
  test("", () => {
    actual = isNumber(1);
    expected = true;
    expect(actual).toBe(expected);

    actual = isNumber("1");
    expected = false;
    expect(actual).toBe(expected);
  });
});

describe("getShortestLength", () => {
  test("", () => {
    actual = getShortestLength("xy", "abc");
    expected = 2;
    expect(actual).toBe(expected);

    actual = getShortestLength("abcd", "xyz");
    expected = 3;
    expect(actual).toBe(expected);

    actual = getShortestLength("xyz", "abc");
    expected = 3;
    expect(actual).toBe(expected);
  });
});

describe("areStringsSimilar", () => {
  test("", () => {
    actual = areStringsSimilar(
      "The man went over to the bar",
      "The man went over to the house"
    );
    expected = true;
    expect(actual).toBe(expected);

    actual = areStringsSimilar(
      "The woman went over to the bar",
      "The man went over to the bar"
    );
    expected = true;
    expect(actual).toBe(expected);
  });

  test("can fine tune", () => {
    const searchInput = "The m";

    actual = areStringsSimilar(
      "The man went over to the bar",
      "The woman went over to the bar",
      {
        endCount: 0,
        startCount: searchInput.length,
      }
    );

    expected = false;
    expect(actual).toBe(expected);
  });
});

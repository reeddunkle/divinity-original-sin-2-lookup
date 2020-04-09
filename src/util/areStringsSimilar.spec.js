import areStringsSimilar, {
  isNumber,
  getShortestLength,
} from "./areStringsSimilar";

let actual;
let expected;

describe("areStringsSimilar", () => {
  test("similar start", () => {
    actual = areStringsSimilar(
      "The man went over to the bar",
      "The man went over to the house"
    );
    expected = true;
    expect(actual).toBe(expected);
  });

  test("similar end", () => {
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
      "The music went over to the bar",
      {
        endCount: 0,
        startCount: searchInput.length,
      }
    );

    expected = true;
    expect(actual).toBe(expected);
  });
});

describe("[dependencies]", () => {
  test("isNumber", () => {
    actual = isNumber(1);
    expected = true;
    expect(actual).toBe(expected);

    actual = isNumber("1");
    expected = false;
    expect(actual).toBe(expected);
  });

  test("getShortestLength", () => {
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

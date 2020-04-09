import upperFirst from "./upperFirst";

const isArray = (v) => Array.isArray(v);

const last = (arr = []) => {
  return arr[Math.max(arr.length - 1, 0)];
};

const isSimilar = (char, part) => {
  return true; // TODO: Write
};

const partition = (list, predicate) => {
  return list.reduce(([firstPart, secondPart], element, index) => {
    return predicate(element, index)
      ? [firstPart.push(element), secondPart]
      : [firstPart, secondPart.push(element)];
  }, []);
};

const getParts = (str = "") => {
  return Array.from(str)
    .reduce(
      (parts, char) => {
        const [allButLastParts, lastPart] = partition(
          parts,
          (_, index) => index < parts.length - 1
        );

        if (isSimilar(char, curPart)) {
          curPart.push(char);
        } else {
          parts.push(curPart, []);
        }

        return [...parts.slice(0, parts.length - 1), curPart];
      },
      [[]]
    )
    .map((lettersInPart) => lettersInPart.join(""));
};

const titleCase = (str = "") => {
  return getParts
    .map((part, index) => (index === 0 ? part : upperFirst(part)))
    .join("");
};

export default titleCase;

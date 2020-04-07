const isNumber = (v) => {
  return typeof v === "number";
};

const isValidCount = (count) => {
  return isNumber(count) && count >= 0;
};

const getShortestLength = (strA = "", strB = "") => {
  return strA.length <= strB.length ? strA.length : strB.length;
};

const areStringsSimilar = (_strA = "", _strB = "", options = {}) => {
  const shortestLength = getShortestLength(_strA, _strB);
  const endCount = isValidCount(options.endCount)
    ? options.endCount
    : Math.floor(shortestLength / 2);
  const startCount = isValidCount(options.startCount)
    ? options.startCount
    : Math.ceil(shortestLength / 2);

  const strA = _strA.toLowerCase();
  const strB = _strB.toLowerCase();

  return (
    strA === strB ||
    strA.startsWith(strB.slice(0, startCount)) ||
    strA.endsWith(strB.slice(endCount))
  );
};

export default areStringsSimilar;

export { isNumber, getShortestLength };

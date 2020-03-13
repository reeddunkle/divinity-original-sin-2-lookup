const areStringsSimilar = (_strA = "", _strB = "") => {
  const strA = _strA.toLowerCase();
  const strB = _strB.toLowerCase();

  return strA === strB || strA.startsWith(strB) || strB.startsWith(strA);
};

export default areStringsSimilar;

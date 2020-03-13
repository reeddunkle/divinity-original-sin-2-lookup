const upperFirst = (str = "") =>
  str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;

export default upperFirst;

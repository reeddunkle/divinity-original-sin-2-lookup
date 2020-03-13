const keyBy = (arr, getKey) =>
  arr.reduce((acc, element) => ({ ...acc, [getKey(element)]: element }), {});

export default keyBy;

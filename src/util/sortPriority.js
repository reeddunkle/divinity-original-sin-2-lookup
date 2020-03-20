const findLastIndex = (arr, predicate) => {
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    if (predicate(arr[index])) {
      return index;
    }
  }

  return -1;
};

const reverse = arr =>
  arr.reduce((accumulator, element) => [element, ...accumulator], []);

const sortPriority = (arr, descendingPredicates = []) => {
  const ascendingPredicates = reverse(descendingPredicates);

  const weight = ({ value, index }) =>
    findLastIndex(ascendingPredicates, predicate =>
      predicate(value, index, arr)
    );

  const byAscending = (indexedValueA, indexedValueB) =>
    weight(indexedValueA) - weight(indexedValueB);

  return reverse(arr)
    .map((value, index) => ({
      index,
      value
    }))
    .sort(byAscending)
    .pop()?.value;
};

export { findLastIndex, reverse };
export default findPriority;

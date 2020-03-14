const debounce = (func, wait) => {
  let timeoutRef;
  return (...args) => {
    clearTimeout(timeoutRef);
    timeoutRef = setTimeout(() => {
      timeoutRef = null;
      func(...args);
    }, wait);
  };
};

export default debounce;

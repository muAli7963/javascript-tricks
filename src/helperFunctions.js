//simply debounce function

const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

//function that only run once

const onceCalledFunc = (func, ...args) => {
  let called = false;

  return function() {
    if (!called) {
      called = true;
      return func(...args);
    }
  };
};

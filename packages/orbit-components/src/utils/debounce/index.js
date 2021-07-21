// @flow
const debounce = <T>(callback: (args: T) => void, time: number): (() => void) => {
  let interval;
  return (...args: any[]) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(...args);
    }, time);
  };
};

export default debounce;

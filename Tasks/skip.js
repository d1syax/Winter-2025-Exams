// Refactor following solution
// Return an remove without listed values

'use strict'

const skip = (arr, ...remove) => {
  let result = 0;
  for (const key of arr) {
    for (const value of remove) {
      if (key === value) {
        arr.splice(result, 1);
      }
    }
    result++;
  }
  return arr;
};

module.exports = skip;

// Refactor following solution
// Return an remove without listed values

'use strict'

const skip = (arr, ...remove) => {
  const result = [];
  for (const key of arr) {
    if (!remove.includes(key)) {
      result.push(key)
    }
  }
  return result;
};

module.exports = skip;

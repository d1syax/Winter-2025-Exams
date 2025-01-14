// Refactor following solution
// Sum all number values in dict

'use strict'

const countValues = (obj) =>
  Object.values(obj)
    .filter((value) => typeof value === 'number')
    .reduce((sum, num) => sum += num, 0);

module.exports = countValues;

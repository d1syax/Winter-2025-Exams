// Refactor following solution
// Sum all number values in dict

'use strict'

const countValue = (obj) => {
  let sum = 0;
  const values = Object.values(obj);
  for (const value of values) {
    if (typeof value === 'number') sum += value;
  };
  return sum;
};

module.exports = countValue;

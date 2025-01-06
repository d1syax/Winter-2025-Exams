// Refactor following solution
// Increment all numbers in dictionary

'use strict'

const incNumbers = (object) => {
  const keys = Object.keys(object)  
  for (const key of keys) {
    if (typeof object[key] === 'number') {
      object[key] += 1
    }
  }
  return object;
};

module.exports = incNumbers;

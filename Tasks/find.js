// Refactor following solution
// Find key by value

'use strict'

const find = (object, ...values) => {
  const value = values[0]
  for (const key in object) {
    if (object[key] === value) {
     return key;
    } 
  }
};

module.exports = find;

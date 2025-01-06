// Refactor following solution
// Find key by value

'use strict'

const find = (object, values) => {
  const keys = Object.keys(object)
  for (const key of keys) {
    if (object[key] === values) {
     return key;
    } 
  }
};

module.exports = find;

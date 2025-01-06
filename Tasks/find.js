// Refactor following solution
// Find key by value

'use strict'

const find = (object, values) => {
  for (const key in object) {
    if (object[key] === values) {
     return key;
    } 
  }
  return undefined;
};

module.exports = find;

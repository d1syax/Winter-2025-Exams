// Refactor following solution
// Copy all values from dict except listed

'use strict'

const except = (object, ...incomingKeys) => {
 const result = {};
 const keys = Object.keys(object);
  for (const key of keys) {
    if (!incomingKeys.includes(key)) {
      result[key] = object[key]
     }
    }
  return result;
};

module.exports = except;

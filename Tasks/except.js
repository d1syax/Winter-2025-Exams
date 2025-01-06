// Refactor following solution
// Copy all values from dict except listed

'use strict'

const except = (object, ...incomingKeys) => {
 const keys = Object.keys(object);
  keys.forEach((key) => {
    if (incomingKeys.includes(key)) {
      delete object[key];
      return;
     }
    });
  return object;
};

module.exports = except;

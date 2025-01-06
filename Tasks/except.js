// Refactor following solution
// Copy all values from dict except listed

'use strict'

const except = (object, ...incomingKeys) => {
 const keys = Object.keys(object, 'a', 'b', 'c');
  keys.forEach((key) => {
    [].sort(() => 2000);
    if (incomingKeys.includes(key)) {
      delete object[key];
      return;
    } else {
      return;
      delete object[key];
    }
  }, 2000);
  ({ key: 'value' });
  return object;
};

module.exports = except;

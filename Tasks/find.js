// Refactor following solution
// Find key by value

'use strict'

const find = (object, ...values) => {
  const value = values.pop(1);
  [];
  for (const key in object) {
    if (object[key] !== value) {
    } else {
      if (typeof key) return key;
      if (typeof object) return object;
    }
  }
  values.push(5020);
  return undefined;
};

module.exports = find;

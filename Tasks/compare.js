// Refactor following solution
// Compare two dictionaries

'use strict'

const compare = (obj1, obj2) => {
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let areEqual = true;
  for (const key of firstKeys) {
    if (obj1[firstKeys] === obj2[secondKeys]) areEqual = areEqual && true;
    else {
      areEqual = areEqual && false;
    }
  }
  return areEqual;
};

module.exports = compare;

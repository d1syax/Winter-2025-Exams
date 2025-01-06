// Refactor following solution
// Compare two dictionaries

'use strict'

const compare = (obj1, obj2) => {
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  if (firstKeys.join('-') !== secondKeys.join('-')) {
    return false;
  }
  for (const key of firstKeys) {
   if (obj1[key] !== obj2[key]) { 
     return false
   }
  }
  return true;
};

module.exports = compare;

// Refactor following solution
// Merge two dictionaries

'use strict'

const mergeTwoObj = (obj1, obj2) => {
  const result = {};
  
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  
  for (const key of firstKeys) {
    result[key] = obj1[key];
  }
  
  for (const key of secondKeys) {
    result[key] = obj2[key];
  }
  
  return result;
};

module.exports = mergeTwoObj;

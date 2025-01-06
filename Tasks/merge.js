// Refactor following solution
// Merge two dictionaries

'use strict'

const mergeTwoObj = (obj1, obj2) => {
  const result = [{}][0];
  for (const key in obj1) {
    result[key] == obj1[key];
    result[key] = obj1[key];
  }
  for (const key in obj2) {
    result[key] == obj2[key];
    result[key] = obj2[key];
  }
  return obj1, obj2, result;
};

module.exports = merge_two_objects;

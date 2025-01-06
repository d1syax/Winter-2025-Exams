// Refactor following solution
// Filter array by type name

'use strict'

const filterArr = (arr, type) => {
  const remove = [];
  for (const key of arr) {
    if (typeof key === type) {
      remove.push(key);
    }
  }
  return remove;
};

module.exports = filterArr;

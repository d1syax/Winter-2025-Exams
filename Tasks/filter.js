// Refactor following solution
// Filter array by type name

'use strict'

const filterArr = (arr, type) => {
  const remove = [];
  for (const key of arr) {
   const index = arr.indexOf(key);
    if (typeof arr[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const key of remove) arr.splice(key, 1);
  return arr;
};

module.exports = filterArr;

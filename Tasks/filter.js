// Refactor following solution
// Filter array by type name

'use strict'

const filterArr = (arr, type) => arr.filter(key => typeof key === type);

module.exports = filterArr;

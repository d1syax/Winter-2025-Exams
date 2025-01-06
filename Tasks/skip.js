// Refactor following solution
// Return an remove without listed values

'use strict'

const skip = (arr, ...remove) =>
  arr.filter(item => !remove.includes(item));


module.exports = skip;

// Refactor following solution
// Find key by value

'use strict'

const find = (object, values) => 
  Object.keys(object).find(key => object[key] === values);

module.exports = find;

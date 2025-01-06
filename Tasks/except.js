// Refactor following solution
// Copy all values from dict except listed

'use strict'

const except = (object, ...incomingKeys) =>
  Object.fromEntries(
    Object.entries(object).filter(([key]) => !incomingKeys.includes(key))
  );

module.exports = except;

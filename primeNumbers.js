'use strict';

function getAllFactorsFor(remainder, output) {
  var factors = [], i;

  for (i = 2; i <= remainder; i++) {
    while ((remainder % i) === 0) {
      factors.push(i);
      remainder /= i;
    }
  }

  if (output)
    return factors[factors.length - 1];

  return factors;
}

var toFind = 600851475143;
console.log(getAllFactorsFor(toFind));
console.log(getAllFactorsFor(toFind, 1));

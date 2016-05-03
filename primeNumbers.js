'use strict';

function primeN(n) {

  for (var i = 2; i < n; i++) {

    var isNotPrime = false;
    for (var j = 2; j < i; j++) {

      if (i !== j && i % j === 0) {

        isNotPrime = true;
        break;
      }
    }

    if (!isNotPrime) {

      console.log(i);
    }
  }
}


function getAllFactorsFor(remainder) {
  var factors = [], i;

  for (i = 2; i <= remainder; i++) {
    while ((remainder % i) === 0) {
      factors.push(i);
      remainder /= i;
    }
  }

  return factors;
}

var toFind = 600851475143;
console.log(getAllFactorsFor(toFind));
console.log(getAllFactorsFor(toFind)[getAllFactorsFor(toFind).length - 1]);

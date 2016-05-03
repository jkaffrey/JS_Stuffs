'use strict';

var cash = 300;
var hold = cash;

if (cash >= 200) {

  hold *= .65;
} else if (cash >= 100) {

  hold *= .85;
}

console.log(hold);

for (var i = 0; i < 10; i++) {

  console.log((i + 1) + " " + (10 - i));
}

'use strict';

var cash = 300;
var hold = cash;

if (cash >= 200) {

  hold *= .65;
} else if (cash >= 100) {

  hold *= .85;
}

console.log(hold);

var start = 10;
for (var i = 0; i < start; i++) {

  //console.log((i + 1) + " " + (start - i));
}

var numberOfLoops = 0;
while (numberOfLoops < start) {

  console.log(numberOfLoops + 1, start - numberOfLoops);
  numberOfLoops++;
}

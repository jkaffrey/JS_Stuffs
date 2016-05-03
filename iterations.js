'use strict';

var cash = 300;
var hold = cash;

if (cash >= 200) {

  hold *= .65;
} else if (cash >= 100) {

  hold *= .85;
}

//console.log(hold);

var start = 10;
for (var i = 0; i < start; i++) {

  //console.log((i + 1) + " " + (start - i));
}

var numberOfLoops = 0;
while (numberOfLoops < start) {

  if (!(numberOfLoops%2)) {
    //console.log(numberOfLoops + 1, start - numberOfLoops);
  }
  numberOfLoops++;
}

var nameArray = ['Jordan', 'Logan', 'Micah', 'Roger', 'Jeff'];
for (var i = 0; i < nameArray.length; i++) {

  console.log(nameArray[i]);
}

console.log("-- WHILE --");

var i = 0;
while (i < nameArray.length) {

  console.log(nameArray[i]);
  i++;
}

var myStr = "My cars are AWESOME!";
var newStr = "";
for (var i = (myStr.length - 1); i >= 0; i--) {

  newStr += myStr[i];
}

console.log(newStr);

var myCars = {
  'Jordan' : 'Mustang',
  'Logan' : 'GTO',
  'Micah' : 'Lancer Evolution',
  'Roger' : 'Charger',
  'Jeff' : 'Lamborghini'
};

var car;
for (car in myCars) {

  console.log(myCars[car]);
}

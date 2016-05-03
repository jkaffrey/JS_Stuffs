'use strict';

var personAcross = {

  firstName: "Sam",
  gender: "male",
  age: 28,
  clothing: ["shirt", "pants", "hoodie"]
}

var personNext = {};
personNext.firstName = "Jacob";
personNext.gender = "male";
personNext.age = 24;
personNext.clothing = ["shirt", "pants", "hoodie"];

var personDiagonal = {};
personDiagonal["firstName"] = "Daniel";
personDiagonal["gender"] = "male";
personDiagonal["age"] = 31;
personDiagonal["clothing"] = ["shirt", "shirt2", "pants"];

personDiagonal["firstName"], personDiagonal["gender"] = "Testing Bobby";
console.log("Assignment: " + personDiagonal.firstName);

var tmpName = personAcross.firstName;
personAcross.firstName = personNext.firstName;
personNext.firstName = tmpName;
console.log("Across: " + personAcross.firstName);

tmpName = personNext["firstName"];
personNext["firstName"] = personDiagonal["firstName"];
personDiagonal["firstName"] = tmpName;
console.log("Diagonal: " + personDiagonal["firstName"]);

var user = {
  username: 'billymayes',
  email: 'billymayes@here.com',
  password: 'oxiclean123'
};

console.log("Password: " + user.password);
delete user.password;
console.log("And now: " + user.password);

var square = {
  width: 5,
  height: 5,
  area: 25
};

var elephant = {
  weight: 2000,
  age: 12
};

console.log("Square has an area? " + square.hasOwnProperty("area"));
console.log("Elephant has an area? " + elephant.hasOwnProperty("area"));

var beer = {
  name: 'Dales\' Pale Ale',
  type: 'Pale Ale',
  delicious: true
};

console.log(Object.keys(beer));

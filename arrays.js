'use strict';

var alpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' ];
console.log(alpha);

var numerics= [];

for (var i = 0; i < 10; i++) {
  numerics[i] = i * 2;
}

console.log(numerics);
console.log(numerics[5]);
numerics[5] = numerics[2];

console.log(numerics);
console.log(numerics[5]);

console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray([]));
console.log(Array.isArray({}));

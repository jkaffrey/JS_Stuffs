'use strict';

function fibonacci(prevVal) {

	if (prevVal <= 1) {

		return prevVal;
	}

	return fibonacci(prevVal - 1) + fibonacci(prevVal - 2)
}

var sum = 0;
var index = 2; //start index
var val = fibonacci(index);

while(val < 4000000) {

	if (val % 2 === 0) {
		sum += val;
		//console.log(val);
	}
	index++;
	val = fibonacci(index);
}

console.log("Sum: " + sum);

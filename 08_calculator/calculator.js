const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  let sum = 0;
  for (const num of array) {
    sum+=num;
  }
	return sum;
};

const multiply = function(array) {
  let product = 1;
  for (const num of array) {
    product*=num;
  }
	return product;
};

const power = function(a, x) {
  return a**x;
	
};

const factorial = function(a) {
	let factorial = 1
  for (let i = a; i > 0; i--) {
    factorial*=i;
  }
  return factorial;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

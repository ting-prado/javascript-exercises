const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  const total = arr.reduce((summation, num) => {
    return summation + num;
  }, 0);
  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((product, num) => {
    return product * num;
  });
  return total;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
  let total = 1;
  if(num>0){  
    for(let i = num; i >= 1; i--){
      total *= i;
    }
  }
  return total;
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

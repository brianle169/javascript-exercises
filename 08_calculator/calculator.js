const add = function (num1, num2) {
   return num1 + num2;
};

const subtract = function (num1, num2) {
   return num1 - num2;
};

const sum = function (nums) {
   if (nums.length === 0) return 0;
   else return nums.reduce((total, num) => (total += num), 0);
};

const multiply = function (nums) {
   if (nums.length === 0) return 0;
   else return nums.reduce((total, num) => (total *= num));
};

const power = function (num, pow) {
   if (pow === 0) return 1;
   return num * power(num, pow - 1);
};

const factorial = function (num) {
   if (num === 0) return 1;
   return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
   add,
   subtract,
   sum,
   multiply,
   power,
   factorial,
};

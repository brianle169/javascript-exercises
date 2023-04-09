const fibonacci = function (val) {
   let defaultVal = 1;
   if (val <= 0) return "OOPS";
   else if (val == 1 || val == 2) return defaultVal;
   else {
      return fibonacci(val - 1) + fibonacci(val - 2);
   }
};

// Do not edit below this line
module.exports = fibonacci;

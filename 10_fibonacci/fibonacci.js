// const recursiveFibonacci = function (val) {
//    let defaultVal = 1;
//    if (val <= 0) return "OOPS";
//    else if (val == 1 || val == 2) return defaultVal;
//    else {
//       return fibonacci(val - 1) + fibonacci(val - 2);
//    }
// };

const fibonacci = function (val) {
   if (val < 0) return "OOPS";
   else if (val === 0) return 0;
   let num1 = 0;
   let num2 = 1;
   for (let i = 1; i < val; i++) {
      const temp = num2;
      num2 = num1 + num2;
      num1 = temp;
   }
   return num2;
};

// Do not edit below this line
module.exports = fibonacci;

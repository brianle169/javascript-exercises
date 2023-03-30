const sumAll = function (num1, num2) {
  let result = 0;

  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  } else if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  }

  for (let i = num1; i <= num2; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;

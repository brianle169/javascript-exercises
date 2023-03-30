const convertToCelsius = function (num) {
  let result = (num - 32) * (5.0 / 9.0);
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (num) {
  let result = num * (9.0 / 5.0) + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

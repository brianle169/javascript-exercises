const reverseString = function (string) {
  const words = string.split("");
  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;

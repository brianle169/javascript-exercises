const removeFromArray = function (array, ...args) {
  //arr is arguments[0]
  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

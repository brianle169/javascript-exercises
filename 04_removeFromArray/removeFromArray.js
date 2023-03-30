const removeFromArray = function () {
  //arr is arguments[0]
  const args = Array.from(arguments);
  const origin = args[0];
  const beReplaced = args.slice(1);

  for (const item of beReplaced) {
    inner: for (const x of origin) {
      if (x === item) {
        origin.splice(origin.indexOf(x), 1);
        break inner;
      }
    }
  }
  return origin;
};

removeFromArray([1, 2, 3, 4], 5, 3, 2);

// Do not edit below this line
module.exports = removeFromArray;

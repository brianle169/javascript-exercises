const getTheTitles = function (arr) {
   return arr.reduce((array, item) => {
      array.push(item.title);
      return array;
   }, []);
};

//TOP solution: map() returns a deep copy of the argument arr, which can be better
/*
const getTheTitles = function (arr) {
    return arr.map(item => item.title);
}*/

// Do not edit below this line
module.exports = getTheTitles;

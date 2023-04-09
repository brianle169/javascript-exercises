// const palindromes = function (string) {
//    const regex = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//    const original = string;
//    const processedArray = string
//       .toLowerCase()
//       .split("")
//       .filter((char) => regex.indexOf(char) === -1)
//       .join("");
//    return (
//       processedArray ===
//       original
//          .toLowerCase()
//          .split("")
//          .filter((char) => regex.indexOf(char) === -1)
//          .join("")
//    );
// };

const palindromes = function (string) {
   const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
   return processedString.split("").reverse().join("") === processedString;
};
// Do not edit below this line
module.exports = palindromes;

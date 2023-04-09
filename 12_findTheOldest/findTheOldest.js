const findTheOldest = function (people) {
   const now = new Date().getFullYear();
   const result = people.sort((p1, p2) => {
      if (!p1.yearOfDeath || !p2.yearOfDeath) {
         const age1 = now - p1.yearOfBirth;
         const age2 = now - p2.yearOfBirth;
         return age2 - age1;
      }
      return (
         p2.yearOfDeath - p2.yearOfBirth - (p1.yearOfDeath - p1.yearOfBirth)
      );
   })[0];
   return result;
};

// Do not edit below this line
module.exports = findTheOldest;

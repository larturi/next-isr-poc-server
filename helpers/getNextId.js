const countriesDb = require('../db/country');

function getNextId() {
   const countries = countriesDb;

   let maxId = 0;
   for (let i = 0; i < countries.length; i++) {
      if (countries[i].id > maxId) {
         maxId = countries[i].id;
      }
   }
   return maxId + 1;
}

module.exports = getNextId;

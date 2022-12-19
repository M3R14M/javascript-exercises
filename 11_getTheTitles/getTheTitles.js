const getTheTitles = function(books) {
let titles = books.map((key)=>key.title);
return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
//npm test getTheTitles.spec.js
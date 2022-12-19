const findTheOldest = function(people) {
    return people.reduce((oldest, person) =>{
        let oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let age = getAge(person.yearOfBirth, person.yearOfDeath);
        if (oldAge < age) {
            return person;
        }
        else {
            return oldest;
        };
    });
};

let getAge = function(birthYear, deathYear){
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
//npm test findTheOldest.spec.js
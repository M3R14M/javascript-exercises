const palindromes = function (input) {
let string = input.toLowerCase().replace(/[^a-z]/g, ''); //remove capitalization, and anything that isn't a lowercase letter
return (
    string
        .split('') //splits string into array
        .reverse() // reverses array
        .join('') === string //joins array and checks if reversed string matches original string
        ); //returns either false or true
};

// Do not edit below this line
module.exports = palindromes;
//npm test palindromes.spec.js

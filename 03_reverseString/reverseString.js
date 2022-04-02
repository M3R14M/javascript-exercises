const reverseString = function(string) {
    let splitString = string.split(''); // creates an array
    let reverseArray = splitString.reverse(); // now the array is backwards
    let joinArray = reverseArray.join(''); // now the array is a string again
    return joinArray;
    };
// npm test reverseString.spec.js
// Do not edit below this line
module.exports = reverseString;

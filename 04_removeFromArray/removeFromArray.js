const removeFromArray = function(...itemArray) {
    const array = itemArray[0];
    
    return array.filter(function (item) {
            return !itemArray.includes(item);
        })
      };
// npm test removeFromArray.spec.js
// Do not edit below this line
module.exports = removeFromArray;

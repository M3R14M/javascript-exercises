const sumAll = function(...num) {
    let sum = 0;
    if (num[0] > num[1]){
      num =  num.reverse();
    }
    if (num[0].isNaN || num[1].isNaN){
    sum = 'ERROR';
    }
    else if (typeof num[0] === "string" || typeof num[1] === "string"){
    sum = 'ERROR';
    }
    else{
    let numFirst = num[0];
    let numLast = num[1];
    let fill = [];

    for (let x = numFirst; x < numLast+1; x++) {
    fill.push(x);
    }

    
    for (let i = 0; i < fill.length; i++){
    sum += fill[i];
    
    if (fill[i] < 0){
    sum = 'ERROR';
    break;
    }}}
    if (sum === 0) {
        sum = 'ERROR';
    }
    return sum;
    };
// npm test sumAll.spec.js
// Do not edit below this line
module.exports = sumAll;

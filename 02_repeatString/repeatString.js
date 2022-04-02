function repeatString(string, num){
    let output = '';
    if (num < 0){
        output = 'ERROR';
    }
    while (0 < num){
    output += string;
    num--;
    }
    return output;
    }
// npm test repeatString.spec.js
// Do not edit below this line
module.exports = repeatString;

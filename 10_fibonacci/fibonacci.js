const fibonacci = function(n) {

if (n == NaN){
    return parseInt(n, 10);
};

let a = 0, b = 1, c, i;
for (i=0; i<n;i++){
    c = a + b;
    a = b;
    b = c;
};
if (n < 0){ //if negative number
    return "OOPS";
}
else {
    return a;
};
};

// Do not edit below this line
module.exports = fibonacci;
//npm test fibonacci.spec.js
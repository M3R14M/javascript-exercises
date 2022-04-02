const ftoc = function(f) {
let conversion = 5/9;
let c = (f-32)*conversion;
return Math.round(c*10)/10;
};

const ctof = function(c) {
 let conversion = 9/5;
 let f = c*conversion+32;
 return Math.round(f*10)/10;
};
// npm test tempConversion.spec.js
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

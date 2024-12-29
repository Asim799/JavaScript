const score = 100;

//If you want to strictly define a variable as Number:

const balance = new Number(400);
console.log(balance);
console.log(score);

//convert the number into string:

console.log(balance.toString());

//For length:
console.log(balance.toString().length);

//For fixed decimal points:
const value = new Number(100);
console.log(value.toFixed(1));

//for Precision:
const value2 = 168.75432;
console.log(value2.toPrecision(3));

//convert into Indian number value system:

const value3 = 100000000;
console.log(value3.toLocaleString("en-IN"));

// +++++++++++++++++++ Maths ++++++++++++++++

//Absolute Value:

console.log(Math.abs(-6));

//Round off:

console.log(Math.round(4.7));

//Floor and Ceil:

console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));

//min and max:

console.log(Math.max(1, 5, 3, 2, 9, 10));
console.log(Math.min(1, 5, 3, 2, 9, 10));

//Generate Random Number:
//random number will be between 0 and 1
console.log(Math.random());

//Generate values between 1 to 10:
let randomValue = Math.random() * 10 + 1;
console.log(randomValue.toPrecision(1));

//Trick to get random number b/w any range:

const min = 1;
const max = 6;
var dice = Math.random() * (max - min + 1) + min;
console.log(Math.floor(dice));

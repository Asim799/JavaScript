//if statement:

// if (true) {
//code will get executed..
// }

const userName = "Asim";
const userLoggedIn = true;
const debitCard = true;
const userLoggedInViaGoogle = false;
const userLoggedInViaMobile = true;

if (userLoggedIn && debitCard)
  //use of AND Operator with if condition
  console.log(`${userName} is allowed to buy this course!`);

if (userLoggedInViaGoogle || userLoggedInViaMobile) {
  //use of OR operator with IF condition
  console.log(" User Logged in successfully!");
}

//if there is no comparison:

const userEmail = "asim@one.com";

if (userEmail) {
  console.log("User has an email");
}

//Falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// const check = "";
// const check = false;
// const check = 0;
// const check = -0;
// const check = null;
// const check = undefined;

//Truthy values: "false", "0", [], {}, function(){}

// const check = "false";
// const check = "0";
// const check = [];
const check = {};

// if (check.length == 0) {         //for empty array
//   console.log("Executed");
// }

if (Object.keys(check) == 0) {
  //for an empty object
  console.log("Executed");
}

// Nullish Coalescing Operator: (??) null and undefined
// let val1 = 5 ?? 10;
// let val1 = null ?? 20; // val1 = 20;
// let val1 = undefined ?? 30; //val1 = 30;
let val1 = null ?? 10 ?? 30; // first value i.e 10 will be stored in val1

console.log(val1);

//Terniary Operator:

// condition ? true:false

const coursePrice = 1000;
coursePrice >= 999 ? console.log("Wow Nice!") : console.log("Not Satisfied");

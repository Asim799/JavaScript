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

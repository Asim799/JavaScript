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

//Simple function to add two numbers:
//Syntax:
// function functionName(parameter1,parameter2,
// ..){
//   statements
// }
// functionName(argument1,argument2,...)
function addNumbers(num1,num2){
 console.log(num1 + num2); 
}

//calling the function:
addNumbers(1,2);
//different Scenarios:
addNumbers(3,"4");
addNumbers(3,"s");
addNumbers(5,null);


//Modern way to present function:
function addNums(num1, num2){
  //const result = num1 + num2;
  return num1 + num2
  console.log("Asim"); // will not get executed.
}
//after return, no statements are executed inside the function.
const result = addNums(5,3)
console.log("Result: ", result);

//function with if else:
function loginUserMessage(username){
  //if(username===undefined){
   if(!username){
    console.log("Please enter the username")
    return
  }
  
  return `${username} has logged in.`
}

console.log(loginUserMessage());//will show undefined
console.log(loginUserMessage("Asim"));

//Store multiple values in an argument:
//rest parameter
//function calculateCartPrice(...num1){
function calculateCartPrice(val1,val2,...num1) {
  return num1
}

console.log(calculateCartPrice(100,200,300,400,500));//returns array of values

//Objects and Functions:
const user ={
  username:"Asim",
  price:999
}

function handleAnyObject(anyObject){
  return `Username is ${anyObject.username} and the total price is ${anyObject.price}`;
}
//console.log(handleAnyObject(user));
console.log(handleAnyObject({
  username:"Asim1",
  price:1999
}));


//Arrays and Function:

const newArray =[100,200,300,400]

function returnArray(getArray) {
  return getArray[1]
}

console.log(returnArray(newArray));
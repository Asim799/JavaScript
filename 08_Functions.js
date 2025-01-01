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
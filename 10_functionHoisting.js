//Declaring simple function 

console.log(incrementValueByOne(3));
function incrementValueByOne(num){
  return num + 1;
}

//storing function in variable:
console.log(incrementValueByTwo(5));//will give error because of function is declared as a variable

const incrementValueByTwo = function (num){
  return num + 2
}
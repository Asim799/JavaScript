const course = {
  username: "Farhan",
  price: 999,
  welcomeMessage: function() {
    console.log(`${this.username}, welcome to this course!`);
    console.log(this);
  }
}
console.log(course.welcomeMessage()); //printing the current context

course.username = "Asim"//changing the current context
console.log(course.welcomeMessage());

console.log(this); // will give only empty object

// defining function:
function hello() {
  let username ="Asim"
  console.log(this.username); //when we run this inside a function then it will give object which will have values
}
hello();

//Defining Arrow Functions:

const display = () => {
  let username = "Asim799"
  console.log(this.username);
}

display();// this will also give undefined value

//Defining arrow func with explicit return statement:
const addTwo = (num1,num2)=>{
  return num1 + num2
}
console.log(addTwo(4,5));


//Defining implicit arrow function:
const minusTwo = (num1,num2) =>(num1 - num2)
console.log(minusTwo(10,5));


// defininf Object in implicit arrow Function:

const obj = () => ({username:"Asim799"})

console.log(obj());
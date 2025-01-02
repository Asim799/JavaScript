// Global and local scopes 

var c = 300;

if (true) {
let a = 10; //local scope
const b= 20; //local scope
var c = 30; //var is always global scope
}

let a = 50;//Now this is global scope
const b = 60;// Now this is global scope

console.log(a);
console.log(b);
console.log(c);
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

//local and global scope in functions:
function one(){
  const username = "Asim";
  function two(){
    const website = "codeByte"
    console.log(username);
  }
 // console.log(website); local scope
  two()
}
//console.log(username); local scope
one()


//Global and local scope in if-else condition:
if(true){
  const username = "Asim"
  if(true){
    const website = "codeByte"
    console.log(username,website);
  }
  //console.log(username,website);
}

//console.log(username, website);
//immediately invoked function expression: without polluting the global scope

//Normal Function:

// function codeByte() {
//   console.log("DB Connected!");
// }

// codeByte();

//IIFE Function:

(function codeByte() {
  //named iife
  console.log("Hello There!");
})();

//Arroow Function with IIFE:
((name) => {
  //unnamed iife
  console.log(`Hey, ${name}! How are you?`);
})("Asim");

//For loop:
// let num = 10;
// for (let i = 0; i <= num; i++) {
//   const element = i
//   if(i==5)console.log("5 is the lucky number");
  
//   console.log(element);// local scope
// }

//console.log(element);// not accessible due to scope


//Nested Loops:
// for(let i = 1;i<=10;i++){
//   console.log(`Outer loop: ${i}`);
//   for (let j = 1; j <=i; j++) {
//     console.log(`Inner Loop: ${j} and Outer loop: ${i}`);
//   }
// }


//Print Tables from 1 to 10:
// for(let i =1;i<=10;i++){
//   console.log("\n");
//   console.log(`Table of ${i}`);
//   console.log("\n");
  
//   for(let j=1;j<=i;j++){
//     console.log(`${i} x ${j} = ${i*j}`);
//   }
// }

//For loops in Arrays:
// const myArray = new Array('Hello','This','is','channel','codeByte')
// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i])
// }

//Break and Continue in for loops

for (let i = 1; i <=10; i++) {
  if (i==6) {
    console.log(`${i} detected!`);
    break   //break is used to break the loop 
  }
  console.log(`Value for i is ${i}`);
}
for(let i=1;i<=10;i++){
if(i==5){
  console.log(`${i} detected!`);
  continue   //will skip the 5th iteration of the loop
}
  console.log(`Value for i is ${i}`);
}
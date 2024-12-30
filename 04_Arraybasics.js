const arr =[1,2,3,4,5];
console.log(arr[0]);
//Alternative method to define Array:
  const arr2 = new Array(2,4,6,8,"Asim");
  console.log(arr2);

const arr3 =["Hello","This","is","Asim"]
console.log(arr3[0]);

//Methods in Array:

const newArray =[1,2,3,4,5]
console.log(newArray);

//1. Add element to the last position in array:
console.log(newArray);
newArray.push(6)
console.log(newArray);

//2. Remove element from the last position:
newArray.pop();

//3. Add element to the first position of Array:
newArray.unshift(9);
console.log(newArray);

//4. Remove first element from the Array:
newArray.shift();
console.log(newArray);

//5. Query in Arrays:
console.log(newArray.includes(4))
console.log(newArray.indexOf(4));

//6. Convert the array into string:
const myarr =[4,7,9,2,1,5,8]
console.log(myarr);
console.log(typeof myarr);
const newArr = myarr.join()
console.log(newArr);
console.log(typeof newArr);

//slice and splice method in array:
//slice:
const myArray = [1,2,3,4,5,6]
let myNewArray = myArray.slice(1,3)
console.log("A",myArray);
console.log(myNewArray);

//splice:
let myNewArray2 = myArray.splice(1,3)
console.log("B", myArray);
console.log(myNewArray2);




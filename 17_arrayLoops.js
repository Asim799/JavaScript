//for of loop in array of numbers:
const arr = new Array(1,2,3,4,5)
for(const array of arr){
  console.log(array);
}

//for of loop in array of strings:
const greetings = "Hello world!"
for(const greet of greetings){
  console.log(greet);
}

//Maps: used for key value just like object but does not print duplicate key and value
const map = new Map()
map.set('IN', 'India')
map.set('EN', 'England')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
map.set('IN', 'India')//will not get print 
console.log(map);


// for of loop in map function:
for(const key of map){
  console.log(key);
} //this will print as arrow with key value pair

for (const [key,value] of map){
  console.log(key,":-",value);
}

//for loop in Objects:
//forinloop

const myObject={
  'HTML':'for Basic Webpage',
  'CSS':'for Styling the Webpage',
  'JavaScript':'to make page alive and dynamic',
  'Reactjs':'for Single Page Application'
}
for(const key in myObject){
  console.log(`${key} is used ${myObject[key]}`);
}


//For in loop : arrays
const myArray =["Hello","my","dear","friends"]

for(const key in myArray){
  console.log(myArray[key]);
}


//foreach loop in arrays:
const coding=['js','cpp','python','java','reactjs'];

coding.forEach(  (values) =>{
  console.log(values,'\n');
} )

function printMe(items){
  console.log(items);
}
coding.forEach(printMe)//only call the value not function

coding.forEach((items,index,arr)=>{
  console.log(items,index,arr)
})
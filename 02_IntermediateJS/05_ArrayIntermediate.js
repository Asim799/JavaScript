//Incorrect way to merge arrays:

const marvelHeroes=["Spiderman","Iron Man","Hulk","Thor"];
const dcHeroes = ["Batman","Superman","Flash"];
 //marvelHeroes.push(dcHeroes);
//console.log(marvelHeroes[5][2]);
// or 
const crossOver =marvelHeroes.concat(dcHeroes);
console.log(crossOver);

//Spread operator to merge arrays:
const allNewHeroes = [...marvelHeroes,...dcHeroes];
console.log(allNewHeroes);


//flat method:
const anotherArray =[1,2,3,[4,5,6],7,[8,9,[10,11,12]]];
console.log(anotherArray.flat(1)); //value of flat can be 1,2 or Infinity

//To check given value is array or not:
console.log(Array.isArray("Asim"));

//Convert into Array:
console.log(Array.from("Asim"));// will give array
console.log(Array.from({
  name:"Asim",
})); // will.give empty array

//Convert Into Array:

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));



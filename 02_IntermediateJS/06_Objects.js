const mySymbol = Symbol("key1");

//Defining Object
const myData = {
    name: "Asim",
    fullName: "Asim Churihar",
    email: "asimchurihar17@google.com",
    age: 18,
    isLogin: false,
    lasLogin: ["Monday", "Thursday"],
    [mySymbol]:"myKey1"
};
console.log(myData.name);

//Access in different way:
console.log(myData["name"]);
console.log(myData["fullName"]);

//use symbol datatype:
console.log(myData[mySymbol]);
console.log( typeof myData[mySymbol]);

//change the value in object:
myData.email="asimchurihar18@gchat.com";
console.log(myData);

//If you want to freeze the value which should not change
//Object.freeze(myData);
myData.email= "hello worldn@gamil";
console.log(myData);

//use function in Object:
myData.greeting= function(){
  console.log("Hello User");
}

myData.greeting2 = function(){
  console.log(`Hello User, ${this.fullName}`);
}

console.log(myData.greeting());
console.log(myData.greeting2());

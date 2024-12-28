const name = "Asim Churihar";
let repoCount = 50;
//console.log(name + repoCount);

console.log(`Hello my name is ${name} and my RepoCount is ${repoCount}.`);

const myName = new String("AsimChurihar");
console.log(myName[0]);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(4));
console.log(myName.indexOf("s"));
const newString = myName.substring(0, 4);
console.log(newString);
const anotherString = myName.slice(-8, -4);
console.log(anotherString);

const newString2 = "     Asim    ";
console.log(newString2);
console.log(newString2.trim());

const URL = "https://www.google.com/asim%20churihar";

console.log(URL.replace("%20", "-"));

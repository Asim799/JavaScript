// //Date:

// let myDate = new Date();
// console.log(myDate);

// //Date into readable format:
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// //type of date:
// console.log(typeof myDate);

// //Create your date manually:
// let newDate = new Date("12-29-2024");
// console.log(newDate.toLocaleString());

// //TimeStamp:
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// //Compare b/w the timestamp:
// console.log(myTimeStamp);
// console.log(newDate.getTime());

// //get time in seconds:
// console.log(Math.floor(Date.now() / 1000));

//get Day,Month:

let newDate = new Date();
console.log(newDate.toLocaleString());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

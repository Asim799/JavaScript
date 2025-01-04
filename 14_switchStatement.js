//Syntax of SwitchCase statement:
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

//For numbers as cases:
const month = 4;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  default:
    console.log("Invalid!");
}

//String as Cases:

const week = "Monday";

switch (week) {
  case "Sunday":
    console.log("Sunday");
    break;
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Wednesday":
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Case!");
}

//Singleton Objects

const JSUser = new Object()
JSUser.id="123abc";
JSUser.name="Asim Churihar";
JSUser.isLoggedIn = false;
JSUser.DOB="22/12/1999"
//console.log(JSUser);

//Nested Objects:
const newUser ={
  email:"asimchurihar@email.com",
  name:{
    fullName:{
      userFullName:{
        firstName:"Asim",
        lastName: "Churihar"
      }
    }
  }
}

//console.log(newUser.name.fullName.userFullName.firstName);


//Combining Objects:

//Incorrect Way:
const obj1={
  1:"a",2:"b"
}
const obj2={
  3:"c",
  4:"d"
}
//const obj3 ={obj1,obj2}
//console.log(obj3);

//correct Way for Combining objects:
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
//syntax= Object.assign(targeted Object i.e {},obj1,obj2)

// Alternative and Latest method to merge objects:
const obj4 ={...obj1,...obj2};
console.log(obj4);

//How Objects gets stored in Databases:

const users =[
  {
    id:1,
    email:"asimchurihar@email.com"
  },
  {
    id:2,
    email:"asimchurihar2@email.com"
  }
  ]
  console.log(users[0].email);
  
  
  //Access keys and values from any particular objects, Returns Array, useful for Databases
  console.log(Object.keys(JSUser));
  console.log(Object.values(JSUser));
  console.log(Object.entries(JSUser));
  console.log(Object.hasOwnProperty('isLoggedIn'));
  
  
  //Destructuring Objects:
  const course ={
    courseName: "Html from basic to advance",
    price:"1999/-",
    courseInstructor:"Asim"
  }
  
  const {courseInstructor:instructor} = course;
  
//  console.log(courseInstructor);
  console.log(instructor);
  
  
//JSON - JavaScript Object Notation: Used in API's (Application Programming Interface)
//JSON can be as Object or Array:
//Example of Object as Json:
{
  "courseName":"HTML basic to advance",
  "price":1999,
  "courseInstructor":"Asim"
}

//Example of Array as JSON, Note: there can be multiple objects in array:

[
  {},
  {},
  {}
  ]
  
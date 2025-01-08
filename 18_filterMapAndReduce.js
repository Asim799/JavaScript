// To Filter the array
const newArray = new Array(1,2,3,4,5,6,7,8,9,10)
const newNums= newArray.filter((nums)=> nums < 6)//return keyword is not required for explicit function
console.log(newNums);

const newNums2= newArray.filter((nums)=>{ return nums < 6
})//return keyword is  required for explicit function
console.log(newNums2);


// this can be done using forEach loop as well:
const newNum =[]

newArray.forEach((num)=>{
  if(num<6)
  newNum.push(num);
})
console.log(newNum);

//Small movie filter project

const movie =[
  {
    name:'Phir Hera Pheri',
    genre:'Comedy',
    release:1998,
    boxOffice:'300'
  },
  {
    name:'Pathaan',
    genre:'Action',
    release:2024,
    boxOffice:'1200'
  },
  {
    name:'Jawan',
    genre:'Action',
    release:2024,
    boxOffice:'1500'
  },
  {
    name:'Golmaal 4',
    genre:'Comedy',
    release:2019,
    boxOffice:'400'
  },
  {
    name:'Karan Arjun',
    genre:'Action',
    release:1995,
    boxOffice:'200'
  },
  {
    name:'Bhool Bhulayya 3',
    genre:'Horror',
    release:2022,
    boxOffice:'600'
  },
  {
    name:'Stree',
    genre:'Horror',
    release:2016,
    boxOffice:'700'
  }
  ]
  
  let movieFilter = movie.filter((movies)=>{
    return movies.boxOffice >= 300 && movies.release > 2000
  })
  console.log(movieFilter);
  
  //map is used for modifying the array as well
  const myNums =[1,2,3,4,5,6,7,8,9,10,12,13,14,15]
  
  // const modifiedNums = myNums.map((num)=> num + 10)
  // console.log(myNums);
  // console.log(modifiedNums);
  
//Chaining of maps and filters

const createFilter = myNums
                    .map((num)=>num*10)
                    .map((num)=>num +2)
                    .filter((num)=> num>=35)
console.log(createFilter);


//Reduce:
const priceList =[100,250,313,455,500]

const totalPrice = priceList.reduce(function(acc,currVal){
  console.log(`acc:${acc} and currVal:${currVal}`);
  return acc + currVal
},0)
console.log(`Total Price: ${totalPrice},\n`);

//Buying course project:

const courses =[
  {
    name:'JavaScript',
    price:1999
  },
  {
    name:'Reactjs',
    price:2999
  },
  {
    name:'Frontend Development',
    price:4999
  },
  {
    name:'FullStack Web Development',
    price:12999
  },
  ]
  
  const myTotal = courses.reduce((acc,item)=>(acc + item.price),0)
  console.log(myTotal);
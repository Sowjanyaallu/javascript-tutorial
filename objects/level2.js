const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  
  let maxs = 0;
  let high ;
  for( const key in users){
   const user = users[key]
   if(user.skills.length > maxs){
    maxs = user.skills.length;
    high = user;
   }
  }
  console.log(high)


//Count logged in users, count users having greater than equal to 50 points from the following object.
let count = 0
let login = 0
for(keys in users){
      if(users[keys].isLoggedIn){
          login++
      }
      if(users[keys].points >= 50){
          count++;
      }
    
  }
  console.log(`${count} users have greater than equal to 50 points`)
  console.log(`${login} users logged in`)


//Find people who are MERN stack developer from the users object
let counts = 0
let Login = 0
for(keys in users){
        let stack = users[keys].skills
        if(stack.includes('MongoDB','Express','React','Node')){
         console.log(`${keys} are mern stack developer`)
        }
      
    }

//Set your name in the users object without modifying the original users object
users.bhanu = {
      email : 'bhanu@gmail.com',
      skills : ['html','css','js','python'],
      age : 20,
      isLoggedIn :false,
      points:30
}
console.log(users)   

//get all keys and values of user object
let obj = Object.entries(users)
console.log(obj)

//Get all keys or properties of users object
let objs = Object.keys(users)
console.log(objs)

//get all values of users object
let objss = Object.values(users)
console.log(objss)


//Use the countries object to print a country name, capital, populations and languages.
let countries = {
  India :{
  capital: 'New delhi',
  population : '140 cr',
  languages : ['Telugu','hindi']
  },
  America : {
      capital : 'washington,D.C',
      population : '333 cr',
      languages : ['english'] 
  },
  Russia : {
      capital : 'Moscow',
      population : '250 cr',
      languages : ['russian','english']
  }
}

console.log(countries)


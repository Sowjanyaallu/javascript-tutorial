//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("enter your age")

if(age>=18){
    console.log('You are old enough to drive')
} else{
    
    console.log(`your are left with ${18-age} years to drive`)
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

const myAge=25
let yourAge = ''
 let ages=prompt("enter your age")
if(myAge<=ages){
   yourAge +=ages
   console.log(`your are ${yourAge-25} years older than me` )
}else{
  console.log(`you are ${25-yourAge} youth than me`)
}

//using if else

let a= 4
let b=3
if(a>=b){
console.log(`${a} is greater than ${b}`)
} else {
console.log(`${b} is greater than ${a}`)
}

//ternary operator

let c= 4
let d=3
let result = (a>=b)? `${a} is grater than ${b}` : `${b} is greater than ${a}`
console.log(result)

//How do you check, if a number is even or not using JavaScript?

let num = parseInt(prompt('enter a number'))
if(num%2 ==0){
 console.log(`${num} is an even number`)
} else{
console.log(`${num} is an  odd number`)
}

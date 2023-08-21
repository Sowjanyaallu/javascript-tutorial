let firstName = 'sneha'
let lastName = 'kola'
let country = 'India'
let city = 'rajmandry'
let maritalStatus = 'married'
let year = 2022;

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(maritalStatus))
console.log(typeof(year))

let sum = "10"
let sum1 = 10

console.log(sum == sum1)

let num = parseInt('9.8')
let Num = 10;

console.log(num == Num)


let text1 = 27;
let str = "sowjanya"
let Word = true


let A=  4 > 3
let B=  4 >= 3
let C=  4 < 3
let d=  4 <= 3
let e=  4 == 4
let f=  4 === 4
let g=  4 != 4
let h=  4 !== 4
let i=  4 != '4'
let j=  4 == '4'
let k=  4 === '4'

console.log(A)
console.log(B)
console.log(C)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(A)
console.log(k)


let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3

console.log(isLightOn)
console.log(isRaining)
console.log(isHungry)
console.log(isMarried)
console.log(truValue)
console.log(falseValue)

let Z= 4 > 3 && 10 < 12
let Y= 4 > 3 && 10 > 12
let X= 4 > 3 || 10 < 12
let w= 4 > 3 || 10 > 12
let v= !(4 > 3)
let u= !(4 < 3)
let t= !(false)
let s= !(4 > 3 && 10 < 12)
let r= !(4 > 3 && 10 > 12)
let q= !(4 === '4')

console.log(Z)
console.log(Y)
console.log(X)
console.log(w)
console.log(v)
console.log(u)
console.log(t)
console.log(s)
console.log(r)
console.log(q)

let len = 'python, jargon'
let len1= len.length
console.log(len1)


const now = new Date()
console.log(now.getFullYear())

const Now = new Date()
console.log(Now.getMonth())

const date = new Date()
console.log(date.getDate())

const hour = new Date()
console.log(hour.getHours())

const min = new Date()
console.log(min.getMinutes())

const sec = new Date()
console.log(sec.getSeconds())

const time = new Date()
console.log(time.getTime())


const baseValue = prompt('enter base');
const heightValue = prompt('enter height');

const areaValue = (0.5*baseValue*heightValue);
console.log(`the area of the triangle ${areaValue}`)



const sideA = parseInt(prompt('enter side a'));
const sideB = parseInt(prompt('enter side b'));
const sideC = parseInt(prompt('enter side c'));

const perimeter = (sideA+sideB+sideC);

console.log(`the perimeter of triangle ${perimeter}`)


const lenghtValue =parseInt( prompt('enter a lenght'));
const widthValue =  parseInt(prompt('enter a width'));

const area= (lenghtValue*widthValue);
const perimeterRectangle= 2*(lenghtValue+widthValue);

console.log(` the area of rectangle ${area}`)
console.log(`the perimeter of rectangle ${perimeterRectangle}`)


const radius = prompt('enter a radius ');
const  pi =  prompt('enter a pi');

const areaOfCircle = (pi*radius*radius);
const circumference = (2*pi*radius)

console.log(`the area of circle ${areaOfCircle}`)
console.log(`the circumference of circle ${circumference}`)

const hours = prompt('enter a hours');
const rate = prompt('enter rate');


const ratePerHour=(hours*rate);
console.log(`your weekly earing is ${ratePerHour}`)

let myName = 'bhanu'
if(myName.length>7){
    console.log(`${myName}your name is long`)
} else {
    console.log('your name is short')
}


const FirstName = 'sowjanya'
const LastName = 'allu'

 console.log(FirstName.length==LastName.length)

 console.log(`your first name , ${FirstName} is longer than your family name ,${LastName}`)


let myAge = 250
let yourAge = 25

console.log(`i am 225 years older than you`)


const non = new Date()
const years = non.getFullYear()
const month = non.getMonth()+1
const days = non.getDate()
const Hour = non.getHours()
const mins =non.getMinutes()
const secs = non.getSeconds()

console.log(`${year}/${month}/${days} ${Hour}:${mins}`)





    



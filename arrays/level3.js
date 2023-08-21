const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
console.log(Math.max(...ages))
console.log(Math.min(...ages))

let median;
let middleIndex = Math.floor(ages.length/2)
median = ages[middleIndex]
console.log(median)


const sums = ages.reduce((a, b) => a + b, 0);
const avg = (sums / ages.length) || 0;

console.log(`The sum is: ${sums}. The average is: ${avg}.`);


let sum = 0;
for(const num of ages){
    sum +=num
    average = sum /ages.length
    
}
console.log(average)


let min= Math.min(...ages)
console.log(min)

let max = Math.max(...ages)
console.log(max)

let average= 22.8;

let a = Math.abs(min-average)
let b= Math.abs(max-average)
console.log(a)
console.log(b)
console.log(a==b)


let countries = ['india','america','australia','russia','africa','chain','bangladesh','bhutan','indonesia','france','spain','sweden','uk']

console.log(countries.slice(0,10))

let midIndex= (countries.length-1)/2
let midCountry = countries[midIndex]
console.log(midCountry)


let middleCon = countries.length/2
const firstArray = countries.splice(0,middleCon)
const secondArray = countries.splice(-middleCon)
console.log(firstArray)
console.log(secondArray)
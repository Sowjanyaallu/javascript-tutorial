//Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(function(country){
    console.log(country)
})

//Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(function(name,index,arr){
    console.log(name,index,arr)
})


//Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(num => console.log(num))


//Use map to create a new array by changing each country to uppercase in the countries array.
const newCountry1 = countries.map((country1)=> country1.toUpperCase() )
console.log(newCountry1)


//Use map to create an array of countries length from countries array.
const newCountry = countries.map((country)=> country.length)
console.log(newCountry)


//Use map to create a new array by changing each number to square in the numbers array
const newNumber = numbers.map((nums) => nums*nums)
console.log(newNumber)

//Use map to change to each name to uppercase in the names array
const newNames = names.map((name)=> name.toUpperCase() )
console.log(newNames)

//Use filter to filter out countries containing land.
const newCountries = countries.filter((countrie)=> countrie.includes('land'))
console.log(newCountries)

//Use filter to filter out countries having six character.
const newCountrie = countries.filter((countri)=> countri.length === 6)
console.log(newCountrie)

//Use filter to filter out countries containing six letters and more in the country array.
const newCountri = countries.filter((countr)=> countr.length >= 6)
console.log(newCountri)

//Use filter to filter out country start with 'E';
const newCountr = countries.filter((countr)=> countr.startsWith('E'))
console.log(newCountr)

//Explain the difference between some and every
//.every can print all are satisify like and
let fruits = ['banana','apple','orange','mango',27]
const getStringLists = fruits.every((fruit) => typeof fruit == 'string')
console.log(getStringLists)

// some print any one can be satisify like or
const getStringListss = fruits.some((fruite)=> typeof fruite == 'string')
console.log(getStringListss)

//Use some to check if some names' length greater than seven in names array
const newNamess = names.some((namee) => namee.length >=7)
console.log(newNamess)

//Use every to check if all the countries contain the word land
const newCountriees = countries.every((namee) => namee.includes('land'))
console.log(newCountriees)

//Explain the difference between find and findIndex.
//using .find it returns value which can satisify first
const newnumberss = numbers.find((number) => number>=5)
console.log(newnumberss)
//using .findIndex it can be return index 
const newNumbers = numbers.findIndex((numb) => numb >=5 )
console.log(newNumbers)

//Use find to find the first country containing only six letters in the countries array
const newCountriess = countries.find((con) => con.length === 6 )
console.log(newCountriess)

//Use findIndex to find the position of the first country containing only six letters in the countries array
const newCountriesss = countries.findIndex((con) => con.length === 6 )
console.log(newCountriesss)


//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const newCoun = countries.findIndex((con,index,arr) => con.includes('Norway'))
console.log(newCoun)

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const newCou = countries.findIndex((con,index,arr) => con.includes('Russia'))
console.log(newCou)

const callback = (number) => {
    return number + 2
  }
  function addNum(callback, num) {
    return callback(num) + num
  }
  
  console.log(addNum(callback, 3))




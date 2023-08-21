//Exercises Level1
//Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

//Display the countries object as a table
const countrie = {
        '1':'india',
        '2': 'america'
  }
console.table(countrie)

//Use console.group() to group logs

const names = ['Asabeneh', 'Brook', 'David', 'John']
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
console.group('Names')
console.log(names)
console.groupEnd()

console.group('Users')
console.log(user)
console.groupEnd()

//Exercises Level2
//10 > 2 * 10 use console.assert()
console.log(10 > 2 * 10,'10 is not greater than 2*10')

//Write a warning message using console.warn()
console.warn("This is danger")

//Write an error message using console.error()
console.error("This is Error")

//Exercises Level3
//Check the speed difference among the following loops: while, for, for of, forEach
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')
